import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {Form, FormControl, FormField, FormItem} from './ui/form';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useEffect } from 'react';

const formSchema = z.object({

    searchQuery: z.string({
        required_error: "Book name is required",
    })
})

export type SearchForm = z.infer<typeof formSchema>;

type Props = {

    //its going to be triggered every time the form submits
    onSubmit: (fromData: SearchForm) => void ;
    placeHolder: string;
    onReset?: () => void;
    searchQuery?: string,
    textColor?: string,

}

const SearchBar = ({onSubmit, onReset, placeHolder, searchQuery, textColor = "text-white"}: Props) =>{
    const form = useForm<SearchForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchQuery,
        }

    })

    useEffect(() => {
        form.reset({searchQuery})
    }, [form, searchQuery])

    const handleReset = () =>{
        form.reset({
            searchQuery: "",
        })

        if(onReset){
            onReset();
        }
    }

    return(
        <Form {...form}>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-2  ${form.formState.errors.searchQuery && "border-red-500"}`}>
                
                <Search strokeWidth={2.5} size={30} className='ml-1 text-white hidden md:block'/>
                <FormField control={form.control} name='searchQuery' render={({field})=> 
                <FormItem className="flex-1">
                    <FormControl>
                        <div className='flex items-center gap-2'>
                        <Input {...field} className={`border-none shadow-none font-libre bold text-xl focus-visible:ring-0 ${textColor}`}
                        placeholder={placeHolder}/>
                        
                        <Button onClick={handleReset} type="button" variant="outline" className='rounded-full font-libre bold'>
                            Reset
                        </Button>

                        <Button type="submit" className='rounded-full bg-cyan-800 font-libre bold'>Search</Button>
                        </div>
                    </FormControl>
                </FormItem>}/>
            </form>
          

        </Form>
    )

}

export default SearchBar
