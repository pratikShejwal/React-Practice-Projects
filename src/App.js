import React from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from 'react/jsx-runtime'
import { NavBar } from './components/Navbar'
import Product from './components/Product'
import ProductCart from './components/ProductCart'


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