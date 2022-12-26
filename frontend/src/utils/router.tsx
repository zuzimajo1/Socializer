import React from "react";
import { createBrowserRouter, Route, Link, redirect } from "react-router-dom";
import { Auth, Home, NotFound, Profile } from "../pages";
import { isLoggedIn } from "./helpers";


export const router = createBrowserRouter([
    {
        path: "/",
        element : <Home/>,
        errorElement : <NotFound/>,
        loader: () => {
            const login = isLoggedIn();
            if (!login) return redirect("/login")
        }
        
    },
    {
        path: "/login",
        element: <Auth />,
        errorElement: <NotFound />,
        loader: ()=>{
            const login = isLoggedIn();
            if(login) return redirect("/")
        }
     
    },
    {
        path: "/profile",
        element: <Profile />,
        errorElement: <NotFound />,
        loader: () => {
            const login = isLoggedIn();
            if (!login) return redirect("/login")
        }
    },
])