import {LandingHero} from '../../assets/index'
function ReferneceImgLeft() {
    return ( 
            <div className="container mx-auto">
                <div className="flex justify-center  md:justify-between px-2 md:px-0">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 my-5'>
                        <div className='mr-0 flex justify-center md:justify-start px-2 sm:px-0'>
                            <img alt='Retroexcavadora SANY' className='rounded-[15px] object-cover w-max' src={LandingHero}/>
                        </div>
                        <div className='mx-2 sm:mx-0 sm:ml-5'>
                            <div className='grid grid-cols-1 justify-center mb-5 mt-8 md:justify-start'>
                                <p className='text-primary text-xs font-bold text-center md:text-left'>SOBRE NOSOTROS</p>
                                <p className='text-realBlack text-3xl font-bold mb-3 text-center md:text-left'>Motores que Trabajan por los Mejores Resultados</p>
                                <p className='font-pop text-justify mx-2 md:mx-0'>Nuestro equipo se caracteriza por su alta eficiencia, comodidad y economía. Somos distribuidores oficiales de grandes marcas productoras de maquinaria y equipo para contrucción. Dentro de nuestro catálogo podras encontrar motoniveladoras, excavadoras, y demás maquinaria industrial. Estamos listos para apoyarte en tus proyectos, ya sea para comprar o rentar maquinaria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default ReferneceImgLeft;