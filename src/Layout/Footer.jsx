import React from 'react'
import Logo from '../pages/Logo'


const Footer = () => {
  return (
    <footer className="duration-300 px-4 pt-16 mx-auto container  ">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a aria-label="Go home" title="MY9 Learning Center" className="inline-flex items-center" href="/">
            <Logo  />
            <span className="ml-2 text-xl font-bold tracking-wide text-gren uppercase">Learning Center</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm">Bizning o'quv markazimizga xush kelibsiz, bu yerda biz talabalarga IELTS maqsadlariga erishishga yordam beramiz. Bizning tajribali o'qituvchilarimiz shaxsiy darslar taqdim etib, sizning istalgan balni qo'lga kiritishingizni ta'minlaydi.</p>
            <p className="mt-4 text-sm">Qo'llab-quvvatlovchi va samarali o'quv muhitini his qilish uchun bizga qo'shiling.</p>
          </div>
        </div>
        <address className="space-y-2 text-sm not-italic">
          <p className="text-base font-bold tracking-wide text-gren">Kontaktlar</p>
          <div className="flex">
            <p className="mr-1">Telefon:</p>
            <a href="tel:+998507122204" aria-label="Telefon:" title="Telefon:" className="transition-colors duration-300 text-gren hover:text-orange-500">+998 50 712 22 04</a>
          </div>
          <div className="flex">
            <p className="mr-1">Telefon:</p>
            <a href="tel:+998900202299" aria-label="Telefon:" title="Telefon:" className="transition-colors duration-300 text-gren hover:text-orange-500">+998 90 020 22 99</a>
          </div>
        </address>
        <div>
          <span className="text-base font-bold tracking-wide text-gren">Ijtimoiy tarmoqlar</span>
          <div className="flex items-center mt-2 space-x-3">
            <a href="https://t.me/my9_lc" className="text-gren transition-colors duration-300 hover:text-orange-500">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559184362290" className="text-gren transition-colors duration-300 hover:text-orange-500">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/my9_lc/?hl=en" className="text-gren transition-colors duration-300 hover:text-orange-500">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@my9_lc" className="text-gren transition-colors duration-300 hover:text-orange-500">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-2 text-sm">Oxirgi yangiliklar va resurslar uchun bizni ijtimoiy tarmoqlarda kuzatib boring.</p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between py-5 border-t border-gren lg:flex-row">
        <p className="text-sm">© 2025 Tolib's Learning Center. Barcha huquqlar himoyalangan.</p>
        <h6 className="text-sm mb-3 sm:mb-0">Made by <a className="text-gren underline" href="https://umarbek-portfolio.vercel.app/">UUmarbek</a></h6>
      </div>
    </footer>
  )
}


export default Footer;