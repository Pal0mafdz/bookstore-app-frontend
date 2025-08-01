import { CartItem } from "@/pages/DetailPage";
import { Book } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type Props = {
    book: Book;
    cartItems: CartItem[];
}

const OrderSummary = ({book, cartItems}: Props) =>{
    
    const getTotalCost = () =>{
       const totalInPence = cartItems.reduce((total, cartItem)=> total + cartItem.price * cartItem.quantity,0)

       const totalWithShipping = totalInPence + book.shippingCost;

       return (totalWithShipping/100).toFixed(2);
    }

    
    return(
        <>
        <CardHeader>
            <CardTitle className="text-2xl font-libre bold tracking-tight flex justify-between">
                <span>Your Order</span>
                <span>${getTotalCost()}</span>

            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            {cartItems.map((item)=>(
                <div className="flex justify-between">
                    <span>
                        <Badge variant="outline" className="mr-2">
                            {item.quantity}
                        </Badge>
                        {item.name}
                    </span>
                    <span className="flex items-center gap-1">
                        ${((item.price * item.quantity)/100).toFixed(2)}
                    </span>
                </div>
            ))}
            <Separator/>
            <div className="flex justify-between">
                <span>Delivery</span>
                <span>${(book.shippingCost/100).toFixed(2)}</span>
            </div>
            <Separator/>

        </CardContent>

        
        </>
    )
}

export default OrderSummary;