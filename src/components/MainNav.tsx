import { useAuth0 } from '@auth0/auth0-react';
import {Button } from './ui/button'
import UsernameMenu from '@/components/UsernameMenu'
import { ShoppingBag } from 'lucide-react';

const MainNav = () =>{
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        <span className='flex space-x-2 items-center'>
            {isAuthenticated ?(
            <UsernameMenu/> ): (
             <Button variant = "ghost" className='font-libre bold bg-black text-white'
             onClick={async() => await loginWithRedirect()}>
              Log In
           </Button>)
           
            }
             <ShoppingBag className='hover:text-cyan-800'/>
        </span>
        // <Button variant = "ghost" className='font-libre bold bg-black text-white'>
        //     Log In
        // </Button>

        
        
        
    )

}

export default MainNav;