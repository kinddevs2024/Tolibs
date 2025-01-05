import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Ku = () => {
    const { t } = useTranslation("kursi2");

    return (
        <Card className=" w-[500px] mx-auto bg-oq dark:bg-dakr rounded-xl shadow-lg dark:shadow-white hover:shadow-xl overflow-hidden md:max-w-2xl p-6">
            <Typography data-aos="fade-up" variant="h4" className="text-qora dark:text-oq mb-4">
                {t('title')}
            </Typography>
            <Typography data-aos="fade-up" variant="h6" className="text-gren dark:text-ornage text-lg mb-6">
                {t('subtitle')}
            </Typography>

            <section className="mb-6">
                <Typography data-aos="fade-up" variant="h5" className="text-ornage dark:text-gren mb-2">
                    {t('whoIsItFor')}
                </Typography>
                <ul data-aos="fade-up" className="list-disc list-inside text-qora dark:text-oq">
                    {t('whoIsItForPoints', { returnObjects: true }).map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-6">
                <Typography data-aos="fade-up" variant="h5" className="text-ornage dark:text-gren mb-2">
                    {t('whatWillYouLearn')}
                </Typography>
                <ul data-aos="fade-up" className="list-disc list-inside text-qora dark:text-oq">
                    {t('whatWillYouLearnPoints', { returnObjects: true }).map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-6">
                <Typography data-aos="fade-up" variant="h5" className="text-ornage dark:text-gren mb-2">
                    {t('courseStructure')}
                </Typography>
                <ul data-aos="fade-up" className="list-disc list-inside text-qora dark:text-oq">
                    {t('courseStructurePoints', { returnObjects: true }).map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-6">
                <Typography data-aos="fade-up" variant="h5" className="text-ornage dark:text-gren mb-2">
                    {t('teacher')}
                </Typography>
                <Typography data-aos="fade-up" className="text-qora dark:text-oq">
                    {t('teacherName')}
                </Typography>
            </section>

            <section className="mb-6">
                <Typography data-aos="fade-up" variant="h5" className="text-ornage dark:text-gren mb-2">
                    {t('courseDuration')}
                </Typography>
                <Typography data-aos="fade-up" className="text-qora dark:text-oq">
                    {t('courseDurationDetails')}
                </Typography>
            </section>

            <section className="mb-6">
                <Typography data-aos="fade-up" variant="h5" className="text-ornage dark:text-gren mb-2">
                    {t('coursePrice')}
                </Typography>
                <Typography data-aos="fade-up" variant="h4" className="text-gren dark:text-ornage font-bold">
                    <s>
                        {t('price1')}
                    </s> /&nbsp;
                    {t('price2')}
                </Typography>
            </section>

            <a href="https://t.me/Tolibs_admin1">
                <Button data-aos="fade-up" className="w-full bg-gren dark:shadow-white dark:bg-gren text-oq dark:text-qora py-2 px-4 rounded hover:bg-gren dark:hover:bg-ornage focus:outline-none focus:ring-2 focus:ring-gren dark:focus:ring-ornage focus:ring-opacity-75">
                    {t('registerButton')}
                </Button>
            </a>
        </Card>
    );
};

export default Ku;
