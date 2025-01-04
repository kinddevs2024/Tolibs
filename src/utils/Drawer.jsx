import React from "react";
import {
    Drawer,
    IconButton,
} from "@material-tailwind/react";
import useStore from "./zustand";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../Layout/ThemeToggle.jsx";
import Button from "../Button";
import Logo from "../pages/Logo.jsx";
import SecondSwitcher02 from "./SecondSwitcher02.jsx";
import { Link } from "react-scroll";


export function DrawerDefault() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const { t } = useTranslation("layout");
    const { theme, toggleTheme } = useStore()


    return (
        <React.Fragment >
            <button onClick={openDrawer} className='lg:hidden flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff9e16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
            <Drawer open={open} onClose={closeDrawer} placement="right" className="p-2 bg-oq dark:bg-dakr">
                <div className="mb-6 flex items-center justify-between">
                    <Logo />
                    {/* <svg className="" width="130" height="45" viewBox="0 0 164 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5V57H15.5V27.5L30.5 42.5L56.5 16.5L59 19V1H41.5L44.5 4L29.5 19L15.5 5H0Z" fill="#17252A"></path><path d="M97.684 35.748V57H83.236V35.916L64.168 1.56H80.128L90.46 20.88L100.792 1.56H116.668L97.684 35.748Z" fill="#17252A"></path><path d="M139.928 0.551996C143.68 0.551996 147.18 1.448 150.428 3.24C153.732 4.976 156.364 7.412 158.324 10.548C160.284 13.684 161.264 17.24 161.264 21.216C161.264 24.24 160.648 26.984 159.416 29.448C158.24 31.912 156.336 34.908 153.704 38.436L139.844 57H122.792L135.14 40.284C132.284 39.892 129.596 38.856 127.076 37.176C124.556 35.496 122.512 33.256 120.944 30.456C119.376 27.656 118.592 24.52 118.592 21.048C118.592 17.128 119.572 13.628 121.532 10.548C123.548 7.412 126.18 4.976 129.428 3.24C132.732 1.448 136.232 0.551996 139.928 0.551996ZM139.928 28.272C141.944 28.272 143.624 27.6 144.968 26.256C146.312 24.856 146.984 23.148 146.984 21.132C146.984 19.06 146.284 17.324 144.884 15.924C143.54 14.524 141.888 13.824 139.928 13.824C137.968 13.824 136.288 14.524 134.888 15.924C133.544 17.324 132.872 19.06 132.872 21.132C132.872 23.204 133.544 24.912 134.888 26.256C136.288 27.6 137.968 28.272 139.928 28.272Z" fill="#ff9e16"></path><path d="M59.5 56.5H45.5V41.5L59.5 27.5V56.5Z" fill="#ff9e16"></path></svg> */}
                    <IconButton variant="text" className="rounded-full border-2 border-gren p-2" color="#d0ff00-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                    <Link to="section1" className=" w-full" smooth={true} duration={500}>
                    
                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        {/* <img src="https://www.svgrepo.com/show/493523/teacher-male.svg" alt="" width={20} /> */}
                        <img width="25" src="https://www.svgrepo.com/show/493523/teacher-male.svg" alt="Teachers"/>
                        <span className="text-qora dark:text-oq">{t("Teacher")}</span>
                    </div>
                    
                    </Link>
                    <Link to="section2" className=" w-full" smooth={true} duration={500}>
                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        {/* <img src="https://www.svgrepo.com/show/324120/graduation-education-cap-mortarboard-graduate.svg" alt="" width={20} /> */}
                        <img width="25" src="https://www.svgrepo.com/show/324120/graduation-education-cap-mortarboard-graduate.svg" alt="Results"/>
                        <span className="text-qora dark:text-oq">{t("Result")}</span>
                    </div>
                    
                    </Link>
                    

                    <Link to="section3" className=" w-full" smooth={true} duration={500}>
                    
                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        {/* <img src="https://www.svgrepo.com/show/382165/book-shelf-books-education-learning-school-study.svg" alt="" width={20} /> */}
                        <img width="25" src="https://www.svgrepo.com/show/382165/book-shelf-books-education-learning-school-study.svg" alt="Courses"/>
                        <span className="text-qora dark:text-oq">{t("Courses")}</span>
                    </div>
                    
                    
                    </Link>

                    <Link to="section4" className=" w-full" smooth={true} duration={500}>

                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        <img width="25" src="https://raw.githubusercontent.com/kinddevs2024/Tolibs/refs/heads/main/public/contact.png" alt="contact" />
                        {/* <img src="https://www.svgrepo.com/show/67982/telephone.svg" alt="" width={20} /> */}
                        <span className="text-qora dark:text-oq">{t("Contact")}</span>
                    </div>
                    
                    </Link>
                </div>

                <div className="w-full flex  mb-0  gap-[10px]   items-center ">
                    <div className="p-4 mt-[10px] border-2 border-gren rounded-xl">
                        <ThemeToggle />
                    </div>
                    <div className="p-5 mt-[10px] mb-0 border-2 border-gren rounded-xl">
                    <SecondSwitcher02 />
                    </div>
                </div>
                <div className="flex mt-3 border-2 p-4 border-gren rounded-lg w-full h-auto gap-7 items-center  space-x-3">
                    <a href="" className="text-gren transition-colors duration-300 hover:text-orange-500">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                        </svg>
                    </a>
                    <a href="" className="text-gren transition-colors duration-300 hover:text-orange-500">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                        </svg>
                    </a>
                    <a href="" className="text-gren transition-colors duration-300 hover:text-orange-500">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                    </a>
                    <a href="" className="text-gren transition-colors duration-300 hover:text-orange-500">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                        </svg>
                    </a>
                </div>
            </Drawer>
        </React.Fragment>
    );
}