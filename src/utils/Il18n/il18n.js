import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLayout from "./en/layout";
import ruLayout from "./ru/layout";
import uzLayout from "./uz/layout";
import enHero from "./en/hero";
import ruHero from "./ru/hero";
import uzHero from "./uz/hero";
import enResumcrd from "./en/resumcrd";
import ruResumcrd from "./ru/resumcrd";
import uzResumcrd from "./uz/resumcrd";
import enGlobal from "./en/global";
import ruGlobal from "./ru/global";
import uzGlobal from "./uz/global";
import uzcontact from "./uz/contact";
import rucontact from "./ru/contact";
import encontact from "./en/contact";
import uzkursi from "./uz/kursi";
import rukursi from "./ru/kursi";
import enkursi from "./en/kursi";
import uzsavollar from "./uz/savollar";
import rusavollar from "./ru/savollar";
import ensavollar from "./en/savollar";
import enfooter from "./en/footer";
import rufooter from "./ru/footer";
import uzfooter from "./uz/footer";


const resources = {
    en: {
        layout: enLayout,
        hero: enHero,
        resumcrd: enResumcrd,
        global: enGlobal,
        contact: encontact,
        kursi: enkursi,
        savollar: ensavollar,
        footer: enfooter,

    },
    ru: {
        layout: ruLayout,
        hero: ruHero,
        resumcrd: ruResumcrd,
        global: ruGlobal,
        contact: rucontact,
        kursi: rukursi,
        savollar: rusavollar ,
        footer: rufooter,


    },
    uz: {
        layout: uzLayout,
        hero: uzHero,
        resumcrd: uzResumcrd,
        global: uzGlobal,
        contact: uzcontact,
        kursi: uzkursi,
        savollar: uzsavollar,
        footer: uzfooter,

    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("language") || "uz",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;