import { PlatinoCapitalWhite } from "../../assets";

function FinancingHero() {
    return (
        <div className="financingHero">
            <div className="container mx-auto">
                <div className="py-10 md:py-14 xl:w-3/5 lg:text-start px-4 md:px-5 xl:px-10">
                    <div className="text-center lg:text-start">
                        <div className="mt-28">
                            <p className="text-white font-pop md:leading-snug font-bold text-4xl sm:text-5xl mb-3">Financiamiento para Maquinaria</p>
                        </div>
                        <div>
                            <p className="text-white font-pop text-base mb-5">Compra maquinaria nueva, usada o adquiere refacciones, componentes mayores y servicios con nuestros diferentes financiamientos en cómodos plazos que se acoplan a tus requerimientos.</p>
                        </div>
                        <p className="text-white font-pop font-light mb-10">*Aplican restricciones.</p>
                        <div>
                            <img className="h-10 md:h-14 mx-auto xl:mx-0" src={PlatinoCapitalWhite} alt="Platino Capital Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinancingHero;