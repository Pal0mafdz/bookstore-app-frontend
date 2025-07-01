import { genresList } from "@/config/book-genres-config";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props ={
    onChange: (genres: string[]) =>void
    selectedGenres: string[];
    //if the genre list is expanded or not
    isExpanded: boolean,
    onExpandedClick: () => void;

}

const GenreFilter = ({onChange, selectedGenres, isExpanded, onExpandedClick}: Props)=>{

    const handleGenreChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const clickedGenre = event.target.value;
        const isChecked = event.target.checked;

        const newGenresList = isChecked ? [...selectedGenres, clickedGenre] : selectedGenres.filter((genre) => genre !== clickedGenre);

        onChange(newGenresList);

    }

    const handleGenreReset = () => onChange([]);

    return (
        <>
        <div className="flex justify-between items-center px-2">
            <div className="text-md font-libre semibold mb-2">Filter by Genre</div>
            <div onClick={handleGenreReset} className="text-sm font-libre semibold mb-2 underline cursor-pointer text-cyan-800">
                Reset Filter
            </div>

        </div>

        <div className="space-y-2 flex flex-col">
            {genresList.slice(0, isExpanded ? genresList.length : 7).map((genre)=>{
                const isSelected = selectedGenres.includes(genre);
                return <div className="flex">
                    <input id={`genre_${genre}`}
                    type="checkbox"
                    className="hidden"
                    value={genre}
                    checked={isSelected}
                    onChange={handleGenreChange}
                    />
                    <Label htmlFor= {`genre_${genre}`}
                    className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-libre semibold ${isSelected ? "border border-green-600 text-green-600" : "border border-slate-300"}`}>
                        {isSelected && <Check size={20} strokeWidth={3}/>}
                        {genre}
                    </Label>
                </div>

            })}
            <Button 
            onClick={onExpandedClick}
            variant="link" 
            className='mt-4 flex-1'>
                {isExpanded ? 
                (<span className="flex flex-row items-center">View Less <ChevronUp/></span>) : 
                (<span className="flex flex-row items-center">View More <ChevronDown/></span>)}

            </Button>


        </div>

        </>
    )

}

export default GenreFilter