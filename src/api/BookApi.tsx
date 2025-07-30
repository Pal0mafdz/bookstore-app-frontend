import { SearchState } from "@/pages/SearchPage";
import { Book, BookSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetBook = (bookId?: string)=>{
    const getBookByIdRequest = async(): Promise<Book>=>{
        const response = await fetch(
            `${API_BASE_URL}/api/book/${bookId}`
        )

        if(!response.ok){
            throw new Error("Failed to get the book");
        }
        return response.json();

    }
    //query manages the request for us
    const {data: book, isLoading} = useQuery("fetchBook", getBookByIdRequest, {
        enabled: !! bookId,
    });

    return { book, isLoading};
}

export const useSearchBooks = (searchState: SearchState, city?: string)=>{
    const createSearchRequest = async(): Promise<BookSearchResponse>=>{
        const params = new URLSearchParams();
        params.set("searchQuery", searchState.searchQuery);
        params.set("page", searchState.page.toString());
        params.set("selectedGenres", searchState.selectedGenres.join(","));
        
        const response = await fetch(
            `${API_BASE_URL}/api/book/search/${city}?${params.toString()}`
        )

        if(!response.ok){
            throw new Error("Failed to get book");
        }
        return response.json();
    }

    const {data: results, isLoading} = useQuery(
        ["searchBooks", searchState, city],
        createSearchRequest,
        {enabled: !!city}
    )

    return{
        results,
        isLoading,
    }
}