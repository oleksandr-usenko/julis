import {useTranslation} from "react-i18next";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    return (
        <select
            className="bg-blue-300 text-grey"
            value={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)}
        >
            <option value="en">English</option>
            <option value="ua">Українська</option>
        </select>
    );
};