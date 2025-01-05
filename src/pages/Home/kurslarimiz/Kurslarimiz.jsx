import React from 'react';
import Ku from './Ku';
import Ku2 from './Ku2';
import { useTranslation } from 'react-i18next';


const Kurslarimiz = () => {

    const { t } = useTranslation("hero");


    return (
        <div>
            <section  data-aos="fade-up" id="courses" className="container section mt-10">
                <div data-aos="fade-up" className="text-center md:w-3/4 mx-auto flex justify-center items-center flex-col">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold">{t("English3")}</h2>
                    <h4 data-aos="fade-up" className="mt-3 opacity-70 text-[13px] sm:text-base">
                        {t("English4")}
                    </h4>
                </div>
                <div className='flex mt-10 flex-wrap flex-row items-start justify-center '>
                    <Ku />
                    <Ku2 />

                </div>
            </section>
        </div>
    );
};

export default Kurslarimiz;