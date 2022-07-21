import { MaintenanceMen, ConfidenceCheckIcon, ToolsIcon } from "../../assets/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Maintenance() {
    const faq = [
        {
            icon: <img className="h-6" src={ConfidenceCheckIcon} alt="check icon" />,
            title: "Mantenimiento Preventivo",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            icon: <img className="h-6" src={ToolsIcon} alt="check icon" />,
            title: "Mantenimiento Correctivo",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]
    return (
        <div className="bg-otherLight-50">
            <div className="container mx-auto lg:px-4 xl:px-0">
                <div className="px-2 md:px-0">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-2 py-5">
                        <div className="px-2 sm:mb-5">
                            <LazyLoadImage effect="blur" alt="Retroexcavadora SANY" className="rounded-[15px] mx-auto w-full h-80 lg:h-auto object-cover" src={MaintenanceMen} />
                        </div>
                        <div className="mx-2 xl:mx-6">
                            <div className="grid grid-cols-1">
                                <p className="text-realBlack mt-4 sm:mt-0 text-3xl xl:text-4xl font-bold mb-3">Servicio de Mantenimiento</p>
                                <p className="font-pop sm:mb-2">Brindamos todo el mantenimiento que tu maquinaria necesita para mantenerse operando en su mejor estado. Nos aseguramos de alargar al máximo la vida útil de tus equipos para hacer que tu inversion sea altamente rentable    </p>
                            </div>
                            <div className="mb-0 md:mb-6 col-span-12 md:col-span-6">
                                <div className="tabs">
                                    {faq.map(function (item, index) {
                                        return (
                                            <div key={
                                                index
                                            } className="border-none rounded-md tab mt-3">
                                                <div className=" bg-white relative">
                                                    <input className="w-full absolute z-10 cursor-pointer opacity-0 h-10 top-2" type="checkbox" id="chck1" />
                                                    <header className="flex justify-between items-center align-middle py-2 px-5  cursor-pointer select-none tab-label" >
                                                        <div className="flex pt-2 align-middle">
                                                            {item.icon}
                                                            <span className="text-lg ml-3">
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                        <div className="rounded-full border-grey w-7 h-7 flex items-center justify-center test">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="none" strokeLinejoin="none" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="none" strokeLinejoin="none" d="M20 12H4" />
                                                            </svg>
                                                        </div>
                                                    </header>
                                                    <div className="tab-content">
                                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                                            <p>
                                                                {item.message}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-5 mt-3">
                                <p className="text-center py-2 font-pop text-black font-semibold text-lg">Agenda el mantenimeinto de tu maquinaria con nosotros</p>
                                <div>
                                    <div>
                                        <p className="font-pop font-base text-center">Contacta con un agente y planifica tu próximo mantenimiento. No esperes a que tu equipo de problemas para ir al mecanico.</p>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                value="submit"
                                                className="text-background text-center bg-gradient-to-r mt-5 rounded-3xl from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-6 py-2.5"
                                            >
                                                Agendar Mantenimiento
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maintenance;