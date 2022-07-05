import React from "react";
import { DownloadBlackIcon } from "../../assets";

const products = [
    { name: "SY-AAAA-1234", id: 1 },
    { name: "SY-BBBB-1234", id: 1 },
    { name: "SY-AABA-1234", id: 1 },
    { name: "SY-ACCD-1234", id: 1 },
    { name: "SY-EEED-1234", id: 1 },
]
const productsCategories = [
    { name: "Volquetas", id: 1 },
    { name: "Retroexcavadora", id: 1 },
    { name: "Moto Niveladora", id: 1 },
    { name: "SY-ACCD-1234", id: 1 },
    { name: "SY-EEED-1234", id: 1 },
]
const openInNewTab = url => {
    window.open(url, "_blank", "noopener,noreferrer");
};

function TabsProduct(props) {

    return (
        <div className="bg-otherLight-50">
            <div className="container mx-auto">
                <div className="flex mx-5">
                    <Qualities qualities={props.product.qualities} />
                </div>
                <div className="flex mx-5">
                    <div className="grow">
                        <DataSheet data={props.product} />
                    </div>
                </div>
                <div className="flex mx-5">
                    <div className="grow">
                        <QuotePetition product={props.product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
function Qualities(props) {
    return (
        <div>
            <div className="flex py-5 justify-center">
                <p className="font-pop text-2xl font-semibold">Características</p>
            </div>
            <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-6">
                <div className="tabs">
                    {props.qualities.map(function (item, index) {
                        return (
                            <div key={
                                index
                            } className="border-none rounded-md tab mt-3">
                                <div className=" bg-white relative">
                                    <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                    <header className="flex justify-between items-center align-middle py-2 px-5  cursor-pointer select-none tab-label" >
                                        <div className="flex  pt-2 align-middle">
                                            <span className="text-lg ml-3">
                                                {item.title}
                                            </span>
                                        </div>
                                        <div className="rounded-full  border-grey w-7 h-7 flex items-center justify-center test">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="none" strokeLinejoin="none" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="none" strokeLinejoin="none" d="M20 12H4" />
                                            </svg>
                                        </div>
                                    </header>
                                    <div className="tab-content">
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
function DataSheet(props) {
    let sheetdata = props.data.dataSheet;
    let quantityData = sheetdata.length;
    let leftSheet = [], rightSheet = [];
    let half = (quantityData / 2);
    console.log(props.data.manualAttachment);
    if (quantityData % 2 === 0) {
        let counter = 0;
        for (let i = 0; i < half; i++) {
            leftSheet[i] = sheetdata[i];
        }
        for (let i = half; i < sheetdata.length; i++) {
            rightSheet[counter] = sheetdata[i];
            counter++;
        }
    }
    else {
        let i = 0;
        let counter = 0;
        for (i; i < half; i++) {
            leftSheet[i] = sheetdata[i];
        }
        for (i; i < sheetdata.length; i++) {
            rightSheet[counter] = sheetdata[i];
            counter++;
        }
    }
    return (
        <div>
            <div className="flex py-5 justify-center">
                <p className="font-pop text-2xl font-semibold">Ficha Técnica</p>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="grid grid-cols-2">
                    <div>
                        {
                            leftSheet.map(function (item, index) {
                                return (
                                    <div key={index} className="bg-white rounded-sm py-2 pl-2 my-1">
                                        <p className="font-pop font-semibold text-sm">{item.title}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div>
                        {
                            leftSheet.map(function (item, index) {
                                return (
                                    <div key={index} className="bg-white rounded-sm py-2 pl-2 my-1">
                                        <p className="font-pop text-sm">{item.value}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        {
                            rightSheet.map(function (item, index) {
                                return (
                                    <div key={index} className="bg-white rounded-sm py-2 pl-2 my-1">
                                        <p className="font-pop font-semibold text-sm">{item.title}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div>
                        {
                            rightSheet.map(function (item, index) {
                                return (
                                    <div key={index} className="bg-white rounded-sm py-2 pl-2 my-1">
                                        <p className="font-pop text-sm">{item.value}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-5">
                <div className="ml-2 grow sm:grow-0 ">
                    <button type="button" onClick={() => openInNewTab(props.data.manualAttachment)} className="text-black font-pop bg-white w-full rounded-3xl pr-6 pl-6 focus:ring-4 
                                    focus:outline-none focus:ring-blue-300  border border-black font-medium text-sm px-5 py-4 sm:py-2 text-center mr-2 mb-2">
                        <div className="flex justify-center">
                            <img className="h-5 md:h-4 mr-2" src={DownloadBlackIcon} alt="Cotizar" />
                            <p>Descargar Brochure</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
function QuotePetition(props) {
    return (<div>
        <form>
            <div className="flex justify-center">
                <p className="font-pop text-2xl font-semibold">Cotización</p>
            </div>
            <div className="flex justify-center py-5">
                <div className="grid  grow px-2 md:px-48 grid-cols-1 md:grid-cols-2">
                    <div className="flex  mb-0 mx-2">
                        <select name="products" className="font-pop py-2 border-b bg-otherLight-50 grow border-non active:border-primary checked:border-primary px-2">
                            {
                                productsCategories.map(function (item, index) {
                                    return (
                                        <option value={item.id} key={index}>{item.name}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div className="flex  mb-0 mx-2">
                        <select name="products" className="font-pop py-2 border-b bg-otherLight-50 grow border-non active:border-primary checked:border-primary px-2">
                            {
                                products.map(function (item, index) {
                                    return (
                                        <option value={item.id} key={index}>{item.name}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex px-2 md:px-48 justify-center">
                <input type="text" className="border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="Nombres"></input>
            </div>
            <div className="flex px-2 md:px-48 justify-center">
                <input type="text" className="border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="Compañia"></input>
            </div>
            <div className="flex px-2 md:px-48 justify-center">
                <input type="text" className="border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="RTN"></input>
            </div>
            <div className="flex px-2 md:px-48 justify-center">
                <input type="text" className="border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="Numero"></input>
            </div>
            <div className="flex px-2 md:px-48 justify-center">
                <input type="text" className="border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop " placeholder="E-mail"></input>
            </div>
            <div>
            </div>
        </form>
    </div>
    );
}

export default TabsProduct;