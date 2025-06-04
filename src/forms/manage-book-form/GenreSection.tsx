import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { genresList } from "@/config/book-genres-config";
import { useFormContext } from "react-hook-form"
import GenreCheckbox from "./GenreCheckbox";

const genreSection = () => {
  const { control } = useFormContext();

  return(
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Genres</h2>
            <FormDescription>Select the genres of your book</FormDescription>
        </div>
        <FormField control = {control} name = "genres" render={({ field })=>(
             <FormItem><div className="grid md:grid-cols-5 gap-1">{genresList.map((genreItem) => (
                <GenreCheckbox genre={genreItem} field={field}/>
            ))}</div>
            <FormMessage/>
            </FormItem>
        )}/>
       
    </div>
  )
}

export default genreSection