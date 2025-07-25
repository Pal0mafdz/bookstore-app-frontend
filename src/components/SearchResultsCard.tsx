import { Book } from "@/types";
import { Banknote, Clock, Dot } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
    book: Book;
}

const SearchResultsCard = ({ book }: Props) => {
  return (
    <Link to={`/detail/${book._id}`} className="grid lg:grid-cols-[1fr_3fr] gap-5 group">
        {/* <AspectRatio ratio={9/16}>
            <img src={book.imageUrl} className="rounded-md w-full h-full object-cover"/>

        </AspectRatio> */}
         <div className="w-60 h-80 relative">
    <img
      src={book.imageUrl}
      className="rounded-md w-full h-full object-cover"
    />
  </div>
        <div>
        <h3 className="text-2xl font-libre bold tracking-tight mb-2 group-hover:underline">
            {book.name}
        </h3>
        <div id= "card-content" className="grid md:grid-cols-2 gap-2">
            <div className="flex flex-row flex-wrap">
                {book.genres.map((item,index)=>(
                    <span className="flex">
                        <span>{item}</span>
                        {index < book.genres.length-1 && <Dot/>}
                    </span>
                ))}
            </div>
            <div className="flex gap-2 flex-col">
                <div className="flex items-center gap-1 text-green-600">
                    <Clock className="text-green-600"/>
                    {book.estimatedShippingTime} days
                </div>
                <div className="flex items-center gap-1">
                    <Banknote/>
                    Delivery from ${(book.shippingCost / 100).toFixed(2)}
                </div>
            </div>
        </div>
        </div>
    </Link>
  )
}

export default SearchResultsCard