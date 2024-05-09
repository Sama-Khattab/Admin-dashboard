import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import Trips from "./pages/Trips";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ForgetPass from "./pages/ForgetPass";
import Regester from "./pages/Regester";
import Hotels from "./pages/Hotels";
export const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>,
        children:[
           {
            path:"/",
            element:<Login/>
            },
            {
                path: "/controle trips",
                element:<Trips/>
            },
            {
                path: "/controlers",
                element:<Home/>
            },
            {
                path: "*",
                element:<NotFound/>
            },
            {
                path: "/Forget Password",
                element:<ForgetPass/>
            },
            {
                path: "/Regesteration",
                element:<Regester/>
            },
            {
                path: "/control hotels",
                element:<Hotels/>
            }
        
    ]
    },
 
  

])