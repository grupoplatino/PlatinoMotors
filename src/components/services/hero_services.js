import { useTranslation } from "react-i18next";

function HeroServices() {
    const [t] = useTranslation('common');
    return (
        <div>
            <div className="services_and_parts">
                <div className="container mx-auto lg:px-5 xl:px-10">
                    <div className="text-center lg:text-start py-40">
                        <div className="text-white mt-10">
                            <p className="text-4xl sm:text-5xl font-pop font-bold mb-2 md:mb-3">{t("services.hero.title")}</p>
                            <p className="text-base font-pop font-semibold">{t("services.hero.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container my-10 mx-auto px-4 lg:px-5 xl:px-10">
                    <div className="bg-white">
                        <p className="font-pop text-black text-lg md:text-xl font-medium">{t("services.body.about")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroServices;