import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {

    const {control} = useFormContext();
  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2x1 font-bold">Details</h2>
            <FormDescription>
                Enter the details of your book
            </FormDescription>
        </div>
        <FormField control={control} name="bookName" render={({field})=>(
        <FormItem>
            <FormItem>Name</FormItem>
            <FormControl>
                <Input {...field} className="bg-white"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>

        <div className="flex gap-4">
        <FormField control={control} name="price" render={({field})=>(
        <FormItem className="flex-1">
            <FormLabel>Price ($)</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="1.50"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>

        <FormField control={control} name="author" render={({field})=>(
        <FormItem className="flex-1">
            <FormLabel>Author</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>
        </div>

        <FormField control={control} name="description" render={({field})=>(
        <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="write a short description of your book"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>

        <div className="flex gap-4">
        <FormField control={control} name="city" render={({field})=>(
        <FormItem className="flex-1">
            <FormLabel>City</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>

        <FormField control={control} name="country" render={({field})=>(
        <FormItem className="flex-1">
            <FormLabel>Country</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>
        </div>


        <FormField control={control} name="condition" render={({field})=>(
            <FormItem className="max-w-[25%]">
                <FormLabel>Condition</FormLabel>
                <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="like new">Like new</SelectItem>
                    <SelectItem value="very good">Very good</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="acceptable">Acceptable</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
    
                </FormControl>
                <FormMessage/>
            </FormItem>)}/>

        <FormField control={control} name="shippingCost" render={({field})=>(
        <FormItem className="max-w-[25%]">
            <FormLabel>Shipping Price ($)</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="1.50"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>

        <FormField control={control} name="estimatedShippingTime" render={({field})=>(
        <FormItem className="max-w-[25%]">
            <FormLabel>Estimated shipping time (days)</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="3 days"/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>


        

    </div>
  )
}

export default DetailsSection;