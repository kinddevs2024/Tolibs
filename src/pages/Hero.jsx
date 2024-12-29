import React from 'react'
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';

const Hero = () => {
    const { t } = useTranslation("hero");
    return (
        <section className='bg-oq dark:bg-dakr py-[50px]'>
            <div className='container  flex lg:flex-row   flex-col items-center justify-between'>
                <img data-aos="fade-up" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/Education-cuate.svg" alt="" className='  flex mb-10 lg:hidden lg:w-[100%] w-[100%]' />

                <div  className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[30px]'>
                    <h1 data-aos="fade-up" className='text-qora dark:text-oq sm:text-6xl text-3xl font-bold'>{t("English")}</h1>
                    <span data-aos="fade-up" className='sm:text-xl  text-lg bg-gradient-to-r from-ornage to-gren bg-clip-text text-transparent '>{t("Teach")}</span>
                    <Btn data-aos="fade-up" className="" text={t("Button")} />





                </div>
                <img data-aos="fade-up" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/Education-cuate.svg" alt="" className=' hidden lg:flex lg:w-[50%] w-[100%]' />
            </div>
        </section>
    )
}

export default Hero