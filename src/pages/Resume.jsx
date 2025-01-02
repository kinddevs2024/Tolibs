import { CountUp } from 'countup.js';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Resume = () => {
    const { t } = useTranslation("resumcrd");

    const resume = [
        { h1: t("4+"), span: t("span1"), end: 4 },
        { h1: t("500+"), span: t("span2"), end: 500 },
        { h1: t("10+"), span: t("span3"), end: 10 }
    ];

    return (
        <section className=' duration-300 py-5 sm:py-10'>
            <div className=' duration-300  container flex justify-center xl:justify-between items-center flex-wrap gap-4'>
                {resume.map(({ h1, span, end }, index) => (
                    <CountUpWrapper key={index} end={end} h1={h1} span={span} />
                ))}
            </div>
        </section>
    );
};

const CountUpWrapper = ({ end, span }) => {
    const countUpRef = useRef(null);

    useEffect(() => {
        if (countUpRef.current) {
            const countUp = new CountUp(countUpRef.current, end, { duration: 3 });
            countUp.start();
        }
    }, [end]);

    return (
        <div data-aos="fade-up" 
        className='text-center duration-300 flex flex-col justify-center gap-3 w-[300px] border-t-2 border-gren p-4 rounded-2xl 
        hover:shadow-lg sm:shadow-none shadow-lg sm:shadow-transparent shadow-gren hover:shadow-gren   cursor-pointer dark:bg-dark dark:text-oq'>
            <h1  className='text-4xl md:text-6xl font-bold' ref={countUpRef}></h1>
            <span className='text-[20px]'>{span}</span>
        </div>
    );
};

export default Resume;
