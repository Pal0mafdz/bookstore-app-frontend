
import { Dialog, DialogContent} from "./ui/dialog"
import UserProfileForm, { UserFormData } from "@/forms/user-profile-form/UserProfileForm"
import { useGetMyUser } from "@/api/MyUserApi"



type Props = {
    open: boolean;
    onCheckout: (userFormData: UserFormData) => void;
    onOpenChange: (open: boolean) =>void;
    isLoading: boolean;
    // disabled: boolean;
}

const ConfirmDialog=({ open, onOpenChange, onCheckout, isLoading}: Props)=>{
    // const [open, setOpen] = useState(false);
    const { currentUser, isLoading: isGetUserLoading} = useGetMyUser();

    if(!currentUser || isLoading){
        return;
    }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
       
        <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
            
            <UserProfileForm currentUser={currentUser} onSave={onCheckout} isLoading={isGetUserLoading} title="Confirm Shipping Details" buttonText="Continue to payment" />


        </DialogContent>

    </Dialog>
  )
}

export default ConfirmDialog