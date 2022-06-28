function SpecialAtention() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center md:justify-between md:px-2">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 my-5'>
                    <div className='mx-2 md:mx-5  '>
                        <div className='grid grid-cols-1 justify-center mb-5 md:mt-16 mt-8 md:justify-start'>
                            <p className='text-realBlack text-3xl font-bold mb-3 text-center md:text-left'>Atención Especializada</p>
                            <p className='font-pop text-justify mx-2 md:mr-24 mb-5 sm:mb-5'>Tu maquinaria esta cubierta con el apoyo que esperas que la mantenga trabajando, sin importar hasta dónde te lleve tu trabajo.</p>
                            <p className='font-pop text-justify mx-2 md:mr-24 mb-5 sm:mb-5'>Respaldado por una garantia lider en la industria, y por un servicio local en el que puedes depositar tu confianza, siempre estaras seguro en tu decisión de optar por SANY.</p>
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

export default SpecialAtention;