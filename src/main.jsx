import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Components/Root';
import AddProduct from './Components/AddProduct';
import MyCart from './Components/MyCart';
import BrandAd from './Components/BrandAd';
import ProductDetails from './Components/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('Brands.json')
      },
      {
        path: "/addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/brandAd/:name",
        element: <BrandAd></BrandAd>,
        loader: ()=>fetch("http://localhost:5000/brands")
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=>fetch("http://localhost:5000/products")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
