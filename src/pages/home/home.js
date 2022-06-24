import {  React } from "react";
import Navbar from "../../components/nav-bar";
import Foother from "../../components/foother";
import mainLogo from'../../assets/sany-logo-white.png';



function Home() {
    return (
        <>
       <Navbar/>
        <div className="relative bg-white    overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Compra y Renta</span>{' '}
                                <span className="block text-indigo-600 xl:inline">de Maquinaria</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Distribuidor exclusivo de
                            </p>
                            <div className="sm:flex sm:justify-center lg:justify-start">
                            <img className="h-9 sm:h-7 xl:h-9 sm:flex sm:justify-center lg:justify-start" alt="SANY" src={mainLogo}/>
                            </div>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md">
                                    <a
                                        href="/shop"
                                        className="text-background bg-gradient-to-r rounded-3xl pr-9 pl-9 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        Cotizar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
            </div>
        </div>
        <Foother/>
        </>
    );
}

export default Home;