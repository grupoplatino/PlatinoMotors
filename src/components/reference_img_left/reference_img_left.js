import { LandingHero } from "../../assets/index"
function ReferneceImgLeft() {
    return (
        <div className="container mx-auto py-5 lg:px-4 xl:px-0">
            <div className="flex justify-center md:justify-between px-2 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 my-5">
                    <div className="mr-0 flex justify-center md:justify-start px-2 sm:px-0">
                        <img alt="Retroexcavadora SANY" className="rounded-[15px] object-cover w-max 2xl:h-96" src={LandingHero} />
                    </div>
                    <div>
                        <div className="grid grid-cols-1 justify-center mb-5 mt-8 md:justify-start">
                            <p className="text-primary text-xs font-bold text-center md:text-left mb-2">SOBRE NOSOTROS</p>
                            <p className="text-3xl font-bold mb-3 text-center md:text-left">Motores que Trabajan por los Mejores Resultados</p>
                            <p className="font-pop mx-2 md:mx-0 lg:mr-5">Nuestro equipo se caracteriza por su alta eficiencia, comodidad y economía. Somos distribuidores oficiales de grandes marcas productoras de maquinaria y equipo para contrucción. Dentro de nuestro catálogo podras encontrar motoniveladoras, excavadoras, y demás maquinaria industrial. Estamos listos para apoyarte en tus proyectos, ya sea para comprar o rentar maquinaria.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferneceImgLeft;