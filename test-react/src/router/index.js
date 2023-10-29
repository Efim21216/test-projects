import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostPage/>},
    {path: '*', element: <ErrorPage/>}
]
export const publicRoutes = [
    {path: '/login', element: <LoginPage/>}
]