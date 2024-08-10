import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import CreateTask from './pages/CreateTask.jsx'
import Main from './pages/Main.jsx'
import UpdateTask from './pages/UpdateTask.jsx'
import { store } from './store/store.js'
import {Provider} from "react-redux"
const router=createBrowserRouter([
  {
    
    path: "/login",
    element: <Login/>,
   
  },
  {
            path: "/",
            element: <App/>,
            children:[
                {
            path: "/",
            element: <Main/>,
      },
               {
            path: "/create",
            element: <CreateTask/>,
      },
       {
            path: "/update",
            element: <UpdateTask/>,
      },
            ]
             
            
      },
       
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Provider store={store}> <RouterProvider  router={router}><App   /></RouterProvider></Provider>
   
  </StrictMode>,
)
