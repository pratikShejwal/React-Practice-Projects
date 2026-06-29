import React from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from 'react/jsx-runtime'
import NavBar  from './components/NavBar'
import Product from './components/Product'
import ProductCart from './components/ProductCart'
import { createBrowserRouter } from 'react-router-dom'

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },{
        path:'/kid',
        element:<Kid/>
    }

])
const App = ()=>{
    return (
    <>
    <NavBar/>
    <ProductCart/>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);