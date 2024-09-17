import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import Auth from "./components/pages/auth/Auth.tsx";
import Booking from "./components/pages/booking/Booking.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/book",
                element: <Booking />
            }
        ],
    },
    {
        path: "/auth",
        element: <Auth />
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
