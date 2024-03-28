import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Login from './component/Login'
import Signup from './component/Signup'
import ProtectedRoute from  './protectedRoute/ProtectedRoute'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },{
    path:"/signup",
    element:<Signup/>
  },
  {
         path:'/',
         element:<ProtectedRoute/>,
         children:[
          {
             path:"/",
             element:<Home/>
           },
         
         ]
      }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);


