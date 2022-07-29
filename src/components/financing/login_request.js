import {PlatinoHnPanel } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

function LoginRequest() {
    const [t] = useTranslation('common');
    return (
        <div className="container mx-auto mb-10 px-4 md:px-5 xl:px-10">
            <div className="border rounded-xl p-5 bg-background">
                <div className="grid grid-cols-1 py-5 gap-10 justify-between lg:grid-cols-2">
                    <div>
                        <div className="py-2">
                            <p className="font-pop text-2xl font-bold text-black">{t("financing.body.login_request.title", {id:'Platino ID'})}</p>
                        </div>
                        <p className="font-pop text-xl font-semibold py-5">{t("financing.body.login_request.sub_title", {id:'Platino ID'})}</p>
                        <p className="font-pop text-gray-800 text-md">{t("financing.body.login_request.description")}</p>
                        <div className="flex justify-start mt-10">
                            <div>
                                <button type="button" className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("financing.body.login_request.button_one")}</button>
                            </div>
                            <div>
                                <button type="button" className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("financing.body.login_request.button_two")}</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage effect="blur" className="shadow-lg object-cover rounded-xl" src={PlatinoHnPanel} alt="Platino HN" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRequest;