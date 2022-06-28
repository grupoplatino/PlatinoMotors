import React from 'react';
import {GrupoPlatinoAllWhite, FacebookWhiteIcon, InstagramWhiteIcon, EmailWhiteIcon, MapsWhiteIcon,PhoneWhiteIcon,PlatinoMotorsWhite,PlatinoHnWhite} from '../assets/index';
function Foother() {
    return (
        <footer className='text-white px-2 py-2 sm:py-7 bg-black '>
            <div className='p-10 max-w-7xl  container px-4 mx-auto flex items-center'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <div className='mb-5'>
                        <hr className='bg-primary mb-5 h-0.5 border-none'></hr>
                        <div className='grid justify-items-center sm:justify-items-start'>
                            <img className='h-16 sm:justify-center  md:justify-start mb-10' src={PlatinoMotorsWhite} alt="Platino Motors Logo" />
                        </div>
                        <div className='flex flex-nowrap align-middle gap-2 mb-1'>
                            <div className='mt-2'><img className='h-3' src={EmailWhiteIcon} alt='email icon' /></div>
                            <div>
                                <p className='font-pop'>
                                    havila@platino.hn
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap align-middle gap-2 mb-1'>
                            <div className='mt-1'><img className='h-4' src={PhoneWhiteIcon} alt='phone icon' /></div>
                            <div>
                                <p className='font-pop'>
                                    +504 3295-1859
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap align-middle gap-2 mb-1'>
                            <div className='mt-1'><img className='h-4' src={FacebookWhiteIcon} alt='facebook icon' /></div>
                            <div>
                                <p className='font-pop'>
                                   /platinomotors
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap align-middle gap-2 mb-1'>
                            <div className='mt-1'><img className='h-4' src={InstagramWhiteIcon} alt='instagram icon' /></div>
                            <div>
                                <p className='font-pop'>
                                    @platinomotors
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap align-middle gap-2 ali'>
                            <div className='mt-1'><img className='h-4' src={MapsWhiteIcon} alt='maps icon' /></div>
                            <div>
                                <p className='font-pop'>
                                Autopista a La Lima, Bulevar del Este contiguo a Maderera Noriega. <br/>San Pedro Sula, Cortes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 text-white'>
                        <hr className='bg-primary mb-5 h-0.5 border-none'></hr>
                        <p className='mb-1 font-bold font-pop'><strong>Sobre Nosotros</strong></p>
                        <p className=' text-sm text-justify font-light text-white mb-5 font-pop'> Distribuimos, vendemos y rentamos maquinaria de alta potencia y calidad para el mercado minero, portuario y de contruccion. Además ofrecemos el servicio de mantenimiento preventivo y correctivo de nuestras maquinarias, asi garantizamos la satisfaccion y rentabilidad de nuestros clientes.</p>
                        <hr className='bg-primary mb-5 h-0.5 border-none'></hr>
                        <p className='bold mb-1 font-bold font-pop'><strong>Empleos</strong></p>
                        <p className='text-sm font-light mb-1 font-pop'>¿Quieres unirte a nuestro equipo de trabajo?</p>
                       <p className='text-sm font-light font-pop hover:opacity-80'> <a target='_blank' rel="noreferrer" href='https://www.grupoplatino.hn/#/Careers'>Ver Plazas Vacantes </a></p>
                    </div>
                </div>
                
            </div>
            <div className=' max-w-7xl  container  mx-auto   px-4'>
                <div className='grid grid-cols-1 gap-10  sm:grid-cols-2'>
                        <div className='mb-0 sm:mb-0   justify-items-start'>
                            <p className='text-center sm:text-start text-sm font-pop'>© 2021 Distribuidora Platino S.A. Todos los derechos reservados.</p>
                        </div>
                        <div className='mb-5 sm:mb-0 grid grid-cols-1 sm:grid-cols-2'>
                            <div className=' grid grid-cols-1 justify-items-center sm:justify-items-start'>
                               <img className='h-10 mb-5 sm:h-10' src={PlatinoHnWhite} alt='Platino Hn' />
                            </div>
                            <div className=' grid grid-cols-1 justify-items-center sm:justify-items-end'>
                               <img className='h-10 sm:h-10' src={GrupoPlatinoAllWhite} alt='Grupo Platino' />
                            </div>
                        </div>
                </div>
            </div>
        </footer>
    );
}

export default Foother;
