import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {

    genre: string,
    field: ControllerRenderProps<FieldValues, "genres">;

}

const GenreCheckbox = ({genre, field}: Props)=>{
    return(
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox className="bg-white"
                checked={field.value.includes(genre)}
                onCheckedChange={(checked)=>{
                    if(checked){
                        field.onChange([...field.value, genre]);
                    }else{
                        field.onChange(
                            field.value.filter((value: string) => value !== genre)
                        );
                    }
                }}/>

            </FormControl>
            <FormLabel className="text-sm font-normal">{genre}</FormLabel>

        </FormItem>
    )

}

export default GenreCheckbox;