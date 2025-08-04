import { CartItem } from "@/types";

import { Separator } from "./ui/separator";

type Props = {
    items: CartItem[];
    
}

const OrderSummary = ({items}: Props) =>{
    
    const getTotal= () =>{

        const total = items.reduce((sum, item)=> sum + (item.book.price + item.book.shippingCost) * item.quantity,0)

        

       return (total/100).toFixed(2);
    }

    
    return(
        <div className="flex flex-col gap-3">
            {items.map((item)=>(
                <div key={item.book._id} className="flex justify-between text-sm">
                    <div>
                        <p className="font-semibold">{item.book.name}</p>
                        <p className="text-muted-foreground text-xs">
                        Quantity: {item.quantity}
                        </p>
                    </div>
                    <div className="text-right">
                    <p>${((item.book.price * item.quantity) / 100).toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                    + Shipping ${(item.book.shippingCost / 100).toFixed(2)}
                    </p>
                </div>
                </div>
            ))}
            <Separator/>
            <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${getTotal()}</span>
            </div>
        </div>
        
     
    )
}

export default OrderSummary;