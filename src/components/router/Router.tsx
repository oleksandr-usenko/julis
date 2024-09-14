import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Booking from "../pages/booking/Booking.tsx";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="book" element={<Booking/>}></Route>
        </Routes>
    )
}

export default Router;