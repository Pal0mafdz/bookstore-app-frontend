import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import {DropdownMenu} from './ui/dropdown-menu';
import { CircleUserRound } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import {Separator} from './ui/separator';
import {Button} from './ui/button';


const UsernameMenu = () =>{

    const {user, logout} = useAuth0();

    

    return(
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center px-3 font-libre bold hover:text-cyan-800 gap-2'>
                <CircleUserRound className='hover:text-cyan-800'/>
                {user?.email}

            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to='/manage-book' className='font-libre bold hover:text-cyan-800'>
                   Manage Book</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to='/user-profile' className='font-libre bold hover:text-cyan-800'>
                    User Profile</Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={()=>logout()}className='flex flex-1 text-libre bold bg-cyan-800'>
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}

export default UsernameMenu;