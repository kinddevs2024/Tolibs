import React from 'react'
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';

const Hero = () => {
    const { t } = useTranslation("hero");
    return (
        <section className='bg-oq dark:bg-dakr py-[50px]'>
            <div className='container  flex lg:flex-row  flex-col items-center justify-between'>
                <img src="public/Education-cuate.svg" alt="" className='  flex lg:hidden lg:w-[50%] w-[100%]' />

                <div className='flex flex-col lg:items-start items-center lg:text-start text-center gap-[30px]'>
                    <h1 className='text-qora dark:text-oq sm:text-6xl text-3xl font-bold'>{t("English")}</h1>
                    <span className='sm:text-xl text-lg text-gray-700 '>{t("Teach")}</span>
                    <Btn text={t("Button")} />
                </div>
                <img src="public/Education-cuate.svg" alt="" className=' hidden lg:flex lg:w-[50%] w-[100%]'/>
            </div>
        </section>
    )
}

export default Hero