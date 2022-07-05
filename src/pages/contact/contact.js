import React, { useState } from 'react';
import { LinkedinIcon, OpenNewTabIcon } from '../../assets';
import { Maps } from '../../components';

function Contact() {

    const [message, setMessage] = useState({});
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div>
            <section className="w-full financingHero py-24 text-white bg-img-contact-header">
                <div className="flex items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-4xl">
                    <div className="flex flex-col w-full mx-auto text-center">
                        <div className="relative items-center w-full mx-auto align-middle">
                            <div className="pb-12">
                                <h1 data-aos="zoom-in" className="max-w-4xl text-4xl font-bold font-pop leading-none tracking-tighter md:text-4xl lg:text-4xl lg:max-w-7xl">
                                    Contáctanos
                                </h1>
                                <p data-aos="zoom-in" className="mt-5 text-base font-pop leading-relaxed">
                                    ¿Tiene alguna duda o comentario sobre nuestra
                                    web corporativa? Utilice el formulario de contacto que
                                    aparece en la parte inferior.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col bg-otherLight-500   py-12 px-5 items-center justify-center">
                    <div className="flex p-2 mb-2 space-x-6">
                        <a data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-offset="0" href="https://www.linkedin.com/company/grupo-empresarial-platino-hn/" target="_blank" rel="noreferrer" className="flex text-black items-end space-x-1 hover:text-gray-500">
                            <img src={LinkedinIcon} alt="linkeding icon"/>
                            <span className="text-3xl font-pop font-semibold">Linkedin</span>
                        </a>
                    </div>
                    <div className="flex justify-center w-full">
                        <p data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-offset="0" className="text-base font-light font-pop text-gray-400">
                            Buscanos en nuestra red social oficial y encuentra nuestras plazas disponibles.
                        </p>
                    </div>
                    <div className="pt-10">
                    <button type="button" onClick={()=>openInNewTab("https://www.linkedin.com/company/grupo-empresarial-platino-hn/mycompany/")} className="text-white font-pop bg-blue  w-full rounded-3xl pr-6 pl-6   focus:ring-4 
                                    focus:outline-none focus:ring-blue-300  border-none font-medium text-sm px-5 py-4 sm:py-2 text-center mr-2 mb-2"><div className="flex justify-center"><p>Aplica a tu trabajo ideal...</p><img className="h-5 md:h-4 ml-2" src={OpenNewTabIcon} alt="Cotizar" /> </div></button>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full p-6 bg-otherLight-50  lg:w-3/5 lg:p-24">
                        <form id="create-course-form">
                            <div className="overflow-hidden">
                                <div className='flex justify-center'>
                                    <p className='font-pop text-black text-2xl font-semibold'>Escribenos</p></div>
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                        <input type='text' className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full pl-2 p-2.5 " placeholder="Nombre"></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                        <input type='text' className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full pl-2 p-2.5 " placeholder="Apellido"></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                        <input type='text' className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full pl-2 p-2.5 " placeholder="Correo Electrónico"></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                        <input type='text' className=" border-b text-sm bg-otherLight-50  text-fiord-500  focus:outline-none focus:border-primary border-lightPlaceHolder block font-pop w-full pl-2 p-2.5 " placeholder="Asunto"></input>
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <textarea onChange={e => setMessage({ ...message, message: e.target.value })} name="message" rows="10" placeholder="Escribe tu mensaje aqui..." className="mt-1 block border border-otherLight-400 p-2 w-full  shadow-sm bg-otherLight-50 sm:text-sm font-pop border-gray-300" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 w-full py-3 text-center  sm:px-6">
                                    <button
                                        type="submit"
                                        value="submit"
                                        className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full h-maps-mobile lg:w-2/5 lg:h-auto">
                        <Maps />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;