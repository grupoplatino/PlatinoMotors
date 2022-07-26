import { Error500 } from "../../assets";

function InternalServer() {
    return (
        <div className="sm:pt-10 md:pt-20 xl:pt-10 2xl:pt-0 px-5 h-screen flex items-center justify-center">
            <div className="sm:w-4/5 md:w-3/4 lg:w-2/4 xl:w-1/3">
                <div className="text-center mb-16">
                    <p className="text-4xl font-semibold">Error 500</p>
                    <p className="pt-4"><strong>¡Oooops!</strong> Ocurrio un error interno en el servidor, por favor intanlo más tarde o reporta este problema.</p>
                </div>
                <img src={Error500} alt="Excavadoras SPS" />
            </div>
        </div>
    );
}

export default InternalServer;