import { SpecialAtentionMachine } from "../../assets/index"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

function SpecialAtention() {
    const [t] = useTranslation('common');
    return (
        <div className="bg-otherLight-50">
            <div className="container mx-auto px-2 sm:px-4 lg:px-5 xl:px-10">
                <div className="py-5 rounded-sm">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 gap-2 bg-white mx-2 md:mx-0 rounded-xl drop-shadow-md">
                        <div className="mx-4 md:mx-5 xl:mx-10 mt-3 lg:col-span-1">
                            <p className="text-3xl font-bold mb-3 text-center xl:text-4xl md:text-left">{t("services.body.special_atention.title")}</p>
                            <p className="font-pop mb-5">{t("services.body.special_atention.description")}</p>
                            <p className="font-pop mb-5">{t("services.body.special_atention.another_description")}</p>
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