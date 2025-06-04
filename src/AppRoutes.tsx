//import { Layout } from "lucide-react";
import Layout from "./layouts/layout";
import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
//import ManageBookForm from "./forms/manage-book-form/ManageBookForm";
import ManageBookPage from "./pages/ManageBookPage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path = "/auth-callback" element={<AuthCallBackPage/>}/>
            <Route path = "/" element={<Layout showHero><HomePage/></Layout>}/>

            <Route element={<ProtectedRoute/>}>
                <Route path = "/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
            </Route>
            
            <Route element={<ProtectedRoute/>}>
                <Route path = "/manage-book" element={<Layout><ManageBookPage/></Layout>}/>
            </Route>

            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
    )
}

export default AppRoutes;