import { SearchState } from "@/pages/SearchPage";
import { BookSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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