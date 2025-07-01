import { useSearchBooks } from "@/api/BookApi";
import GenreFilter from "@/components/GenreFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultsCard from "@/components/SearchResultsCard";
import { useState } from "react";
import { useParams } from "react-router-dom"


export type SearchState = {
  searchQuery: string;
  page: number;
  selectedGenres: string[];
}

const SearchPage = () => {
    const {city} = useParams();
    const [searchState, setSearchState] = useState<SearchState>({
      searchQuery: "",
      page: 1,
      selectedGenres: [],
    })

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const { results, isLoading } = useSearchBooks(searchState, city);

    const setSelectedGenres = (selectedGenres: string[]) =>{
      setSearchState((prevState)=>({
        ...prevState,
        selectedGenres,
        page:1,
      }))
    }

    const setPage = (page: number) =>{
      setSearchState((prevState)=>({
        ...prevState,
        page,
      }))
    }


    const setSearchQuery = (searchFormData: SearchForm) =>{
      setSearchState((prevState)=>({
        ...prevState,
        searchQuery: searchFormData.searchQuery,
        page: 1,

      }))

    }

    const resetSearch = () =>{
      setSearchState((prevState)=>({
        ...prevState,
        searchQuery: "",
        page: 1,

      }))
    }

    if(isLoading){
      <span>Loading...</span>
    }

    if(!results?.data || !city){
      return <span>No results found</span>;

    }
    

  return (
   <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
    <div id="genres-list">
      <GenreFilter selectedGenres={searchState.selectedGenres}
      onChange={setSelectedGenres}
      isExpanded={isExpanded}
      onExpandedClick={()=> setIsExpanded((prevIsExpanded)=> !prevIsExpanded)}
      />
    </div>
    <div id="main-cont ent" className="flex flex-col gap-8">
    
      <SearchBar searchQuery={searchState.searchQuery} placeHolder="Search by Genre or Book name" onSubmit={setSearchQuery} onReset={resetSearch} textColor="text-black"/>
  
      <SearchResultInfo total={results.pagination.total} city={city}/>
      {results.data.map((book)=>(
        <SearchResultsCard book={book}/>

      ))}
      <PaginationSelector page={results.pagination.page} 
      pages={results.pagination.pages} 
      onPageChange={setPage}/>

    </div>
   </div>
  )
}

export default SearchPage