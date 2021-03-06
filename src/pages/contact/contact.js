import React, { useState, useEffect } from "react";
import { LinkedinIcon } from "../../assets";
import { Maps } from "../../components";
import ScrollToTop from "../../utils/scroll_to_top";
import { useTranslation } from "react-i18next";

function Contact() {
    const [t] = useTranslation('common');
    const [message, setMessage] = useState({});
    const openInNewTab = url => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    useEffect(() => {
        ScrollToTop();
    }, []);
    return (
        <div>
            <section className="w-full financingHero text-white">
                <div className="container mx-auto">
                    <div className="text-center lg:text-start pt-48 pb-36 lg:w-3/5 xl:w-2/4">
                        <div className="lg:px-5 xl:px-10">
                            <h1 className="text-white font-pop md:leading-snug font-bold text-4xl sm:text-5xl mb-3">
                                {t("contact.hero.title")}
                            </h1>
                            <p className="text-white font-pop text-base font-medium px-4 sm:px-0">
                                {t("contact.hero.sub_title")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col bg-otherLight-500 py-12 px-5 items-center justify-center">
                    <div className="flex p-2 mb-2 space-x-6">
                        <a href="https://www.linkedin.com/company/grupo-empresarial-platino-hn/" target="_blank" rel="noreferrer" className="flex text-black items-end space-x-1 hover:text-gray-500">
                            <img src={LinkedinIcon} alt="linkeding icon" />
                            <span className="text-3xl font-pop font-semibold">Linkedin</span>
                        </a>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="text-base font-light font-pop text-gray-800">
                            {t("contact.body.job.description")}
                        </p>
                    </div>
                    <div className="pt-10">
                        <button type="button" onClick={() => openInNewTab("https://www.linkedin.com/company/grupo-empresarial-platino-hn/mycompany/")} className="text-white font-pop bg-blue  w-full rounded-3xl pr-6 pl-6   focus:ring-4 
                                    focus:outline-none focus:ring-blue-300  border-none font-medium text-sm px-5 py-3 text-center mr-2 mb-2">
                            <div className="flex justify-center">
                                <p>{t("contact.body.job.button")}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full p-6 bg-otherLight-50">
                        <form id="create-course-form">
                            <div className="overflow-hidden">
                                <div className="flex justify-center">
                                    <p className="font-pop text-black text-3xl font-semibold mb-3">{t("contact.body.form.title")}</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="font-pop text-gray-500 text-sm text-center font-semibold xl:px-8">{t("contact.body.form.description")}</p>
                                </div>
                                <div className="py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <input type="text" className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full p-2.5" placeholder={t("contact.body.form.first_name")}></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <input type="text" className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full p-2.5" placeholder={t("contact.body.form.last_name")}></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <input type="text" className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full p-2.5" placeholder={t("contact.body.form.email")}></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <input type="text" className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full p-2.5" placeholder={t("contact.body.form.subject")}></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <textarea onChange={e => setMessage({ ...message, message: e.target.value })} name="message" rows="10" placeholder={`${t("contact.body.form.message")}...`} className="mt-1 block border p-2 w-full  shadow-sm bg-otherLight-50 sm:text-sm font-pop border-gray-300" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 w-full py-3 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        value="submit"
                                        className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        {t("contact.body.form.button")}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full h-80 lg:h-auto">
                        <Maps />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;