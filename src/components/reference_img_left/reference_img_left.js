import {LandingHero} from '../../assets/index'
function ReferneceImgLeft() {
    return ( 
    
            <div className="container mx-auto">
                <div className="flex justify-center sm:justify-between my-">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 my-5'>
                    <div className='mr-0 sm:mr-5 flex justify-center sm:justify-start'>
                        <img alt='Retroexcavadora SANY' className='h-40 sm:h-80 rounded-[15px]' src={LandingHero}/>
                    </div>
                    <div className='mx-2 sm:mx-0 sm:ml-5'>
                        <div className='grid grid-cols-1 justify-center mb-5 mt-8 sm:justify-start'>
                            <p className='text-primary text-xs font-bold text-center sm:text-left'>SOBRE NOSOTROS</p>
                            <p className='text-realBlack text-3xl font-bold mb-3 text-center sm:text-left'>Motores que Trabajan por los Mejores Resultados</p>
                            <p className='font-pop text-justify mx-2 sm:mx-0'>Nuestro equipo se caracteriza por su alta eficiencia, comodidad y economía. Somos distribuidores oficiales de grandes marcas productoras de maquinaria y equipo para contrucción. Dentro de nuestro catálogo podras encontrar motoniveladoras, excavadoras, y demás maquinaria industrial. Estamos listos para apoyarte en tus proyectos, ya sea para comprar o rentar maquinaria.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
   
     );
}

export default ReferneceImgLeft;