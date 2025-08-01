import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient} from "react-query";
//import { useMatch } from "react-router-dom";
import { toast } from "sonner";
import { Book } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyBookById = (bookId?: string)=>{
    const { getAccessTokenSilently } = useAuth0();

    const getBookRequest = async (): Promise<Book> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/book/${bookId}`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }

        })

        if(!response.ok){
            throw new Error("Failed to get book");
        }
        return response.json();
    }

    const {data: book, isLoading} = useQuery(["fetchBook", bookId], getBookRequest,{
        enabled: !!bookId,
    });

    return {book, isLoading};
}


export const useGetMyBooks = () =>{
    const { getAccessTokenSilently } = useAuth0();

    const getBooksRequest = async (): Promise<Book[]> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/book`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to get books");
        }

        return response.json();
    };

    const { data: books, isLoading} = useQuery("fetchMyBooks", getBooksRequest);

    return { books, isLoading };

}

export const useDeleteMyBook = () => {
    const {getAccessTokenSilently} = useAuth0();
    const queryClient = useQueryClient();

    const deleteBookRequest = async (bookId: string): Promise<void> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/book/${bookId}`, {
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${accessToken}`,
        }
    })

    if(!response.ok){
        throw new Error("Failed to delete the book")
    }
    return response.json();

   }

   const { mutate: deleteBook, isLoading} = useMutation(deleteBookRequest, {
    onSuccess: () =>{
        toast.success("Book deleted successfully!");
        queryClient.invalidateQueries("fetchMyBooks");
    },
    onError: () =>{
        toast.error("Unable to delete book");
    }

   });

    // if(isSuccess){
    //     toast.success("Book deleted successfully!");
    //     //queryClient.invalidateQueries("fetchMyBooks");
       
        
    // }

    // if(error){
    //     toast.error("unable to delete book");
    // }

    return { deleteBook, isLoading};

}



export const useGetMyBook = () =>{
    const {getAccessTokenSilently} = useAuth0();

    //                          defines the return type
    const getMyBookRequest = async(): Promise<Book> =>{
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/book`, {
            method: "GET",
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })

        if(!response.ok){
            throw new Error("Failed to get book");
        }
       return response.json();


    }
    const { data: book, isLoading } = useQuery("fetchMyBook", getMyBookRequest);

    return{ book, isLoading };

}

export const useCreateMyBook = () =>{
    const {getAccessTokenSilently} = useAuth0();

    const createMyBookRequest = async(bookFormData: FormData): Promise<Book> =>{
        const accessToken = await getAccessTokenSilently();

        //fetch
        const response = await fetch(`${API_BASE_URL}/api/my/book`,{
            method: "POST",
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
            body: bookFormData,
        });
        if(!response.ok){
            throw new Error("Failed to create book");
        }
        return response.json();
        // return

    }

    const { mutate: createBook, isLoading, isSuccess, error,} = useMutation(createMyBookRequest);

    if(isSuccess){
        toast.success("Book uploaded!");
    }

    if(error){
        toast.error("unable to update book");
    }

    return { createBook, isLoading};
}

export const useUpdateMyBook = () =>{
    const {getAccessTokenSilently} = useAuth0();

     const updateMyBookRequest = async({bookId, bookFormData,}: {bookId: string, bookFormData: FormData;}): Promise<Book> =>{
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/book/${bookId}`, {
            method: "PUT",
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
            body: bookFormData,
        })

        if(!response){
            throw new Error("Failed to update book");
        }
        return response.json();
     }

     const { mutate: updateBook, isLoading, error, isSuccess} = useMutation(updateMyBookRequest);

     if(isSuccess){
        toast.success("Book Updated");
     }

     if(error){
        toast.error("Unable to update book");
     }

     return { updateBook, isLoading};
}