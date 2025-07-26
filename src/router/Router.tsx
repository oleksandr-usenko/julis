import {Route, Routes} from "react-router-dom";
import Home from "../components/pages/Home.tsx";
// import Booking from "../components/pages/booking/Booking.tsx";
// import {Services} from "../components/pages/services/Services.tsx";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            {/*<Route path="book" element={<Booking/>}></Route>*/}
            {/*<Route path="services" element={<Services/>}></Route>*/}
        </Routes>
    )
}

export default Router;