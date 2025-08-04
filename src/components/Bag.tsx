import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ShoppingBag } from 'lucide-react'
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import OrderSummary from "./OrderSummary"
import { useGetMyCart } from "@/api/MyCartApi"

const Bag = () => {
    
    const { cart, isLoading } = useGetMyCart();

  return (
    <Sheet>
    <SheetTrigger>
       
        <ShoppingBag className = "text-black"/>

    </SheetTrigger>
    <SheetContent className="p-4 space-y-3">
        <SheetTitle>
           <span>Your Cart</span>
        </SheetTitle>
        <Separator/>

        {isLoading ? (
            <p className="text-sm">Loading...</p>
        ): !cart || cart.items.length === 0 ? (
            <p className="text-sm">Your cart is empty</p>
        ) : (
        

            <>
            <OrderSummary items={cart.items}/>
            <SheetDescription className="flex">
                <Button className="flex-1 font-libre bold bg-sky-900">Buy Now</Button>
            </SheetDescription>
            

            </>
        )}
        
    </SheetContent>

</Sheet>
  )
}

export default Bag