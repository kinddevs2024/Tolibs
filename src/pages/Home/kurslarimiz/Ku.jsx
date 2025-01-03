import React from 'react';
import { useTranslation } from 'react-i18next';


const Ku = () => {
        const { t } = useTranslation("kursi");
    
    return (
        <div className="my-10 flex flex-row  items-center justify-center flex-wrap gap-10">
            <div
                data-aos="fade-up"
                // data-aos-delay={courses[0].delay}
                className="w-80 xl:w-72 shadow-lg shadow-ornage  relativeshadow-accent1 h-auto border-2 border-accent2 p-5 rounded-xl aos-init aos-animate"
            >
                <div className='flex  mb-5 justify-center items-center text-center flex-col gap '>
                    <h5 className="text-center text-accent2 text-2xl font-semibold mb-1">{t("title")}</h5>
                    <p>{t("infooftit")}</p>
                </div>

                <ul className="flex flex-col items-start gap-2">
                    <li className="flex flex-row items-start gap-2">
                        <img width="30" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/read.png" alt="checked-icon" />
                        <p className="text-sm opacity-90">{t("one")}</p>
                    </li>
                    <li className="flex flex-row items-start gap-2">
                        <img width="30" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/read.png" alt="checked-icon" />
                        <p className="text-sm opacity-90">{t("twhu")}</p>
                    </li>
                    <li className="flex flex-row items-start gap-2">
                        <img width="30" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/read.png" alt="checked-icon" />
                        <p className="text-sm opacity-90">{t("there")}</p>
                    </li>
                    <li className="flex m-2 ml-0 flex-row items-start gap-2">
                        <img width="30" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/flame.png" alt="checked-icon" />
                        <p className="text-sm opacity-90">{t("natija")}</p>
                    </li>
                    <li className="flex m-2 mt-0 ml-0 flex-row items-start gap-2">
                        <img width="30" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/calendar-clock.png" alt="checked-icon" />
                        <p className="text-sm opacity-90">{t("data")}</p>
                    </li>
                    <li className="flex m-2 mt-0 ml-0 mb-11 flex-row items-start gap-2">
                        <img width="30" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/tags.png" alt="checked-icon" />
                        <p className="text-sm opacity-90">{t("prise")} <div className='flex justify-end items-end text-justify'><s className='mr-2 mt-1 mb-3'> <p className='text-[12px]'>350.000 UZS</p></s> 289.000 UZS</div></p>
                    </li>
                </ul>
                <div className="absolute border-gren bg-gren active:shadow-sm bottom-5 left-7 w-4/5 rounded-xl bg-main flex items-center justify-center border-2 border-accent1 shadow-lg hover:bg-accent1 text-primary dark:text-secondary hover:text-primary duration-300 cursor-pointer active:scale-[0.98]">
                    <button className="py-2 px-1 text-sm"><a href="https://t.me/Tolibs_admin1">{t("get")}</a></button>
                </div>
            </div>
        </div>
    );
};

export default Ku;