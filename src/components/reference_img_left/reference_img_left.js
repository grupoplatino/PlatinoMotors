import { LandingHero } from "../../assets/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

function ReferneceImgLeft() {
    const [t] = useTranslation('common');
    return (
        <div className="container mx-auto py-5 sm:px-2 md:px-5 xl:px-10">
            <div className="flex justify-center md:justify-between px-2 md:px-0">
                <div className="grid grid-cols-1 md:items-center xl:items-center md:grid-cols-2 gap-2 md:gap-5 my-5">
                    <div className="mr-0 flex justify-center md:justify-start px-2 sm:px-0">
                        <LazyLoadImage effect="blur" alt="Retroexcavadora SANY" className="rounded-[15px] object-cover w-max 2xl:h-96" src={LandingHero} />
                    </div>
                    <div>
                        <div className="grid grid-cols-1 justify-center mb-5 mt-8 lg:mt-0 lg:mb-0 md:justify-start">
                            <p className="text-primary text-xs font-bold text-center md:text-left mb-2">{t("home.refernece_img_left.title")}</p>
                            <p className="text-3xl font-bold mb-3 text-center md:text-left">{t("home.refernece_img_left.sub_title")}</p>
                            <p className="font-pop mx-2 md:mx-0 lg:mr-5 sm:text-center md:text-start">{t("home.refernece_img_left.description")}</p>
                            <p className="font-pop mx-2 md:mx-0 lg:mr-5 hidden sm:block md:hidden xl:block xl:mt-2 sm:text-center md:text-start">{t("home.refernece_img_left.another_description")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferneceImgLeft;