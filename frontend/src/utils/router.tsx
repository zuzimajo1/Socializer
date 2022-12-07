import React from "react";
import { createBrowserRouter, Route, Link } from "react-router-dom";
import { Auth, Home, NotFound, Profile } from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element : <Home/>,
        errorElement : <NotFound/>,
        children: [
            {
                path: "profile",
                element: <Profile/>,
                errorElement: <NotFound/>
            },
            {
                
            }
        ]
    }
])