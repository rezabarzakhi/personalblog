import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Contact from "./pages/Contact/Contact";
import MainArticle from "./pages/MainArticle/MainArticle";


let routes = [
    { path: "/", element: <Home /> },
    { path: "/articles", element: <Articles /> },
    { path: "/article/:articleID", element: <MainArticle /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
];

export default routes
