import { PostSale } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

function ReferenceImgRight() {
    const [t] = useTranslation('common');
    return (
        <div className="container mx-auto py-5 sm:px-2 md:px-5 xl:px-10">
            <div className="flex justify-center md:justify-between px-2">
                <div className="grid grid-cols-1 md:items-center xl:items-center md:grid-cols-2 gap-2 md:gap-1 md:my-5">
                    <div>
                        <div className="grid grid-cols-1 px-2 md:px-0 justify-center mb-5 mt-0 md:mt-16 lg:mt-0 lg:mb-0 md:justify-start">
                            <p className="text-primary text-xs font-bold text-center md:text-left mb-2">{t("home.reference_img_right.title")}</p>
                            <p className="text-3xl font-bold mb-3 text-center md:text-left">{t("home.reference_img_right.sub_title")}</p>
                            <p className="font-pop mb-5 lg:mr-7 sm:text-center md:text-start">{t("home.reference_img_right.description")}</p>
                            <div className="flex justify-center md:justify-start">
                                <button className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("home.reference_img_right.button")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-0 md:ml-5 flex justify-center md:justify-start 2xl:justify-end px-2 sm:px-0">
                        <LazyLoadImage effect="blur" alt="Mantenimiento SANY" className="rounded-[15px] object-cover w-max 2xl:h-96" src={PostSale} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferenceImgRight;