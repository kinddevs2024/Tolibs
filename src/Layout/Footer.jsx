import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../pages/Logo';

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="duration-300 px-4 pt-16 mx-auto container">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a aria-label="Go home" title="MY9 Learning Center" className="inline-flex items-center" href="/">
            <Logo />
            <span className="ml-2 text-xl font-bold tracking-wide text-gren uppercase">Learning Center</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm">{t('welcomeMessage')}</p>
            <p className="mt-4 text-sm">{t('joinMessage')}</p>
          </div>
        </div>
        <address className="space-y-2 text-sm not-italic">
          <p className="text-base font-bold tracking-wide text-gren">{t('contact')}</p>
          <div className="flex">
            <p className="mr-1">{t('phone')}:</p>
            <a href="tel:+998507122204" aria-label="Phone" title="Phone" className="transition-colors duration-300 text-gren hover:text-orange-500">
              +998 50 712 22 04
            </a>
          </div>
          <div className="flex">
            <p className="mr-1">{t('phone')}:</p>
            <a href="tel:+998900202299" aria-label="Phone" title="Phone" className="transition-colors duration-300 text-gren hover:text-orange-500">
              +998 90 020 22 99
            </a>
          </div>
        </address>
        <div>
          <span className="text-base font-bold tracking-wide text-gren">{t('socialMedia')}</span>
          <div className="flex items-center mt-2 space-x-3">
            {/* Social media links */}
            <a href="https://t.me/my9_lc" className="text-gren transition-colors duration-300 hover:text-orange-500">
              {/* Telegram Icon */}
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559184362290" className="text-gren transition-colors duration-300 hover:text-orange-500">
              {/* Facebook Icon */}
            </a>
            <a href="https://www.instagram.com/my9_lc/?hl=en" className="text-gren transition-colors duration-300 hover:text-orange-500">
              {/* Instagram Icon */}
            </a>
            <a href="https://www.youtube.com/@my9_lc" className="text-gren transition-colors duration-300 hover:text-orange-500">
              {/* YouTube Icon */}
            </a>
          </div>
          <p className="mt-2 text-sm">{t('followUs')}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between py-5 border-t border-gren lg:flex-row">
        <p className="text-sm">{t('rightsReserved')}</p>
        <h6 className="text-sm mb-3 sm:mb-0">{t('madeBy')} <a className="text-gren underline" href="https://umarbek-portfolio.vercel.app/">UUmarbek</a></h6>
      </div>
    </footer>
  );
};

export default Footer;
