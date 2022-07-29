import { DownArrowOrange, RightArrowBlack } from "../../assets/index"
import { useTranslation } from "react-i18next";

function StepsToFinancing() {
    const [t] = useTranslation('common');
    let steps = t('financing.body.steps_to_financing.items', { returnObjects: true })
    return (
        <div className="bg-white py-5 md:py-10">
            <div className="container mx-auto px-4 md:px-5 xl:px-10">
                <div className="my-5">
                    <div>
                        <p className="font-pop font-bold text-black text-xl md:text-2xl">{t("financing.body.steps_to_financing.title")}</p>
                    </div>
                </div>
                <div className="flex my-2 justify-center">
                    <div className="grid grow grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2">
                        {steps.map(function (item, index) {
                            return (
                                <div key={index} className="rounded-xl border relative border-lightPlaceHolder bg-white py-4 md:py-10 my-1 px-4">
                                    <div className="flex justify-start mb-2">
                                        <p className="text-primary mr-2 font-pop font-semibold">{index + 1}.</p>
                                        <p className="font-pop text-black">{item.title}</p>
                                    </div>
                                    {
                                        index + 1 !== steps.length ?
                                            <>
                                                <div className="flex">
                                                    <p className="font-pop leading-4 font-light">{item.description}</p>
                                                    <div className="absolute invisible sm:visible -right-3 lg:top-14">
                                                        <div className="pt-3 sm:pt-1 flex justify-center">
                                                            <img src={RightArrowBlack} className="h-4 z-10 sm:h-6" alt="arrow icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center sm:hidden">
                                                    <div className="po absolute pt-3 flex justify-center">
                                                        <img src={DownArrowOrange} className="h-4 z-10" alt="arrow icon" />
                                                    </div>
                                                </div>
                                            </> : <p className="font-pop leading-4 font-light">{item.description}</p>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepsToFinancing;