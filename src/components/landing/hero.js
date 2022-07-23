import { React } from "react";
import { SanyWhiteLogo } from "../../assets/index";
import BgSany from "../../assets/images/hero_background.png"
import sanyLogo from "../../assets/images/sany_red.png"
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="pt-14">
            <section className="bg-hero h-100 sm:h-120 w-full bg-cover bg-center py hidden lg:block">
                <div className="flex justify-center sm:justify-start">
                    <div className="px-2 sm:px-10 py-36 mx-20">
                        <p className="text-white text-center sm:text-left text-5xl font-bold font-pop mb-3">Compra y Renta </p>
                        <p className="text-white text-center sm:text-left text-5xl font-bold font-pop mb-5">de Maquinaria</p>
                        <p className="text-white text-center sm:text-left font-pop text-lg font-semibold mb-2">Distribuidor exclusivo de</p>
                        <div className="justify-center flex sm:justify-start">
                            <img className="h-10 mb-8" alt="Sany Logo" src={SanyWhiteLogo} />
                        </div>
                        <div className="flex justify-center sm:justify-start">
                            <Link to="/shop/category" className="text-background bg-gradient-to-r rounded-3xl px-10 py-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm text-center mr-2 mb-2 font-pop">Cotizar</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:hidden container mx-auto">
                <div className="grid grid-cols-1 md:items-center sm:text-center md:grid-cols-2">
                    <div className="px-6 py-10">
                        <p className="text-3xl font-bold font-pop mb-3">Compra y Renta de Maquinaria</p>
                        <p className="font-pop text-lg font-semibold mb-2">Distribuidor exclusivo de</p>
                        <div className="pb-4 pt-1">
                            <img className="h-10 sm:mx-auto" alt="Sany Honduras" src={sanyLogo} />
                        </div>
                        <div className="mt-2 md:mt-0">
                        <Link to="/shop/category" className="text-background bg-gradient-to-r rounded-3xl px-12 py-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none border-none font-medium text-md text-center mr-2 mb-2 font-pop">Cotizar</Link>
                        </div>
                    </div>
                    <div className="sm:px-4 md:px-6 md:py-10 sm:pb-10">
                        <img className="sm:rounded-3xl md:rounded-3xl" src={BgSany} alt="Sany Honduras" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;