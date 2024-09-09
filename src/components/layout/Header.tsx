import {Link} from "react-router-dom";

const Header = () => {
    return (<header className="bg-blue-300">
        <ul className="flex justify-center gap-4">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to="/book">Book</Link>
            </li>
        </ul>
    </header>)
}

export default Header;