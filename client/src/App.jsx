import React, { useEffect } from 'react'
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
                path: "/contact",
                element: <Contact />
            },
        ]
    }
]);

const App = () => {
    useEffect(() => {
        document.title = 'Asociatia Prietenii D.A.R.I.E.I.';
    }, []);

    return (
        <div className='app'>
            <div className='container'>
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App