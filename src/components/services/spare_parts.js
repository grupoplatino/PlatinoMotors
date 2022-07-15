import { SparePartsImg } from "../../assets";

function SpareParts() {
    return (
        <div className="bg-otherLight-50">
            <div className="container mx-auto lg:px-4 xl:px-0">
                <div className="rounded-md py-10 px-2">
                    <div className="grid grid-cols-1 items-center bg-white md:grid-cols-2 gap-0 mx-2 md:mx-0 rounded-xl drop-shadow-md">
                        <div>
                            <img src={SparePartsImg} className="object-cover w-full md:rounded-l-xl h-96" alt="repuestos SANY Honduras" />
                        </div>
                        <div className="mx-4 md:mx-5 mt-3 xl:mx-10">
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