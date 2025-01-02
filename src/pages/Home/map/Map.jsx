import React from 'react';

const Map = () => {
    return (
        <section id="contact" className="bg-primary text-secondary container duration-300">
            <div className="max-w-7xl mx-auto pt-5 px-4 sm:px-6 lg:pt-10 lg:px-8">
                <div className="text-center md:w-3/4 mx-auto flex justify-center items-center flex-col">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold">Biz bilan bog'laning</h2>
                    <h4 data-aos="fade-up" className="mt-3 opacity-70 text-[13px] sm:text-base">
                        Qulaylik va samaradorlikka to'la muhitda bo'ling. Oson va zavqli tarzda o'rganing!
                    </h4>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6775696626164!2d69.222099575529!3d41.294121301775895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b00610f645b%3A0x7b8ed4724ba19468!2sMY9%20Learning%20Center!5e0!3m2!1sen!2s!4v1725615470240!5m2!1sen!2s"
                                width="100%"
                                height="480"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 data-aos="fade-up" className="text-lg font-semibold text-accent2 ">Bizning manzil</h3>
                                    <p data-aos="fade-up" className="mt-1 opacity-85">Bunyodkor prospekti 1, Toshkent, O'zbekiston</p>
                                    <p data-aos="fade-up" className="mt-1 opacity-85">Novza metro bekati, Ziraat Banki yonida.</p>
                                </div>
                                <div className="border-t border-gray-400 px-6 py-4">
                                    <h3 data-aos="fade-up" className="text-lg font-semibold text-accent2">Ish vaqtimiz</h3>
                                    <p data-aos="fade-up" className="mt-1 opacity-85">Dushanba - Shanba: 09:00–20:00</p>
                                </div>
                                <div className="border-t border-gray-400 px-6 py-4">
                                    <h3 data-aos="fade-up" className="text-lg font-semibold text-accent2">Aloqa uchun</h3>
                                    <a data-aos="fade-up" href="mailto:ulugbekovumarbek@kinddevs.com" className="mt-1 opacity-85 block">
                                        E-Mail: exzample@exzample.com
                                    </a>
                                    <a data-aos="fade-up" href="tel:+998 50 712 22 04" className="mt-1 opacity-85">
                                        Telefon: +998 50 712 22 04
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;