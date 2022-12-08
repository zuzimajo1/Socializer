import React from "react";
import { createBrowserRouter, Route, Link } from "react-router-dom";
import { Auth, Home, NotFound, Profile } from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element : <Home/>,
        errorElement : <NotFound/>,
    },
    {
        path: "/login",
        element: <Auth />,
        errorElement: <NotFound />,
    },
    {
        path: "/profile",
        element: <Profile />,
        errorElement: <NotFound />,
    },
])