import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () =>{
    const { currentUser, isLoading : isGetLoading} = useGetMyUser();
    const { updateUser, isLoading : isUpdateLoading} = useUpdateMyUser();
    
    if(isGetLoading){
        <span>Loading...</span>
        return
    }

    if(!currentUser){
        <span>Unable to load user profile</span>
        return
    }

    
    return <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>;
}

export default UserProfilePage;