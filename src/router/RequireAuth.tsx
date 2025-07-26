import { Navigate, useLocation } from "react-router-dom";

type Props = {
    children: any;
}

const RequireAuth = ({ children }: Props) => {
    // const isLoggedIn = !!localStorage.getItem("token"); // or use a context/store
    const isLoggedIn = true;
    const location = useLocation();

    if (!isLoggedIn) {
        debugger;
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;