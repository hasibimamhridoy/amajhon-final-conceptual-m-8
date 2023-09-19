import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element:<Home></Home>,

            },
            {
                path : "/products",
                element : <Products></Products>,
                loader : ()=>fetch(`https://dummyjson.com/products`)
                
            },

            {

                path : "/products/:id",
                element : <Product></Product>,
                // loader : (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
            },

            {
                path : "/dashboard",
                element: <DashboardLayout></DashboardLayout>,
                children : [
                    {
                        path : "/dashboard",
                        element :<Dashboard></Dashboard>
                    },
                    {
                        path : "/dashboard/profile",
                        element :<Profile></Profile>
                    },
                    {
                        path : "/dashboard/editProfile",
                        element :<EditProfile></EditProfile>
                    },
                ]
            }
        ]
    }
])

export default myCreatedRoute;