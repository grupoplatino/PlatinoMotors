import { SpecialAtentionMachine } from '../../assets/index'
function SpecialAtention() {
    return (
        <div className='bg-other bg-otherLight-50'>
            <div className="container mx-auto">
                <div className="flex justify-center md:justify-between px-2 md:px-0 rounded-sm">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-white md:gap-20 my-5 mx-2 md:mx-0 rounded-xl drop-shadow-md'>
                        <div className='mx-2 md:mx-5  '>
                            <div className='grid grid-cols-1 justify-center mb-5 md:mt-16 mt-8 md:justify-start'>
                                <p className='text-realBlack text-3xl font-bold mb-3 text-center md:text-left'>Atención Especializada</p>
                                <p className='font-pop text-justify mx-2 md:mr-24 mb-5 sm:mb-5'>Tu maquinaria esta cubierta con el apoyo que esperas que la mantenga trabajando, sin importar hasta dónde te lleve tu trabajo.</p>
                                <p className='font-pop text-justify mx-2 md:mr-24 mb-5 sm:mb-5'>Respaldado por una garantia lider en la industria, y por un servicio local en el que puedes depositar tu confianza, siempre estaras seguro en tu decisión de optar por SANY.</p>
                            </div>
                        </div>
                        <div className='ml-0 mx-2 md:mx-0 rounded-xl md:rounded-xl  flex justify-center   px-2 sm:px-0'>
                            <img alt='Mantenimiento SANY' className='object-cover w-max  rounded-r-xl rounded-l-xl md:rounded-l-none mb-2 md:mb-0' style={{ width: "100%", height: '45vh' }} src={SpecialAtentionMachine} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialAtention;