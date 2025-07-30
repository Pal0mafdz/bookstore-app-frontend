import { useGetBook } from "@/api/BookApi";
import BookInfo from "@/components/BookInfo";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useParams } from "react-router-dom"
import OrderSummary from "@/components/OrderSummary";
import { Book } from "@/types";


export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
}

const DetailPage = () => {
    const { bookId } = useParams();
    const { book, isLoading } = useGetBook(bookId);

    const [ cartItems, setCartItems ] = useState<CartItem[]>([]);

    //probably wont use ->
    // const addToCart = (book: Book)=>{
    //     setCartItems((prevCartItems)=>{
    //         //check if the book is already in the cart
    //         //if the item is in the cart,update the quantity
    //         const existingCartItem = prevCartItems.find((cartItem)=> cartItem._id === book._id)

    //         let updateCartItems;

    //         if(existingCartItem){
    //             updateCartItems = prevCartItems.map((cartItem)=> cartItem._id === book._id
    //             ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem)
    //         }else{
    //             updateCartItems = [
    //                 ...prevCartItems, {
    //                     _id: book._id,
    //                     name: book.name,
    //                     price: book.price,
    //                     quantity: 1,
    //                 }
    //             ]
    //         }

    //         return updateCartItems;

    //     })

    // }

    //if theres no book
    if(isLoading || !book){
        return "Loading...";
    }

  return (
    <div className="flex flex-col gap-10">
        {/* <AspectRatio ratio={3/5}>
            <img src={book.imageUrl} className="rounded-md object-cover h-full w-full"/>
        </AspectRatio> */}
        
        
        <div className="grid md:grid-cols-[3fr_5fr_2fr] gap-5 md:px-32">
            <div className="rounded-md object-cover w-full h-150 shadow-lg" >
                <img src={book.imageUrl} className="rounded-md object-cover h-full w-full" />
            </div>
            <div className="flex flex-col gap-4">
                <BookInfo book={book}/>
            </div>
            <div>
                <Card>
                    <OrderSummary book={book} cartItems={cartItems}/>
                    
                    
                </Card>
            </div>

        </div>
    </div>
  )
}

export default DetailPage