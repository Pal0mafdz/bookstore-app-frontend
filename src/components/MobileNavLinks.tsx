import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
    const {logout} = useAuth0();
  return (
    <>
    <Link to="/order-status" className="flex bg-white items-center font-libre bold hover:text-cyan-800">Order Status</Link>

    <Link to="/book-dashboard" className="flex bg-white items-center font-libre bold hover:text-cyan-800">Dashboard</Link>

    <Link to="/user-profile" className="flex bg-white items-center font-libre bold hover:text-cyan-800">User Profile</Link>

    
    <Button onClick={() => logout()} className="flex items-center px-3 font-libre bold hover:bg-gray-500">Log Out</Button>
    </>
  )
}

export default MobileNavLinks