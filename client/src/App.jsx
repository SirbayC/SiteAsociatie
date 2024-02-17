import React, { useEffect } from 'react'
import "./style.scss"

import {
    createHashRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";



import CunoasteNe from "./pages/CunoasteNe"
import DaPot from "./pages/DaPot"
import Scrisori from "./pages/Scrisori"
import LumeaImagini from "./pages/LumeaImagini"
import ImplicaTe from "./pages/ImplicaTe"
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
                element: <CunoasteNe />
            },
            {
                path: "/da_pot",
                element: <DaPot />
            },
            {
                path: "/scrisori",
                element: <Scrisori />
            },
            {
                path: "/scrisori/:id",
                element: <Scrisori />
            },
            {
                path: "/lumea_imagini",
                element: <LumeaImagini />
            },
            {
                path: "/implica_te",
                element: <ImplicaTe />
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