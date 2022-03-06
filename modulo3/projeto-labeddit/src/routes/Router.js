import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

import { Routes, Route } from "react-router-dom"


const Router = ({setRightButtonText}) => {
  return (
    <Routes>
        <Route path="Login" element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
        <Route path="Cadastro" element={<SignUpPage setRightButtonText={setRightButtonText}/>}/> 
        <Route path="/" element={<FeedPage />}/>
            <Route path="Post/:id/comments" element={<PostPage />}/>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
