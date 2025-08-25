import { useAuth0 } from '@auth0/auth0-react';
import {Button } from './ui/button'
import UsernameMenu from '@/components/UsernameMenu'

import Bag from './Bag';
import { Link } from 'react-router-dom';

const MainNav = () =>{
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        <span className='flex space-x-2 items-center'>
            {isAuthenticated ?(
                <>
                <Link to="/order-status" className="font-libre bold hover:text-cyan-800">Order Status</Link>
                <UsernameMenu/>
                </>
             ): (
             <Button variant = "ghost" className='font-libre bold bg-black text-white'
             onClick={async() => await loginWithRedirect()}>
              Log In
           </Button>)
           
            }
          <Bag/>
        </span>
        

        
        
        
    )

}

export default MainNav;