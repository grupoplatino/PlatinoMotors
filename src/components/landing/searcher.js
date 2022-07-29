import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

const brands = [
    {
        id: 1,
        name: "SANY"
    },
    {
        id: 2,
        name: "Jhon Deere"
    },
    {
        id: 3,
        name: "Caterpilar"
    }
];
const targets = [
    {
        id: 1,
        name: "Compra"
    },
    {
        id: 2,
        name: "Renta"
    }
];
const categories = [
    {
        id: 1,
        name: "Excavadoras",
    },
    {
        id: 2,
        name: "Cargadoras",
    },
    {
        id: 3,
        name: "Volquetas",
    },
    {
        id: 4,
        name: "Motoniveladoras",
    },
    {
        id: 5,
        name: "Vibrocompactador",
    },
    {
        id: 6,
        name: "Hormigon",
    },
    {
        id: 7,
        name: "Grúas",
    },
    {
        id: 8,
        name: "Pilotaje",
    },
    {
        id: 9,
        name: "Portuaria",
    },
    {
        id: 10,
        name: "Minera",
    },
    {
        id: 11,
        name: "Bomberos",
    }
];
const products = [
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY11 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 1,
        category: "Excavadora",
        subCategoryId: 1,
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-16/68f19ca0a089c2b4d8149a4283e52f42.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "No Disponible",
        brand: "SANY",
        name: "SY12 C EU-US",
        cucharon: '0.04m',
        motorPower: "112,2/2200kW/rpm",
        categoryId: 1,
        category: "Excavadora",
        subCategoryId: 1,
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-16/68f19ca0a089c2b4d8149a4283e52f42.jpg",
        motor: "Yanmar 14TNV8",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Por Encargo",
        brand: "SANY",
        name: "SY13 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 1,
        category: "Excavadora",
        subCategoryId: 1,
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-16/68f19ca0a089c2b4d8149a4283e52f42.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 2,
        category: "Volqueta",
        subCategoryId: 2,
        subCategory: "Excavadora Mediana",
        img: "https://img.directindustry.es/images_di/photo-m2/52887-16186553.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 2,
        category: "Volqueta",
        subCategoryId: 2,
        subCategory: "Excavadora Mediana",
        img: "https://img.directindustry.es/images_di/photo-m2/52887-16186553.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 2,
        category: "Volqueta",
        subCategoryId: 2,
        subCategory: "Excavadora Mediana",
        img: "https://img.directindustry.es/images_di/photo-m2/52887-16186553.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 3,
        category: "Mixer",
        subCategoryId: 3,
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/1a576ff33686891e211a9dc50ff7039a.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 3,
        category: "Mixer",
        subCategoryId: 3,
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/1a576ff33686891e211a9dc50ff7039a.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
    {
        id: 1,
        status: "Disponible",
        brand: "SANY",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        categoryId: 3,
        category: "Mixer",
        subCategoryId: 3,
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/1a576ff33686891e211a9dc50ff7039a.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "https://sanyglobal-img.sany.com.cn/product/picture_album/20210225/SY215C-101555.pdf",
        qualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Motor",
                value: "XB-4588"
            },
            {
                title: "Tamaño",
                value: "15Tons"
            },
            {
                title: "Color",
                value: "Negro"
            },
            {
                title: "Garantia",
                value: "4 años"
            },
            {
                title: "Fabricante",
                value: "SANY"
            },
            {
                title: "Caja de cambios",
                value: "Manual"
            },
            {
                title: "Llantas",
                value: "Antibalas"
            },
            {
                title: "Cabina",
                value: "Acondicionada"
            },
            {
                title: "Montura",
                value: "Cuero"
            },
        ]
    },
];

