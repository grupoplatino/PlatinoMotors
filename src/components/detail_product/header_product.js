import React, { useState, Fragment } from "react"
import { CalculatorWhiteIcon, RightArrowBread, RightArrowBreadOrange, SeeIcon, ShareIcon } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import "react-lazy-load-image-component/src/effects/blur.css";
import { Transition } from "@headlessui/react";
function HeaderProduct(props) {
    const url = window.location.href;
    const [show, setShow] = useState(false);
    function showCopyToClipBoard() {
        setShow(true)
        setTimeout(()=>(setShow(false)),3000);
    }
    return (
        <div className="container mx-auto pt-24 bg-white px-4 md:px-5 xl:px-10">
            <div
                aria-live="assertive"
                className="fixed inset-0 flex items-end mt-14 z-40 px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#18AD19" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">Copiado exitosamente</p>
                                        <p className="mt-1 text-sm text-gray-500">¡Comparte el enlace con quien sea!</p>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={() => {
                                                setShow(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-center">
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
                    <LazyLoadImage effect="blur" className="h-56 sm:h-60 md:h-80" src={props.product.img} alt={props.product.name} />
                </div>
                <div className="py-2 md:grow">
                    <div className="flex">
                        <p className={"mr-1 font-pop text-md " + (props.product.status === "Disponible" ? "text-success" : "text-primary")}>{props.product.status}</p>
                        <p className="font-pop text-md"> {props.product.status === "Disponible" ? "para entrega inmediata" : props.product.status === "Por encargo" ? " por encargo" : ""}</p>
                    </div>
                    <div className="pt-5">
                        <p className="font-pop text-2xl font-semibold mb-0 text-blackPearl">{props.product.name}</p>
                        <p className="font-pop text-md font-base mt-0 text-blackPearl">{props.product.subCategory}</p>
                    </div>
                    <div className="flex flex-wrap mb-5 md:mb-0">
                        <div className="mt-5">
                            <CopyToClipboard text={url}>
                                <button data-tooltip-target="tooltip-default" onClick={showCopyToClipBoard} type="button" className="text-background bg-otherLight-50 rounded-3xl py-2 px-2 md:px-4 focus:ring-2 
                                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm text-center">
                                    <img className="h-5" src={ShareIcon} alt="Compartir" />
                                </button>
                            </CopyToClipboard>
                            <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                Tooltip content
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                        <div className="grow md:grow-0 mx-4 mt-5">

                            <button type="button" className="text-black font-pop bg-otherLight-50 w-full rounded-3xl py-2 px-2 md:px-4 focus:ring-4 
                                     focus:outline-none focus:ring-blue-300 border-none font-medium text-sm text-center">
                                <div className="flex justify-center">
                                    <img className="h-5 mr-2" src={SeeIcon} alt="Ver mas" />
                                    <p>Tour Virtual</p>
                                </div>
                            </button>

                        </div>
                        <div className="grow sm:grow-0 mt-5">
                            <button type="button" className="text-white font-pop bg-primary w-full rounded-3xl focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 border-none font-medium text-sm py-2 px-2 md:px-4 text-center">
                                <div className="flex justify-center items-center">
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