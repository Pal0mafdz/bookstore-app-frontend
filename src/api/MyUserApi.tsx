import { useAuth0 } from "@auth0/auth0-react";
import  { useMutation, useQuery}  from "react-query";
import { toast } from "sonner";
import { User} from '@/types'

//url of the backend api
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () =>{
    const {getAccessTokenSilently} = useAuth0();

    const getMyUserRequest = async (): Promise<User> =>{
        const accessToken = await getAccessTokenSilently();

        //fetch request
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        })

        if(!response.ok){
            throw new Error("Failed to fetch user")
        }
        return response.json();
       
    }
    //reactQuery
    const { data: currentUser, isLoading, error} = useQuery("fetchCurrentUser", getMyUserRequest);

    if(error){
        toast.error(error.toString());
    }
    return{currentUser, isLoading}
}


type CreateUserRequest = {
    auth0Id: string;
    email: string;
}

export const useCreateMyUser = () =>{
    const {getAccessTokenSilently} = useAuth0();

    const createMyUserRequest = async (user: CreateUserRequest) =>{
        const accestoken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accestoken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),

        })
        if(!response.ok){
            throw new Error("Failed to create user");
        }
        // return response.json();
    }

    //pass fetch request, manages things like loading etc isLoading = isPending
    const {mutateAsync: createUser, isLoading, isError, isSuccess} = useMutation( createMyUserRequest );

    return{
        createUser,
        isLoading, 
        isError,
        isSuccess,
    }

}

type UpdateMyUserRequest ={
    name:string;
    addressLine1: string;
    city: string;
    country: string;

}

export const useUpdateMyUser = () =>{
    
    //get the acces token
    const{ getAccessTokenSilently } = useAuth0();
    const useUpdateMyUserRequest = async (formData: UpdateMyUserRequest)=>{ 
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
            throw new Error("Failed to update user");
        }

    }

    const{ mutateAsync: updateUser, isLoading, isSuccess, error, reset} = useMutation(useUpdateMyUserRequest);
    
    if(isSuccess){
        toast.success("User profile updated!");
    }

    if(error){
        toast.error(error.toString());
        reset(); //clears the toast
    }

    return{ updateUser, isLoading};
}
//appjson tells the backend server what type to expect