function Searcher() {
    const [t] = useTranslation('common');
    const [selectedBrand, setSelectedBrand] = useState(brands[0]);
    const [selectedTarget, setSelectedTarget] = useState(targets[0]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [query, setQuery] = useState("");
    const filteredBrand =
        query === ""
            ? brands
            : brands.filter((brand) => {
                return brand.name.toLowerCase().includes(query.toLowerCase());
            });
    const filteredTarget =
        query === ""
            ? targets
            : targets.filter((target) => {
                return target.name.toLowerCase().includes(query.toLowerCase());
            });
    const filteredCategory =
        query === ""
            ? categories
            : categories.filter((category) => {
                return category.name.toLowerCase().includes(query.toLowerCase());
            });
    const filteredProducts =
        query === ""
            ? products
            : products.filter((product) => {
                return product.name.toLowerCase().includes(query.toLowerCase());
            }
            );

    return (
        <div className="bg-black relative">
            <div className="h-iso-gray">
                <div className="container mx-auto sm:py-16 md:py-8 lg:py-20 lg:w-9/12">
                    <div className="flex flex-wrap">
                        <div className="flex px-5 pt-5 pb-5 w-full">
                            <div className="flex justify-center sm:justify-start w-full">
                                <div className="grid grid-cols-1">
                                    <p className="text-primary font-pop font-semibold text-sm">{t("home.searcher.title")}</p>
                                    <p className="text-white font-pop text-3xl font-bold my-3">{t("home.searcher.sub_title")}</p>
                                    <p className="text-white font-pop text-xsa">{t("home.searcher.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="pb-10 sm:p-0 md:pb-0 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 justify-center items-center flex-wrap md:px-5 sm:pt-2 sm:pb-5">
                            <div className="mx-4 px-0 py-2 mb-1 relative md:col-span-2">
                                <Combobox value={selectedBrand} onChange={setSelectedBrand}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-b border-primary font-pop py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none text-white bg-transparent "
                                                displayValue={(brand) => brand.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FFFFFF">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery("")}
                                        >
                                            <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full font-pop overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredBrand.length === 0 && query !== "" ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nada encontrado.
                                                    </div>
                                                ) : (
                                                    filteredBrand.map((brand) => (
                                                        <Combobox.Option
                                                            key={brand.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? " text-white bg-pirmaryScarlet-300" : "text-gray-900"
                                                                }`
                                                            }
                                                            value={brand}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                            }`}
                                                                    >
                                                                        {brand.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-success"
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <div className="mx-4 px-0 py-2 mb-1 md:col-span-3">
                                <Combobox value={selectedTarget} onChange={setSelectedTarget}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-b border-primary font-pop py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none text-white bg-transparent "
                                                displayValue={(target) => target.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FFFFFF">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery("")}
                                        >
                                            <Combobox.Options className="absolute z-30 mt-1 max-h-60 w-full font-pop overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredTarget.length === 0 && query !== "" ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nada encontrado.
                                                    </div>
                                                ) : (
                                                    filteredTarget.map((target) => (
                                                        <Combobox.Option
                                                            key={target.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? " text-white bg-pirmaryScarlet-300" : "text-gray-900"
                                                                }`
                                                            }
                                                            value={target}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                            }`}
                                                                    >
                                                                        {target.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-success"
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <div className="mx-4 px-0 py-2 mb-1 md:col-span-3 lg:col-span-3">
                                <Combobox value={selectedCategory} onChange={setSelectedCategory}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-b border-primary font-pop py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none text-white bg-transparent "
                                                displayValue={(category) => category.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FFFFFF">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery("")}
                                        >
                                            <Combobox.Options className="absolute z-30 mt-1 max-h-60 w-full font-pop overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredCategory.length === 0 && query !== "" ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nada encontrado.
                                                    </div>
                                                ) : (
                                                    filteredCategory.map((category) => (
                                                        <Combobox.Option
                                                            key={category.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? " text-white bg-pirmaryScarlet-300" : "text-gray-900"
                                                                }`
                                                            }
                                                            value={category}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                            }`}
                                                                    >
                                                                        {category.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-success"
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <div className="mx-4 px-0 py-2 mb-2 md:col-span-3">
                                <Combobox value={selectedProduct} onChange={setSelectedProduct}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-b border-primary font-pop py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none text-white bg-transparent "
                                                displayValue={(product) => product.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FFFFFF">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery("")}
                                        >
                                            <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full font-pop overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredProducts.length === 0 && query !== "" ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nada encontrado.
                                                    </div>
                                                ) : (
                                                    filteredProducts.map((product) => (
                                                        <Combobox.Option
                                                            key={product.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? " text-white bg-pirmaryScarlet-300" : "text-gray-900"
                                                                }`
                                                            }
                                                            value={product}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                            }`}
                                                                    >
                                                                        {product.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-success"
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <div className="mx-4 sm:col-span-2 md:col-span-12 lg:col-span-1 text-center md:mx-0 sm:mt-4">
                                <button className="rounded-full w-full text-white bg-gradient-to-r from-startGradiant to-endGradiant hover:bg-gradient-to-br
                                focus:outline-none border-none font-medium text-sm text-center px-4 py-2 lg:py-3 sm:px-10 md:px-12 lg:px-3 sm:w-fit">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <p className="text-white ml-2 lg:hidden font-pop">Buscar</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Searcher;