import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import "./interceptors/refresh.interceptor";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import Auth from "./components/pages/auth/Auth.tsx";
import Booking from "./components/pages/booking/Booking.tsx";
import Register from "./components/pages/auth/Register.tsx";
import Login from "./components/pages/auth/Login.tsx";
import Main from "./components/pages/Main.tsx";
import RequireAuth from "./router/RequireAuth.tsx";
import { Services } from "./components/pages/services/Services.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "auth",
        Component: Auth,
        children: [
          {
            index: true,
            element: <Navigate to="login" replace />,
          },
          {
            path: "register",
            Component: Register,
          },
          {
            path: "login",
            Component: Login,
          },
        ],
      },
      {
        path: "",
        Component: () => (
          <RequireAuth>
            <Main />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="home" replace />,
          },
          {
            path: "home",
            Component: Home,
          },
          {
            path: "services",
            Component: Services,
          },
          {
            path: "book",
            Component: Booking,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
