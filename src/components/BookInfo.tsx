import { Book } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Dot } from "lucide-react"

type Props ={
    book: Book
}

const BookInfo= ({ book }: Props)=>{

    return(
        <Card className="border-sla">
            <CardHeader>
                <CardTitle className="text-3xl font-libre bold tracking-tight">
                    {book.name}
                </CardTitle>
                <CardDescription className="font-libre bold color-black flex">
                    {book.author}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex">
                {book.description}
            </CardContent>

            <CardContent className="flex">
            {book.genres.map((item, index)=>(
                        <span className="flex">
                            <span>{item}</span>
                            {index < book.genres.length -1 && <Dot/>}

                        </span>
             ))}
            </CardContent>

        </Card>
    )
}

export default BookInfo;