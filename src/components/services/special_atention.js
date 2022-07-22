import { SpecialAtentionMachine } from "../../assets/index"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function SpecialAtention() {
    return (
        <div className="bg-otherLight-50">
            <div className="container mx-auto px-2 sm:px-4 lg:px-5 xl:px-10">
                <div className="py-5 rounded-sm">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 gap-2 bg-white mx-2 md:mx-0 rounded-xl drop-shadow-md">
                        <div className="mx-4 md:mx-5 xl:mx-10 mt-3 lg:col-span-1">
                            <p className="text-3xl font-bold mb-3 text-center xl:text-4xl md:text-left">Atención Especializada</p>
                            <p className="font-pop mb-5">Tu maquinaria esta cubierta con el apoyo que esperas que la mantenga trabajando, sin importar hasta dónde te lleve tu trabajo.</p>
                            <p className="font-pop mb-5">Respaldado por una garantia lider en la industria, y por un servicio local en el que puedes depositar tu confianza, siempre estaras seguro en tu decisión de optar por SANY.</p>
                        </div>
                        <div className="grid grid-cols-1 md:justify-end lg:col-span-1">
                            <LazyLoadImage effect="blur" alt="Mantenimiento SANY" className="object-cover h-screen w-full md:rounded-r-xl max-h-96" src={SpecialAtentionMachine} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialAtention;