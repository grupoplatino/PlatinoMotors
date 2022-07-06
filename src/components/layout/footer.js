import React from "react";
import {
    GrupoPlatinoAllWhite,
    FacebookWhiteIcon,
    InstagramWhiteIcon,
    EmailWhiteIcon,
    MapsWhiteIcon,
    PhoneWhiteIcon,
    PlatinoHnWhite,
    PlatinoMotorsWhite,
    PlatinoCapital,
    PlatinoFerreteria,
    PlatinoInmobiliaria,
    PlatinoMotors,
    PlatinoLogistic,
    PlatinoRepuestos,
    PlatinoSoftware,
    PlatinoUsados
} from "../../assets/index";
import arrow_white from "../../assets/icons/rigth_arrow_white.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Footer = () => {
    const companies = [
        {
            name: "Platino Motors",
            logo: PlatinoMotors
        },
        {
            name: "Platino Logistic",
            logo: PlatinoLogistic
        },
        {
            name: "Platino Software",
            logo: PlatinoSoftware
        },
        {
            name: "Platino Repuestos",
            logo: PlatinoRepuestos
        },
        {
            name: "Platino Usados",
            logo: PlatinoUsados
        },
        {
            name: "Platino Capital",
            logo: PlatinoCapital
        },
        {
            name: "Platino Inmobiliaria",
            logo: PlatinoInmobiliaria
        },
        {
            name: "Platino Ferreteria",
            logo: PlatinoFerreteria
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <footer className="text-white pt-7 bg-black">
            <div className="p-10 max-w-7xl container px-4 mx-auto flex items-center">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                    <div className="mb-5">
                        <hr className="bg-primary mb-5 h-0.5 border-none"></hr>
                        <div className="grid justify-items-center sm:justify-items-start">
                            <img className="h-16 sm:justify-center md:justify-start mb-10" src={PlatinoMotorsWhite} alt="Platino Motors Logo" />
                        </div>
                        <div className="flex flex-nowrap align-middle gap-3 mb-2">
                            <div className="mt-2"><img className="h-3" src={EmailWhiteIcon} alt="email icon" /></div>
                            <div>
                                <p className="font-pop">
                                    havila@platino.hn
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap align-middle gap-3 mb-2">
                            <div className="mt-1"><img className="h-4" src={PhoneWhiteIcon} alt="phone icon" /></div>
                            <div>
                                <p className="font-pop">
                                    +504 3295-1859
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap align-middle gap-3 mb-2">
                            <div className="mt-1"><img className="h-4" src={FacebookWhiteIcon} alt="facebook icon" /></div>
                            <div>
                                <p className="font-pop">
                                    /platinomotors
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap align-middle gap-3 mb-2">
                            <div className="mt-1"><img className="h-4" src={InstagramWhiteIcon} alt="instagram icon" /></div>
                            <div>
                                <p className="font-pop">
                                    @platinomotors
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap align-middle gap-3">
                            <div className="mt-1"><img className="h-4" src={MapsWhiteIcon} alt="maps icon" /></div>
                            <div>
                                <p className="font-pop">
                                    Autopista a La Lima, Bulevar del Este contiguo a Maderera Noriega. <br />San Pedro Sula, Cortes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 text-white">
                        <hr className="bg-primary mb-5 h-0.5 border-none"></hr>
                        <p className="mb-2 font-bold font-pop"><strong>Sobre Nosotros</strong></p>
                        <p className="text-sm text-justify font-light text-white mb-5 font-pop"> Distribuimos, vendemos y rentamos maquinaria de alta potencia y calidad para el mercado minero, portuario y de contruccion. Además ofrecemos el servicio de mantenimiento preventivo y correctivo de nuestras maquinarias, asi garantizamos la satisfaccion y rentabilidad de nuestros clientes.</p>
                        <hr className="bg-primary mb-5 h-0.5 border-none"></hr>
                        <p className="bold mb-2 font-bold font-pop"><strong>Empleos</strong></p>
                        <p className="text-sm font-light mb-2 font-pop">¿Quieres unirte a nuestro equipo de trabajo?</p>
                        <p className="text-sm font-light font-pop hover:opacity-80 flex items-center">
                            <a target="_blank" rel="noreferrer" href="https://www.grupoplatino.hn/#/Careers">Ver Plazas Vacantes </a>
                            <span>
                                <img className="h-3 ml-3" src={arrow_white} alt="" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl container mx-auto px-4 mb-4">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                    <div className="hidden sm:block">
                        <p className="text-center sm:text-start text-sm font-pop">© 2021 Distribuidora Platino S.A. Todos los derechos reservados.</p>
                    </div>
                    <div className="mb-5 sm:mb-0 grid grid-cols-1 sm:grid-cols-2">
                        <div className="mx-auto">
                            <img className="h-10 mb-5" src={PlatinoHnWhite} alt="Platino Hn" />
                        </div>
                        <div className="sm:hidden mb-5">
                            <p className="text-center sm:text-start text-sm font-pop">© 2021 Distribuidora Platino S.A. Todos los derechos reservados.</p>
                        </div>
                        <div className="mx-auto">
                            <img className="h-10" src={GrupoPlatinoAllWhite} alt="Grupo Platino" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-5 lg:px-0 py-6">
                    <Slider {...settings}>
                        {companies.map(function (item, index) {
                            return (
                                <div key={index} className="text-center px-4">
                                    <img src={item.logo} alt={item.name} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
