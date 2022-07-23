import { SparePartsImg } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function SpareParts() {
    return (
        <div className="bg-otherLight-50">
            <div className="container mx-auto px-2 sm:px-4 lg:px-5 xl:px-10">
                <div className="rounded-md py-10">
                    <div className="grid grid-cols-1 items-center bg-white md:grid-cols-2 lg:grid-cols-2 gap-0 mx-2 md:mx-0 rounded-xl drop-shadow-md">
                        <div className="grid grid-cols-1 lg:col-span-1">
                            <LazyLoadImage effect="blur" src={SparePartsImg} className="object-cover w-full md:rounded-l-xl max-h-96" alt="repuestos SANY Honduras" />
                        </div>
                        <div className="mx-4 md:mx-5 mt-3 xl:mx-10 lg:col-span-1">
                            <p className="text-3xl xl:text-4xl font-bold mb-5">Repuestos</p>
                            <p className="font-pop mb-5">Los repuestos originales se SANY garantizan el maximo rendimiento de su maquinaria. Todas las piezas han sido desarrolladas especialmente para asegurar la compatibilidad con su equipo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpareParts;