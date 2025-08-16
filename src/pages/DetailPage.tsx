import { useGetBook } from "@/api/BookApi";
import BookInfo from "@/components/BookInfo";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { useLocation, useParams } from "react-router-dom"
import { useAddMyCart } from "@/api/MyCartApi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";


const DetailPage = () => {
    const { isAuthenticated, loginWithRedirect} = useAuth0();
    const { bookId } = useParams();
    const { book, isLoading } = useGetBook(bookId);
    const { addToCart, isLoading: isAdding} = useAddMyCart();
    const {pathname} = useLocation();


    const getTotalCost = () =>{
        if(!book){
            return "0.00";
        }
        const totalWithShipping = book.price + book.shippingCost;
 
        return (totalWithShipping/100).toFixed(2);
     }

    const handleAddToCart = () =>{
        //returns to the page you currently are
        const onLogin = async () =>{
            await loginWithRedirect({
                appState:{
                    returnTo: pathname,
                }
            })
        }

        if(!isAuthenticated){
            toast("Log in to continue!", {
                description: "Click here to log in",
                action: {
                    label: "Log in",
                    onClick:() => onLogin(),
                }
            });
        }

        if (!book){
            return;
        }
        addToCart({bookId: book._id, quantity: 1});

    }

    //if theres no book
    if(isLoading || !book){
        return "Loading...";
    }

  return (
    <div className="flex flex-col gap-10">
        
        <div className="grid md:grid-cols-[3fr_5fr_2fr] gap-5 md:px-32">
            <div className="rounded-md object-cover w-full h-150 shadow-lg" >
                <img src={book.imageUrl} className="rounded-md object-cover h-full w-full" />
            </div>
            <div className="flex flex-col gap-4">
                <BookInfo book={book}/>

            </div>
            <div>
                <Card>
                    <CardHeader>
                    <CardTitle className="text-2xl font-libre bold tracking-tight flex justify-between">
                        <span>Your Order</span>
                        <span>${getTotalCost()}</span>

                    </CardTitle>
                    <Separator/>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>${book.shippingCost}</span>
                    </div>  
                    <Button onClick={handleAddToCart} disabled={isAdding}>
                        {isAdding ? "Adding...": "Add to Cart"}
                    </Button>
                    
                    </CardContent>
                </Card>
            </div>

        </div>
    </div>
  )
}

export default DetailPage