import React, { useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


 
const Grocery = lazy(()=>
     import("./components/Grocery")
    );




const Footer = () => {
}

const AppLayout = () => 
{
    

const [username,setUserName] = useState("Vinay");
useEffect(()=>
{
    setUserName("VinayD")
},[]);

return (

<Provider store={appStore} >
< div className="dark:bg-slate-800">

<Header/>
<Outlet />
</div>
</Provider>
    )
 
}


const reactRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={
               <h1>Loading...</h1>} ><Grocery/> </Suspense>)
            },
            {
                path:"/restaurants/:resid",
                element: <Restaurantmenu />
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ],

        errorElement:<Error />,
    },
   
])

//const heading = React.createElement("h1",{id:"heading"},"Hello from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider className="dark:bg-slate-800" router={reactRoutes} />);