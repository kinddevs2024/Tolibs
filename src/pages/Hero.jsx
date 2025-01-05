import React from 'react'
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { t } = useTranslation("hero");
    return (
        <section id='home' className='bg-oq section dark:bg-dakr  py-[30px] sm:py-16'>
            <div className='container  flex lg:flex-row   flex-col items-center justify-between'>
                <img data-aos="fade-up" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/man.png" alt="" className='  rounded     flex mb-10 lg:hidden lg:w-[100%] w-[100%]' />

                <div  className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[20px] sm:gap-14'>
                    <h1 data-aos="fade-up" className='text-qora dark:text-oq sm:text-6xl text-3xl font-bold'>{t("English")}
                        <span className='  sm:text-6xl text-3xl font-bold animate-text bg-gradient-to-r from-black dark:from-oq via-ornage dark:via-ornage dark:to-gren to-gren bg-clip-text text-transparent'>{t("English2")}</span>
                    </h1>
                    {/* <h1 data-aos="fade-up" className='sm:text-6xl text-3xl font-bold'>{t("English2")}</h1> */}
                    <span data-aos="fade-up" name="section2" className='sm:text-xl section text-lg bg-gradient-to-r from-ornage to-gren bg-clip-text text-transparent '>{t("Teach")}</span>
                    <Link to={"https://t.me/Tolibs_admin1"}>
                    
                    <Btn data-aos="fade-up"  className="  animate-text bg-gradient-to-r from-gren via-ornage to-oq bg-clip-text text-transparent" text={t("Button")} />
                    </Link>
                </div>
                <img data-aos="fade-up" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/man.png" alt="" className=' rounded-2xl hidden lg:flex lg:w-[50%] w-[100%]' />
            </div>
        </section>
    )
}

export default Hero