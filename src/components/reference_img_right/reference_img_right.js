import { PostSale } from "../../assets";
function ReferenceImgRight() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center md:justify-between md:px-2">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 my-5'>
                    <div className='mx-2 md:mx-5  '>
                        <div className='grid grid-cols-1 justify-center mb-5 md:mt-16 mt-8 md:justify-start'>
                            <p className='text-primary text-xs font-bold text-center md:text-left'>POST-VENTA</p>
                            <p className='text-realBlack text-3xl font-bold mb-3 text-center md:text-left'>Repuestos y Servicios</p>
                            <p className='font-pop text-justify mx-2 md:mr-24 mb-5 sm:mb-5'>¿Tienes consultas sobre nuestra maquinaria? ¿Necesitas un mantenimiento preventivo o correctivo de tus equipos? Permitenos despejar tus consultas.</p>
                            <div className="flex justify-center md:justify-start">
                                <button className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Más Información</button>
                            </div>
                        </div>
                    </div>
                    <div className='ml-0 md:ml-5 flex justify-center md:justify-start px-2 sm:px-0'>
                        <img alt='Mantenimiento SANY' className='rounded-[15px] object-cover w-max' src={PostSale} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferenceImgRight;