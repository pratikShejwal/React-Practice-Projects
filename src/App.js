import React from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from 'react/jsx-runtime'
import NavBar  from './components/NavBar'
import Product from './components/Product'
import ProductCart from './components/ProductCart'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Men from './components/Men'
import Kid from './components/Kid'
import Women from './components/Women'

const App = ()=>{
    return (
    <>
    <NavBar/>
    <Outlet/>
    </>
    )
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: '/',
                element:<ProductCart/>
            },
 {
        path:'/men',
        element:<Men/>
    },
    {
        path:'/women',
        element:<Women/>
    },
     {
        path:'/kid',
        element:<Kid/>,
        
    },

        ],
        errorElement:<Error/>
    },
   
   
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);