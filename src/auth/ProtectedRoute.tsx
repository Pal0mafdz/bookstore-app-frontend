import { useAuth0 } from "@auth0/auth0-react"
import {Navigate, Outlet} from "react-router-dom"

//protects the routes only users who are loged in can access to
const ProtectedRoute = () =>{
    const {isAuthenticated, isLoading}  = useAuth0();

    //const {isAuthenticated}  = useAuth0();
    if(isLoading){
        return null;
    }

    if(isAuthenticated){
        //returns all roots
        return <Outlet/>;
    }

    //if its not authenticated is going to take them back to the homepage
    return <Navigate to = "/" replace/>;

    //return isAuthenticated ? (<Outlet/>) : (<Navigate to="/" replace/>)

}

export default ProtectedRoute