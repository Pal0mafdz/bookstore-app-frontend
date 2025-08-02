import { Cart } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAddMyCart = ()=>{
    //get access tokem
    const {getAccessTokenSilently} = useAuth0();
    const queryClient = useQueryClient();

    const addMyCartRequest = async({ bookId, quantity}: {bookId: string, quantity: number}): Promise<Cart> =>{
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/cart`, {
            method: "POST",
            headers:{
                Authorization: `Bearer ${accessToken}`,

            },
            body: JSON.stringify({bookId, quantity}),
        })

        if(!response.ok){
            throw new Error("failed to add book to cart");
        }
        return response.json();

    }

    const { mutate: addToCart, isLoading} = useMutation(addMyCartRequest, {
        onSuccess: () =>{
            toast.success("Item added to cart");
            queryClient.invalidateQueries("fetchMyCart");
        },
        onError: () =>{
            toast.error("Unable to add item into the cart");
        }
    
       });
    
    
    return { addToCart, isLoading};

}

export const useDeleteItem = () =>{
    const {getAccessTokenSilently} = useAuth0();
    const queryClient = useQueryClient();

    const deleteItemRequest = async(bookId: string): Promise<Cart> =>{
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/cart/${bookId}`, {
            method: "DELETE",
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })

        if(!response.ok){
            throw new Error("Failed to delete item from the cart");
        }
        return response.json();
    }

    const { mutate: deleteItem, isLoading} = useMutation(deleteItemRequest, {
        onSuccess: () =>{
            toast.success("Item deleted");
            queryClient.invalidateQueries("fetchMyCart");
        },
        onError: () =>{
            toast.error("Unable to delete item");
        }
    
       });
    
    
    return { deleteItem, isLoading};

}

export const useGetMyCart = () =>{

    const {getAccessTokenSilently} = useAuth0();

    const getMyCartRequest = async(): Promise<Cart> =>{
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/cart`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })

        if(!response.ok){
            throw new Error("Failed to get cart");
        }
        return response.json();

    }

    const { data: cart, isLoading } = useQuery("fetchMyCart", getMyCartRequest);

    return{ cart, isLoading };
}