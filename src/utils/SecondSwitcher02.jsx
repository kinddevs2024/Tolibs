import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MenuDefault } from "./Switcherbtn";
import { MenuDefault02 } from "./Switcherbtn02";

function SecondSwitcher02() {
    const { i18n } = useTranslation();

    const lang = localStorage.getItem("language");

    useEffect(() => {
        if (!lang) {
            localStorage.setItem("language", "en");
        }
    }, []);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem("language", selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <MenuDefault02 />
        </div>
    );
}

export default SecondSwitcher02;
