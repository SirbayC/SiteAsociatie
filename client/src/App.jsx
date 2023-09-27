import React, { useEffect, useState } from 'react'
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
import axios from 'axios';


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
    console.log(`Starting frontend and connecting to backend via ${process.env.REACT_APP_API_URL}`)
    const[connected, setConnected] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
              const res = await axios.get(process.env.REACT_APP_API_URL)
              setConnected(res.data)
            } catch (err) {
              console.log(err)
            }
          }
          fetchData()
    }, [])
    console.log(`Backend said: ${connected}`)

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