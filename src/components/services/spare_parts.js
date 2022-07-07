import { SparePartsImg } from "../../assets";

function SpareParts() {
    return (
        <div className="bg-otherLight-50 mb-2 md:mb-10">
            <div className="container mx-auto px-2 md:px-0">
                <div className="flex flex-wrap justify-center rounded-md md:justify-between">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-0 mx-2 md:mx-0 bg-white rounded-xl drop-shadow-md">
                        <div>
                            <div className="mx-2 md:mx-0">
                                <img src={SparePartsImg} className="object-cover w-max mt-2 md:mt-0 md:mx-0 rounded-l-xl rounded-r-xl md:rounded-r-none" style={{ width: "100%", height: "45vh" }} alt="repuestos SANY Honduras" />
                            </div>
                        </div>
                        <div>
                            <p className="text-realBlack text-3xl font-bold mb-3 pt-2 ml-2 md:ml-5 md:pt-5 text-center md:text-left">Repuestos</p>
                            <p className="font-pop mx-2 md:mx-0 text-justify md:mr-24 mb-5 ml-2 md:ml-5 sm:mb-5">Los repuestos originales se SANY garantizan el maximo rendimiento de su maquinaria. Todas las piezas han sido desarrolladas especialmente para asegurar la compatibilidad con su equipo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpareParts;