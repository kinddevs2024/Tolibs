import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Headerk = () => {
  const { t } = useTranslation("contact");

  return (
    <div className=' container text-center  bg-transparent'>
      <h1 data-aos="fade-up" className='text-5xl '>{t("kontatk")}</h1>
      <h1 data-aos="fade-up">{t("kontatk2")}</h1>

    </div>
  )
}

export default Headerk