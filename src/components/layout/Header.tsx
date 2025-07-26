import {Link} from "react-router-dom";
import {LanguageSwitcher} from "../UI/LanguageSwitcher.tsx";
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    return (<header className="bg-blue-300 flex justify-between">
        <div></div>
        <ul className="flex justify-center gap-4">
            <li>
                <Link to={"/"}>{t("navigation.home")}</Link>
            </li>
            <li>
                <Link to={"/services"}>{t("navigation.services")}</Link>
            </li>
            <li>
                <Link to="/book">{t("navigation.bookings")}</Link>
            </li>
            <li>
                <Link to="/auth">{t("navigation.logout")}</Link>
            </li>
        </ul>
        <div>
            <LanguageSwitcher/>
        </div>
    </header>)
}

export default Header;