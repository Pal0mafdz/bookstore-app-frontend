import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { CircleUserRound, Menu } from 'lucide-react'
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"

const MobileNav = () => {

    const {isAuthenticated, loginWithRedirect, user} = useAuth0();
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className = "text-black"/>

            </SheetTrigger>
            <SheetContent className="p-4 space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center font-libre bold gap-2">
                            <CircleUserRound className="text-cyan-800"/>
                            {user?.email}
                        </span>
                    ):(
                        <span> Welcome to BookStore!</span>
                        
                    )}
                   
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated? (
                        <MobileNavLinks/>
                    ):(
                        <Button onClick= {()=> loginWithRedirect()} className="flex-1 font-libre font-bold bg-sky-900">
                        Log In
                        </Button>

                    )}
                    
                    

                </SheetDescription>

            </SheetContent>

        </Sheet>
    )
}

export default MobileNav;