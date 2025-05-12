import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from 'lucide-react'
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className = "text-black"/>

            </SheetTrigger>
            <SheetContent className="p-4 space-y-3">
                <SheetTitle>
                   <span> Welcome to BookStore!</span>
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex">
                    <Button className="flex-1 font-libre font-bold bg-sky-900">
                        Log In
                    </Button>

                </SheetDescription>

            </SheetContent>

        </Sheet>
    )
}

export default MobileNav;