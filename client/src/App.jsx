import React from 'react'
import "./style.scss"

import {
    createHashRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";


import Acasa from "./pages/Acasa"
import Campanii from "./pages/Campanii"
import Single from "./pages/Single"
import Galerie from "./pages/Galerie"
import ImplicaTe from "./pages/Implica_te"
import Autorizari from "./pages/Autorizari"
import Contact from "./pages/Contact"

// admin side
import Login from "./pages/Login"
import Write from "./pages/Write"

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Acasa />
            },
            {
                path: "/campanii",
                element: <Campanii />
            },
            {
                path: "/campanii/:id",
                element: <Single />
            },
            {
                path: "/galerie",
                element: <Galerie />
            },
            {
                path: "/implica_te",
                element: <ImplicaTe />
            },
            {
                path: "/autorizari",
                element: <Autorizari />
            },
            {
                path: "/write",
                element: <Write />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "/admin",
        element: <Login />,
    }
]);

const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export const apiUrl = "https://siteasoc-5a3760f692b7.herokuapp.com/api"
export default App