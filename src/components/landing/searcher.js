import React from "react";

function Searcher() {
    return (
        <div className="bg-black">
            <div className="h-iso-gray">
                <div className="container mx-auto sm:py-16 md:py-8 lg:py-20 lg:w-9/12">
                    <div className="flex flex-wrap">
                        <div className="flex px-5 pt-5 pb-5 w-full">
                            <div className="flex justify-center sm:justify-start w-full">
                                <div className="grid grid-cols-1">
                                    <p className="text-primary font-pop font-semibold text-sm">Buscador</p>
                                    <p className="text-white font-pop text-3xl font-bold my-3">Busca tu Maquinaria</p>
                                    <p className="text-white font-pop text-xsa">Maquinaria desarrollada para brindar el mayor rendimiento. Filtra y encuentra el equipo que necesitas para elevar la productivdad en tus proyectos de construcción.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="pb-10 sm:p-0 md:pb-0 lg:mx-20">
                        <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center flex-wrap md:px-5 sm:pt-2 sm:pb-5">
                            <div className="mx-4 px-0 py-2 mb-1 md:col-span-4">
                                <input type="text" className="bg-t border-b text-sm text-white focus:outline-none focus:border-primary block w-full pl-2 p-2.5" placeholder="Compra y/o Renta"></input>
                            </div>
                            <div className="mx-4 px-0 py-2 mb-1 md:col-span-4 lg:col-span-3">
                                <input type="text" className="bg-t border-b text-sm text-white focus:outline-none focus:border-primary block w-full pl-2 p-2.5" placeholder="Categoria"></input>
                            </div>
                            <div className="mx-4 px-0 py-2 mb-2 md:col-span-4">
                                <input type="text" className="bg-t border-b text-sm text-white focus:outline-none focus:border-primary block w-full pl-2 p-2.5" placeholder="Modelo" />
                            </div>
                            <div className="mx-4 mt-4 md:mt-6 md:col-span-12 lg:col-span-1 text-center md:mx-0">
                                <button className="rounded-full w-full text-white bg-gradient-to-r from-startGradiant to-endGradiant hover:bg-gradient-to-br
                                focus:outline-none border-none font-medium text-sm text-center px-4 py-3 md:px-12 lg:px-3 md:w-fit">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <p className="text-white ml-2 lg:hidden font-pop">Buscar</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Searcher;