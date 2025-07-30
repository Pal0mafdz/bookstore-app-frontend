//import { Layout } from "lucide-react";
import Layout from "./layouts/layout";
import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
//import ManageBookForm from "./forms/manage-book-form/ManageBookForm";
import ManageBookPage from "./pages/ManageBookPage";
import SearchPage from "./pages/SearchPage";
import BookDashboardPage from "./pages/BookDashboardPage";
import DetailPage from "./pages/DetailPage";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path = "/auth-callback" element={<AuthCallBackPage/>}/>
            <Route path = "/search/:city" element={<Layout showHero={false}><SearchPage/></Layout>}/>
           
            <Route path = "/detail/:bookId" element={<Layout showHero={false}><DetailPage/></Layout>}/>
           
            <Route path = "/" element={<Layout showHero><HomePage/></Layout>}/>

            <Route element={<ProtectedRoute/>}>
                <Route path = "/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
            </Route>
            
            <Route element={<ProtectedRoute/>}>
                <Route path = "/manage-book/:id" element={<Layout><ManageBookPage/></Layout>}/>
            </Route>

            <Route element={<ProtectedRoute/>}>
                <Route path = "/manage-book" element={<Layout><ManageBookPage/></Layout>}/>
            </Route>

            <Route element={<ProtectedRoute/>}>
                <Route path = "/book-dashboard" element={<Layout><BookDashboardPage/></Layout>}/>
            </Route>

            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
    )
}

export default AppRoutes;