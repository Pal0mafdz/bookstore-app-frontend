import { useCreateMyUser } from '@/api/MyUserApi';
import {Auth0Provider , AppState, User } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};

//connect to auth0 data
//authentication for the clientes api = audience
const Auth0ProviderWithNavigate = ({children}: Props)=>{
    // const { createUser } = useCreateMyUser();
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT;
    //calls back to the app
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if(!domain || !clientId || !redirectUri || !audience){
        throw new Error("unable to initialise auth");
    }

    //appstate grabs the url we had before
    const onRedirectCallback = (appState?: AppState, user?: User) =>{
        // console.log("user", user);
        // if(user?.sub && user?.email){
        //     createUser({auth0Id: user.sub, email: user.email});
        // }
        navigate("/auth-callback");

    }

    //auth provider
    return(
        <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{redirectUri: redirectUri, audience}}
        onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>

    )

};

export default Auth0ProviderWithNavigate;

