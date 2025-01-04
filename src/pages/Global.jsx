import React from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Global = () => {
    AOS.init();

    const { t } = useTranslation('global');

    const globalleft = [
        {
            h1: t("d1parag1"),
            p: t("d1parag2"),
        },
        {
            h1: t("d2parag1"),
            p: t("d2parag2"),
        },
    ];

    const globalright = [
        {
            h2: t("d3parag1"),
            p2: t("d3parag2"),
        },
        {
            h2: t("d4parag1"),
            p2: t("d4parag2"),
        },
    ];

    return (
        <section name="section2" className="py-10 section" id='teacher'>
            <section name="section1" className=' section container flex flex-col justify-center items-center gap-10'>
                <div className='flex flex-col justify-center text-center items-center gap-2 '>
                    <h1 data-aos="fade-up" className='text-[30px] font-bold'>{t("h1")}</h1>
                    <p data-aos="fade-up">{t("span")}</p>
                </div>
                <section className=' section flex flex-col md:flex-row gap-10 justify-center items-center '>
                    <div className='flex flex-col gap-5 sm:gap-[100px] w-[350px]'>
                        {globalleft.map(({ h1, p }, index) => (
                            <div key={index} className='flex flex-col items-center md:items-end justify-center text-center md:justify-end md:text-end'>
                                <h1 data-aos="fade-up" className='text-[20px] font-bold text-gren'>{h1}</h1>
                                <div className='w-[300px]'>
                                    <p data-aos="fade-up" className='text-[10px]'>{p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div data-aos="fade-up" className='border-4  border-white rounded-lg shadow-lg shadow-green'>
                        <img className='w-[300px] section border-4 border-amber-400 rounded-lg' src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/Business.png" alt="Mamura Yuldasheva" />
                    </div>
                    <div className='flex flex-col gap-5 sm:gap-[100px] w-[350px]'>
                        {globalright.map(({ h2, p2 }, index) => (
                            <div key={index} className='flex flex-col items-center md:items-start text-center md:text-start'>
                                <h2 data-aos="fade-up" className='text-[20px] font-semibold text-gren'>{h2}</h2>
                                <div className='w-[300px]'>
                                    <p data-aos="fade-up" name="section3" className='text-[10px] section'>{p2}</p>
                                </div>
                            </div>  
                        ))}
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Global;
