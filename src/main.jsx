import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Homepage from './components/Homepage.jsx';
import Activity from './components/Activity.jsx';
import Explore from './components/Explore.jsx';
import Packages from './components/Packages.jsx';
import Login from './components/Login.jsx';
import Register  from './components/Register';
import Book_now from './components/Book_now.jsx';


let App = () => {

  let allroutes=createBrowserRouter(
    [
    {
      path:'/', element:<Homepage/>
    },
    {
      path:'Explore',element:<Explore/>
    },
     {
       path:'Activity',element:<Activity/>
     },
    {
      path:'Packages',element:<Packages/>
    },
    {
      path:'Login',element:<Login/>
    },
    {
      path:'Register',element:<Register/>
    },
    {
      path:'Book_now' , element:<Book_now/>
    }

      
    ])

return (
    <React.StrictMode>
 <RouterProvider router={allroutes}/>
    </React.StrictMode>   
      );
    }
ReactDOM.createRoot(document.getElementById('root')).render(<App />);