import { PlatinoCapitalWhite } from "../../assets";

function FinancingHero() {
    return ( 
    <div className="financingHero">
        <div className="container mx-auto">
            <div className="flex justify-center md:justify-start mx-4 py-10 md:py-14">
                <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="text-white  font-pop md:leading-snug text-center md:text-left font-bold text-xl md:text-5xl mb-3">Financiamiento para Maquinaria</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="text-white font-pop text-base mb-5 text-center md:text-left">Compra maquinaria nueva, usada o adquiere refacciones, componentes mayores y servicios con nuestros diferentes financiamientos en cómodos plazos que se acoplan a tus requerimientos.</p>
                    </div>
                    <p className="text-white font-pop font-light mb-10 text-center md:text-left">*Aplican restricciones.</p>
                    <div className="flex justify-center md:justify-start">
                    <img className="h-10 md:h-14" src={PlatinoCapitalWhite} alt="Platino Capital Logo"/>
                    </div>
                </div>

            </div>

        </div>

    </div> );
}

export default FinancingHero;