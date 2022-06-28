import React from "react";


function Searcher() {
    return (
        <div className="bg-black">
            <div className='container mx-auto'>
                <div className="flex flex-wrap">
                    <div className="flex  px-5 pt-5 pb-5 sm:px-32 sm:pt-20 sm:pb-5 w-full ">
                        <div className="flex justify-center sm:justify-start w-full">
                            <div className="grid grid-cols-1">
                                <p className="text-primary font-pop font-semibold text-xs">Buscador</p>
                                <p className="text-white font-pop text-3xl font-bold">Busca tu Maquinaria</p>
                                <p className="text-white font-pop text-xsa">Maquinaria desarrollada para brindar el mayor rendimiento. Filtra y encuentra el equipo que necesitas para elevar la productivdad en tus proyectos de construcción.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="pb-10 sm:pb-32">
                    <div className="sm:flex justify-center flex-wrap md:flex-nowrap md:px-32 sm:pt-2 sm:pb-5">
                        <div className="mx-4  grow px-0 py-2 flex justify-between mb-1 sm:mb-0">
                            <input type='text' className="bg-black border-b text-sm  text-white  block w-full pl-2 p-2.5 " placeholder="Compra y/o Renta"></input>
                        </div>
                        <div className="mx-4  grow px-0 py-2 flex  justify-between mb-1 sm:mb-0">
                            <input type='text' className="bg-black caret-secondaryDeepCove-100 border-b text-sm  text-white  focus:border-otherLight block w-full pl-2 p-2.5 " placeholder="Categoria"></input>
                        </div>
                        <div className="mx-4  grow px-0 py-2 flex justify-between mb-2 sm:mb-0">
                            <input type='text' variant="standard" className="bg-black text-sm border-b text-white block w-full pl-2 p-2.5 " placeholder="Modelo"/>
                        </div>
                        <div className="mx-0 px-0 py-2 flex justify-center sm:justify-between mb-2 sm:mb-0">
                            <button className="rounded-full sm:ml-3  text-background bg-gradient-to-r p-8 sm:p-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <div className="flex justify-between">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <p className="text-white ml-2 sm:hidden font-pop">Buscar</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Searcher;