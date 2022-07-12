import {PlatinoHnPanel } from "../../assets";

function LoginRequest() {
    return (
        <div className="container bg-background mx-auto mb-10">
            <div className="border rounded-xl p-5">
                <div className="grid grid-cols-1 py-5 gap-10 justify-between md:grid-cols-2">
                    <div>
                        <div className="py-2">
                            <p className="font-pop text-2xl font-bold text-black">Inicia Sesión con tu Platino ID</p>
                        </div>
                        <p className="font-pop text-xl font-semibold py-5">Solicita tu Financiamiento desde tu Platino ID</p>
                        <p className="font-pop text-gray-800 text-md">Para contar con todos los beneficios y ofertas especiales debes contar con tu cuenta Platino ID. Podras solicitar un financiamiento para maquinaria, llevar al dia tus estados de cuenta, recibir descuentos especiales y mucho mas. </p>
                        <div className="flex justify-start mt-10">
                            <div>
                                <button type="button" className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Registrarme</button>
                            </div>
                            <div>
                                <button type="button" className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Iniciar Sesión</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10">
                        <img className="shadow-lg object-cover rounded-xl" src={PlatinoHnPanel} alt="Platino HN" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRequest;