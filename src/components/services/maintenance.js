import { MaintenanceMen, ConfidenceCheckIcon, ToolsIcon} from "../../assets/index";


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
            <div className="container mx-auto ">
                <div className="flex justify-center  md:justify-between px-2 md:px-0">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-5'>
                        <div className='mr-0 flex justify-center md:justify-start px-2 sm:px-0'>
                            <img alt='Retroexcavadora SANY' className='rounded-[15px]' src={MaintenanceMen} />
                        </div>
                        <div className='mx-2 sm:mx-0 sm:ml-5'>
                            <div className='grid grid-cols-1 justify-center mb-5 mt-8 md:justify-start'>
                                <p className='text-realBlack text-3xl font-bold mb-3 text-center md:text-left'>Servicio de Mantenimiento</p>
                                <p className='font-pop text-justify mx-2 md:mx-0'>Brindamos todo el mantenimiento que tu maquinaria necesita para mantenerse operando en su mejor estado. Nos aseguramos de alargar al máximo la vida útil de tus equipos para hacer que tu inversion sea altamente rentable    </p>
                            </div>
                            <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-6">
                                <div className="tabs">
                                    {faq.map(function (item, index) {
                                        return (
                                            <div key={
                                                index
                                            } className="border-none rounded-md tab mt-3">
                                                <div className=" bg-white relative">
                                                    <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                                    <header className="flex justify-between items-center align-middle py-2 px-5  cursor-pointer select-none tab-label" >
                                                        <div className="flex  pt-2 align-middle">  
                                                         {item.icon}
                                                        <span className="text-lg ml-3">
                                                            {item.title}
                                                        </span>
                                                        </div>
                                                        <div className="rounded-full  border-grey w-7 h-7 flex items-center justify-center test">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Maintenance;