import React from "react"
import { CalculatorWhiteIcon, RightArrowBread, RightArrowBreadOrange, SeeIcon, ShareIcon } from "../../assets";
function HeaderProduct(props) {
    return (
        <div className="container mx-auto pt-14 bg-white">
            <div className="flex flex-wrap justify-start pl-5 items-center">
                <p className="pr-2 text-blackPearl-900 font-pop text-sm">Tienda</p>
                <img className="h-3 pr-2" src={RightArrowBread} alt="icono flecha derecha" />
                <p className="pr-2 text-blackPearl-900 font-pop text-sm">{props.product.category}</p>
                <img className="h-3 pr-2" src={RightArrowBread} alt="icono flecha derecha" />
                <p className="pr-2 text-blackPearl-900 font-pop text-sm">{props.product.subCategory}</p>
                <img className="h-3 pr-2" src={RightArrowBreadOrange} alt="icono flecha derecha" />
                <p className="pr-2 text-primary font-pop text-sm">{props.product.name}</p>
            </div>
            <div className="flex py-2 md:py-0">
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:items-center">
                <div className="sm:order-last flex justify-center md:justify-end">
                    <img className="h-56 sm:h-60 md:h-80" src={props.product.img} alt={props.product.name} />
                </div>
                <div className="py-2 md:grow">
                    <div className="px-5 flex">
                        <p className={"mr-1 font-pop text-md " + (props.product.status === "Disponible" ? "text-success" : "text-primary")}>{props.product.status}</p>
                        <p className="font-pop text-md"> {props.product.status === "Disponible" ? "para entrega inmediata" : props.product.status === "Por encargo" ? " por encargo" : ""}</p>
                    </div>
                    <div className="pt-5 px-5">
                        <p className="font-pop text-xl font-semibold mb-0 text-blackPearl">{props.product.name}</p>
                        <p className="font-pop text-md font-base mt-0 text-blackPearl">{props.product.subCategory}</p>
                    </div>
                    <div className="flex justify-start mx-5 flex-wrap mt-5">
                        <div>
                            <button type="button" className="text-background bg-otherLight-50 rounded-3xl pr-6 pl-6 pb-2 pt-2  focus:ring-2 
                                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <img className="h-5" src={ShareIcon} alt="Compartir" />
                            </button>
                        </div>
                        <div className="ml-2 grow md:grow-0">
                            <button type="button" className="text-black font-pop bg-otherLight-50 w-full rounded-3xl pr-6 pl-6 pb-2 pt-2 focus:ring-4 
                                     focus:outline-none focus:ring-blue-300 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <div className="flex justify-center">
                                    <img className="h-5 mr-2" src={SeeIcon} alt="Ver mas" />
                                    <p>Tour Virtual</p>
                                </div>
                            </button>
                        </div>
                        <div className="ml-2  grow sm:grow-0 ">
                            <button type="button" className="text-white font-pop bg-primary w-full rounded-3xl pr-6 pl-6 focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 border-none font-medium text-sm px-5 py-4 sm:py-2 text-center mr-2 mb-2">
                                <div className="flex justify-center">
                                    <img className="h-5 md:h-4 mr-2" src={CalculatorWhiteIcon} alt="Cotizar" />
                                    <p>Cotizar</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderProduct;