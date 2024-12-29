import React, { useEffect, useState } from 'react';
import img1 from "/public/uzb.png"; // Uzbek
import img2 from "/public/rus.png"; // Russian
import img3 from "/public/eng.png"; // English

import { useTranslation } from "react-i18next";

export function MenuDefault02() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "en");

    // Handle language change
    const handleLanguageChange = (selectedLanguage) => {
        localStorage.setItem("language", selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
        setSelectedLanguage(selectedLanguage);
    };


    const getLanguageImage = () => {
        switch (selectedLanguage) {
            case 'ru':
                return img2; // Russian
            case 'uz':
                return img1; // Uzbek
            case 'en':
            default:
                return img3; // English
        }
    };

    return (
        <div className=" flex  w-full gap-8" >
            <button
                onClick={() => handleLanguageChange('en')}
            >
                <img
                    className="w-[30px] h-[30px] rounded-full object-cover"
                    src="./public/eng.png"
                    alt="English"
                />

            </button>
            <button

                onClick={() => handleLanguageChange('ru')}
            >
                <img
                    className="w-[30px] h-[30px] rounded-full object-cover"
                    src={img2}
                    alt="Russian"
                />

            </button>
            <button
                onClick={() => handleLanguageChange('uz')}
            >
                <img
                    className="w-[30px] h-[30px] rounded-full"
                    src={img1}
                    alt="Uzbekistan"
                />

            </button>
        </div>
    );
}
