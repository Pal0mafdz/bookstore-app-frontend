import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import GenreSection from "./GenreSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Book } from "@/types";
import { useEffect } from "react";
//import { Book } from "lucide-react";

const formSchema = z.object({
    name: z.string({
        required_error:"name of the book is required",
    }),
    author: z.string({
        required_error:"author is required",
    }),
    description: z.string({
        required_error:"description is required",
    }),
    price: z.coerce.number({
        required_error:"price is required",
        invalid_type_error: "must be a valid number",
    }),
    city: z.string({
        required_error:"city is required",
    }),
    country: z.string({
        required_error:"country is required",
    }),
    shippingCost: z.coerce.number({
        required_error:"shipping price required",
        invalid_type_error: "must be a valid number",
    }),
    estimatedShippingTime: z.coerce.number({
        required_error:"estimated shipping time is required",
        invalid_type_error: "must be a valid number",
    }),
    genres: z.array(z.string()).nonempty({
        message: "please select at least one item"
    }),
    condition: z.string().nonempty({
        message: "Please select an option"
    }),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, {message: "image is required"}).optional(),
    

}).refine((data)=> data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
});

type BookFormData = z.infer<typeof formSchema>

type Props = {
//? optional parameter
    book?: Book;
    onSave: (bookFormData: FormData) => void;
    isLoading: boolean;

}

const ManageBookForm = ({onSave, isLoading, book}: Props)=>{
    const form = useForm<BookFormData>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            genres : []
        }
    })

    useEffect(() => {
        if(!book){
            return;
        }
        //toFixed is the number of decimals
        const shippingCostFormatted = parseInt((book.shippingCost/100).toFixed(2));

        const priceFormatted = parseInt((book.price/100).toFixed(2));

        const updatedBook = {
            ...book,
            shippingCost: shippingCostFormatted,
            price: priceFormatted,
            
        }


        form.reset(updatedBook);

        // form.reset({
        //     bookName: book.name,               // mapeo EXPLÍCITO de 'name' a 'bookName'
        //     author: book.author,
        //     description: book.description,
        //     price: priceFormatted,
        //     city: book.city,
        //     country: book.country,
        //     shippingCost: shippingCostFormatted,
        //     estimatedShippingTime: book.estimatedShippingTime,
        //     genres: book.genres,               // asumo que es array de strings
        //     condition: book.condition,
        //     // ;imageUrl: book.imageUrl || "",     // para que el watcher de ImageSection muestre la URL
        //     imageFile: undefined               // aquí no puedes prellenar File, solo la URL
        //   });

    },[form, book]);

    const onSubmit = (formDataJson: BookFormData) =>{
        //CONVERT formDataJson to a FormData object
        const formData = new FormData();
        // const imageUrl = await uploadImage(formDataJson.imageFile);

        formData.append("name", formDataJson.name);
        formData.append("price", (formDataJson.price * 100 ).toString());
        formDataJson.genres.forEach((genre, index)=>{
            formData.append(`genres[${index}]`,genre);
        })
        formData.append("description", formDataJson.description);
        formData.append("author", formDataJson.author);
        formData.append("city", formDataJson.city);
        formData.append("country", formDataJson.country);
        formData.append("shippingCost", (formDataJson.shippingCost*100).toString());
        formData.append("estimatedShippingTime", formDataJson.estimatedShippingTime.toString());
        formData.append("condition", formDataJson.condition);

        // const imageUploadResponse = async uploadImageToCloud(formDataJson.imageFile);
        //formData.append("imageUrl", imageUploadResponse.url);  // No el File directamente

        if(formDataJson.imageFile){
        formData.append(`imageFile`, formDataJson.imageFile);
        }

        onSave(formData);




    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 bg-gray-50 rounded-lg md:p-10">
                <DetailsSection/>
                <Separator/>
                <GenreSection/>
                <Separator/>
                <ImageSection/>
                {isLoading ? <LoadingButton/> : <Button type="submit">Submit</Button>}
  
            </form>

        </Form>

    )

}

export default ManageBookForm;