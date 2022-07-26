import { Error404 } from "../../assets";

function PageNotFound() {
    return (
        <div className="sm:pt-10 md:pt-20 xl:pt-10 2xl:pt-0 px-5 h-screen flex items-center justify-center">
            <div className="sm:w-4/5 md:w-3/4 lg:w-2/4 xl:w-1/3">
                <div className="text-center mb-16">
                    <p className="text-4xl font-semibold">Página no encontrada</p>
                    <p className="pt-4"><strong>¡Oooops!</strong> No pudimos encontrar la página que estabas buscando, por favor intentalo más tarde.</p>
                </div>
                <img src={Error404} alt="Excavadoras SPS" />
            </div>
        </div>
    );
}

export default PageNotFound;