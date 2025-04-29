import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import Auth from "./components/pages/auth/Auth.tsx";
import Booking from "./components/pages/booking/Booking.tsx";
import Register from "./components/pages/auth/Register.tsx";
import Login from "./components/pages/auth/Login.tsx";
import Main from "./components/pages/main/Main.tsx";
import RequireAuth from "./components/router/RequireAuth.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                element: <Navigate to="home" replace />
            },
            {
                path: "auth",
                Component: Auth,
                children: [
                    {
                        index: true,
                        element: <Navigate to="login" replace />
                    },
                    {
                        path: "register",
                        Component: Register,
                    },
                    {
                        path: "login",
                        Component: Login,
                    }
                ]
            },
            {
                path: "",
                Component: () => (<RequireAuth><Main/></RequireAuth>),
                children: [
                    {
                        index: true,
                        element: <Navigate to="home" replace />
                    },
                    {
                        path: "home",
                        Component: Home
                    },
                    {
                        path: "book",
                        Component: Booking,
                    }
                ]
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
