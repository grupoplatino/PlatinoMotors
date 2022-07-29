import React from "react";
import { RightArrowBreadOrange } from "../../assets";
import { useTranslation } from "react-i18next";

function HeroCategory(props) {
    const [t] = useTranslation('common');
    let cantProducts = 0;
    for (let i = 0; i < props.products.length; i++) {
        if(props.products[i].categoryId === props.category.id){
            cantProducts++;
        }
    }
    return (
    <div className="bg-b bg-white">
        <div className="container mx-auto sm:px-4 md:px-5 xl:px-10">
                <div className="flex pt-24 justify-between flex-wrap">
                    <div className="flex pt-2 items-center">
                        <p className="pr-2 text-blackPearl-900 font-pop text-sm">{t("shop.hero.option_one")}</p>
                        <img className="h-3 pr-2" src={RightArrowBreadOrange} alt="icono flecha derecha" />
                        <p className="pr-2 text-primary font-pop text-sm">{props.category.name}</p>
                    </div>
                    <div className="flex pt-2">
                        <p className="font-pop text-gray-700 text-sm">{t("shop.hero.filter.count", {index: `${cantProducts}`})}</p>
                    </div>
                </div>
                <div className="flex py-4 items-center flex-wrap justify-between">
                    <div>
                        <p className="font-pop mb-1 font-semibold text-3xl text-blackPearl-800"> {props.category.name}</p>
                    </div>
                    <div className="flex flex-nowrap content-end">
                        <div>
                            <button className="rounded bg-black border border-black py-1 font-pop text-sm px-2 mx-1 text-white">{t("shop.hero.filter.one")}</button>
                        </div>
                        <div>
                            <button className="rounded bg-otherLight border border-gray py-1 font-pop text-sm px-2 mx-1 text-gray-700">{t("shop.hero.filter.two")}</button>
                        </div>
                        <div>
                            <button className="rounded bg-otherLight border border-gray py-1 font-pop text-sm px-2 mx-1 text-gray-700">{t("shop.hero.filter.three")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default HeroCategory;