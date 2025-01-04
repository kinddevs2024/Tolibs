import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function Savollar() {
    const { t } = useTranslation("savollar");

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <section className="container mt-10 pt-10">
                <div className="text-center md:w-3/4 mx-auto flex justify-center items-center flex-col">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold">
                        {t("FAQ")}
                    </h2>
                    <h4 data-aos="fade-up" className="mt-3 opacity-70 text-[13px] sm:text-base">
                        {t("text")}
                    </h4>
                </div>
                <div data-aos="fade-up" className="px-5 dark:text-white lg:px-20 py-5 lg:py-10">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className="dark:text-white" onClick={() => handleOpen(1)}>
                            {t("question1")}
                        </AccordionHeader>
                        <AccordionBody className="dark:text-white">
                            {t("answer1")}
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className="dark:text-white" onClick={() => handleOpen(2)}>
                            {t("question2")}
                        </AccordionHeader>
                        <AccordionBody className="dark:text-white">
                            {t("answer2")}
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader className="dark:text-white" onClick={() => handleOpen(3)}>
                            {t("question3")}
                        </AccordionHeader>
                        <AccordionBody className="dark:text-white">
                            {t("answer3")}
                        </AccordionBody>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

export default Savollar;
