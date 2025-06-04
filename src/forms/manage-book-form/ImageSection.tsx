import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useFormContext } from "react-hook-form"

//event checks if the file is selected and we only select the first one [0]
const ImageSection = () => {

    const { control, watch } = useFormContext();

    const existingImageUrl = watch("imageUrl");

  return (
    <div className="space-y-2">
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>Add an image that will be displayed on your book. Adding a new image 
            will overwrite the exiting one.
        </FormDescription>

        <div className="flex flex-col gap-8 md:w-[50%]">
            {existingImageUrl && (
                <AspectRatio ratio={16/9}> <img src={existingImageUrl} className="rounded-md object-cover h-full w-full"/>
                
                </AspectRatio>
            )}
            <FormField control={control} name="imageFile" render={({field})=> <FormItem>
                <FormControl>
                    <Input className="bg-white" type="file" accept=".jpg, .jpeg, .png" 
                    onChange={(event)=>
                        field.onChange(event.target.files ? event.target.files[0]: null)
                    }/>
                    
                </FormControl>
                <FormMessage/>
            </FormItem>}/>
        </div>
    </div>
  )
}

export default ImageSection