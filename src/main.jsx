import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import myCreatedRoute from './Route/Route'



// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element: <div>This is my first home route</div>
//   },
//   {
//     path:"/products",
//     element:<div>Products route hitted</div>
//   },
//   {
//     path:"/about",
//     element:<div>about route hitted</div>
//   },
// ])

// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element : <section>
//       <div>This is a fixed item</div>
//       <Outlet></Outlet>

//     </section>,
//     children : [
//       {
//         path: "/",
//         element : <div>This is home route</div>
//       },
//       {
//         path: "/products",
//         element : <div>Products page</div>
//       }
//     ]
//   }


// ])


// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element : <MainLayout></MainLayout>,
//     children : [
//       {
//         path: "/",
//         element : <Home></Home>
//       },
//       {
//         path: "/products",
//         element : <Products></Products>
//       }
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
