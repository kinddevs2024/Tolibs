import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import useStore from '../utils/zustand';
import PhoneAnimation from '../utils/PhoneAnimation';
import { DrawerDefault } from '../utils/Drawer';
import { MenuDefault } from '../utils/Switcherbtn';
import ThemeToggle from '../Layout/ThemeToggle.jsx';
import Logo from '../pages/Logo.jsx';
import { Link } from "react-scroll";

// import { Link, Element } from "react-scroll";



const Header = () => {
    const { theme, toggleTheme } = useStore()
    const { t } = useTranslation("layout","savollar");


    return (
        <header className='bg-oq  dark:bg-dakr py-[20px] font-exo sticky top-0 border-b-2 border-b-gren dark:shadow-oq z-20'>
            <div className='px-[20px] sm:container  flex flex-row items-center justify-between'>
                <div>
                    <Logo />
                </div>

                <ul className='lg:flex hidden flex-row items-center gap-[30px] text-lg dark:text-oq  text-qora'>
                    <Link to="section1" smooth={true} duration={500}>
                        <li href=".header1" className='cursor-pointer hover:border-b-gren hover:border-b-[1px] hover:text-gren '>{t("Teacher")}</li>
                    </Link>
                    <Link to="section2" smooth={true} duration={500}>
                        <li href=".header1" className='cursor-pointer hover:border-b-gren hover:border-b-[1px] hover:text-gren '>{t("Result")}</li>
                    </Link>
                    <Link to="section3" smooth={true} duration={500}>
                        <li href=".header1" className='cursor-pointer hover:border-b-gren hover:border-b-[1px] hover:text-gren '>{t("Courses")}</li>
                    </Link>
                    <Link to="section4" smooth={true} duration={500}>
                        <li href=".header1" className='cursor-pointer hover:border-b-gren hover:border-b-[1px] hover:text-gren '>{t("Contact")}</li>
                    </Link>
                </ul>

                <div className='flex flex-row items-center justify-center gap-[5px] sm:gap-[10px] '>
                    {/* <button onClick={toggleTheme} className='sm:flex hidden duration-500'>
                        <img src={theme == "light" ? '/public/moon.png' : '/public/sun.png'} alt="" width={25} />
                    </button> */}

                    <div className='lg:flex hidden '>
                        <ThemeToggle />

                    </div>
                    <PhoneAnimation />
                    {/* <LanguageSwitcher /> */}
                    <div className='md:flex hidden '>
                        <MenuDefault />
                    </div>
                    <a className='ml-4' href="tel:+998770520952"><Button /></a>
                    <div className='lg:hidden flex items-center gap-2'>
                        <DrawerDefault />

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header