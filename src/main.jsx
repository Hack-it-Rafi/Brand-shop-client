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
import UpdateProduct from './Components/UpdateProduct';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import AuthProvider from './AuthProvider';

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
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=>fetch("http://localhost:5000/myCart")
      },
      {
        path: "/brandAd/:name",
        element: <BrandAd></BrandAd>,
        loader: ()=>fetch("http://localhost:5000/brands")
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ()=>fetch("http://localhost:5000/products")
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ()=>fetch(`http://localhost:5000/products`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
