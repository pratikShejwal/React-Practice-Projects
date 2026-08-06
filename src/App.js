import React,{Suspense,lazy} from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from 'react/jsx-runtime'
import NavBar  from './components/NavBar'
import Product from './components/Product'
// import About from './components/About'
import { Provider } from 'react-redux'
import ProductCart from './components/ProductCart'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Men from './components/Men'
import Kid from './components/Kid'
import Women from './components/Women'
import ProductDetails from './components/ProductDetails'
import About from './components/About'
import UserContext from './utils/UserContext'
import appStore from './store/store'
import Ref from './components/Ref'
// import Grocery from './components/Grocery'

const Grocery = lazy(()=> import('./components/Grocery'))

const App = ()=>{
    return (
<Provider store={appStore}>
    <div>
    <NavBar/>
    <Outlet/>
    </div>
</Provider>
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
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
       },
      {
        path:'/women',
        element:<Women/>
      },
     {
        path:'/kid',
        element:<Kid/>,   
     },
     {
        path:'/about',
        element:<About/>,   
     },
     {
        path:'/ref',
        element:<Ref/>,   
     },
     {
        path:'/product/:prodId',
        element:<ProductDetails/>,
        
    }, 
    

    ],
        //errorElement:<Error/>
    },
   
   
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);