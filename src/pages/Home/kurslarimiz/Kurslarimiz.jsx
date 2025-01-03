import React from 'react';
import { useTranslation } from 'react-i18next';
import Ku from './Ku';

const Kurslarimiz = () => {



    return (
        <div>
            <section data-aos="fade-up" id="courses" className="container mt-10">
                <div data-aos="fade-up" className="text-center md:w-3/4 mx-auto flex justify-center items-center flex-col">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold">Bizning kurslarimiz</h2>
                    <h4 data-aos="fade-up" className="mt-3 opacity-70 text-[13px] sm:text-base">
                        MY9dagi mavjud kurslar haqida ma'lumot oling va sizga eng mos keladiganini tanlang
                    </h4>
                </div>
                <div className='flex mt-10 flex-wrap flex-row items-center justify-center gap-10'>
                    <Ku />
                    <Ku />

                </div>
            </section>
        </div>
    );
};

export default Kurslarimiz;