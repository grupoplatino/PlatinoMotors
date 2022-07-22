import React, { useState, Fragment } from "react";
import { Dialog, Switch, Disclosure, Transition } from "@headlessui/react";
import { UpArrowOrangeIcon, DownArrowBlackIcon } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function CompareSpecs(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [listProductToCompare, setListProductToCompare] = useState([]);
    const [referenceVsProduct, setReferenceVsProduct] = useState([]);

    function closeModal() {
        setIsOpen(false)
    };
    function openModal() {
        setIsOpen(true)
    };
    function compareProducts() {
        let vsDetailsProduct = [];
        setListProductToCompare([]);
        for (let i = 0; i < referenceVsProduct.length; i++) {
            for (let e = 0; e < products.length; e++) {
                if (products[e].name === referenceVsProduct[i].name) {
                    vsDetailsProduct.push(products[e]);
                }
            }
        }
        setListProductToCompare(vsDetailsProduct);
        setIsOpen(false);
    };
    function addProduct(product) {
        let newVsProduct = {
            name: product.name
        };
        let temporalReferenceListProduct = referenceVsProduct;

        temporalReferenceListProduct.push(newVsProduct);
        setReferenceVsProduct(temporalReferenceListProduct);
    };
    function removeProduct(product) {
        //Removiendo de la lista de encabezados
        let temporalList = listProductToCompare.filter((item) => item !== product);
        setListProductToCompare(temporalList);
        //Removiendo de la lista de referencia
        let temporalReference = referenceVsProduct.filter((item) => item.name !== product.name);
        setReferenceVsProduct(temporalReference);
        //Removiendo lista de detalles
    };
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
                    value: "567"
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
            name: "SY14 C EU-US",
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
            name: "SY15 C EU-US",
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
                    value: "1234"
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
            name: "SY17 C EU-US",
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
            name: "SY18 C EU-US",
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
            name: "SY19 C EU-US",
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
    let productsBySameCategory = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].categoryId === props.product.categoryId) {
            productsBySameCategory.push(products[i]);
        }
    };
    let filters = [
        {
            title: "Marca",
            values: []
        },
        {
            title: "Motor",
            values: []
        },
        {
            title: "Potencia de motor",
            values: []
        },
        {
            title: "Disponibilidad",
            values: []
        }
    ];
    //Filtro temporal por mientras terminan el API
    for (let i = 0; i < productsBySameCategory.length; i++) {
        filters[0].values.push(products[i].brand);
        filters[1].values.push(products[i].motor);
        filters[2].values.push(products[i].motorPower);
        filters[3].values.push(products[i].status);
    };
    let dataBrands = new Set(filters[0].values);
    let dataMotors = new Set(filters[1].values);
    let dataMotorsPower = new Set(filters[2].values);
    let dataStatuses = new Set(filters[3].values);
    let brands = [...dataBrands];
    let motors = [...dataMotors];
    let motorsPower = [...dataMotorsPower];
    let statuses = [...dataStatuses];
    filters[0].values = brands;
    filters[1].values = motors;
    filters[2].values = motorsPower;
    filters[3].values = statuses;
    return (
        <div className="bg-white hidden md:block">
            <div className="container mx-auto mb-10 md:px-5 xl:px-10">
                <div className="text-center font-pop pb-10 pt-20 text-3xl font-bold text-black">
                    <span>Especificaciones y Comparativa</span>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-background rounded-xl h-full flex items-center px-4 justify-center text-lg font-semibold text-center">
                        <div>
                            <div className="p-2 bg-white w-fit mx-auto border-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                </svg>
                            </div>
                            <span>Compare hasta 3 modelos distintos</span>
                        </div>
                    </div>
                    <div className="bg-background font-pop text-xl font-bold pb-2 text-center rounded-xl">
                        <img className="mx-auto h-40 my-5 rounded-md" alt={props.product.name} src={props.product.img} />
                        <span>{props.product.name}</span>
                    </div>
                    <SwitchComponent productToCompare={listProductToCompare} product={props.product} action={{ openModal }} position={1} removeProduct={removeProduct} />
                    <SwitchComponent productToCompare={listProductToCompare} product={props.product} action={{ openModal }} position={2} removeProduct={removeProduct} />
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
                    <div className="py-2 px-5 bg-background rounded-xl">
                        {
                            props.product.dataSheet.map((item, index) => (
                                <div key={index} className="rounded my-1 border-b pb-2">
                                    <p className="font-pop font-semibold text-black text-lg">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="py-2 px-5 bg-background rounded-xl">
                        {
                            props.product.dataSheet.map((item, index) => (
                                <div key={index} className="rounded my-1 border-b pb-2">
                                    <p className="font-pop text-black text-lg">{item.value}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="py-2 px-5 bg-background rounded-xl">
                        <ProductSheet listProductToCompare={listProductToCompare} position={1} />
                    </div>
                    <div className="py-2 px-5 bg-background rounded-xl hidden lg:block">
                        <ProductSheet listProductToCompare={listProductToCompare} position={2} />
                    </div>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-30" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="bg-white flex">

                            </div>
                            <div className="container mx-auto items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg py-2 px-2 font-pop font-medium shadow-sm flex items-center justify-between rounded-md leading-6 text-black">
                                            <div className="flex">
                                                <div className="mr-2">
                                                    <p>Escoge la maquinaria para la comparativa</p>
                                                </div>
                                                {
                                                    referenceVsProduct.map((item, index) => (
                                                        <div key={index} className="border-2 mx-2 rounded-md border-primary text-primary">
                                                            <p className="px-2">{item.name}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-primary text-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={compareProducts}
                                                >
                                                    Comparar
                                                </button>
                                            </div>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className="grid grid-cols-3 xl:grid-cols-4">
                                                <div className="m-2 col-span-1 rounded-sm">
                                                    {
                                                        filters.map((item, index) => (
                                                            <Disclosure key={index}>
                                                                {({ open }) => (
                                                                    <div key={index}>
                                                                        <Disclosure.Button className="flex w-full justify-between font-pop  bg-white border-b px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                                            <span>{item.title}</span>
                                                                            {
                                                                                open ? <img className="h-4 w-4" alt="arrow" src={UpArrowOrangeIcon} /> : <img alt="arrow" className="h-4 w-4" src={DownArrowBlackIcon} />
                                                                            }
                                                                        </Disclosure.Button>
                                                                        <Transition
                                                                            enter="transition duration-100 ease-out"
                                                                            enterFrom="transform scale-95 opacity-0"
                                                                            enterTo="transform scale-100 opacity-100"
                                                                            leave="transition duration-75 ease-out"
                                                                            leaveFrom="transform scale-100 opacity-100"
                                                                            leaveTo="transform scale-95 opacity-0">
                                                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                                                {
                                                                                    item.values.map((item, index) => (
                                                                                        <div key={index}>
                                                                                            <div className="flex font-pop justify-between">
                                                                                                <div>
                                                                                                    <span>{item}</span>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <input
                                                                                                        type="checkbox"
                                                                                                        className="focus:ring-primary h-4 w-4 text-primary border-gray rounded"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </Disclosure.Panel>
                                                                        </Transition>
                                                                    </div>
                                                                )}
                                                            </Disclosure>
                                                        ))
                                                    }
                                                </div>
                                                <div className="m-2 col-span-2 xl:col-span-3 rounded-sm">
                                                    <div className="grid gap-2 grid-cols-1 ml-10 lg:mx-0 lg:grid-cols-3 2xl:gap-10">
                                                        {
                                                            productsBySameCategory.map((item, key) => (
                                                                <div key={key} className="flex py-5 px-2 rounded-xl justify-items-center bg-white shadow-md">
                                                                    <CardProductToCompare product={item} addProduct={addProduct} removeProduct={removeProduct} />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};
function ProductSheet(props) {
    return (
        props.listProductToCompare.length === 0
            ? <Fragment />
            : props.listProductToCompare.length > 0 && props.position === 1
                ? props.listProductToCompare[0].dataSheet.map((item, index) => (
                    <div key={index} className="rounded my-1 border-b pb-2">
                        <p className="font-pop  text-black text-lg">{item.value}</p>
                    </div>
                ))
                : props.listProductToCompare.length > 1 && props.position === 2
                    ? props.listProductToCompare[1].dataSheet.map((item, index) => (
                        <div key={index} className="rounded my-1 border-b pb-2">
                            <p className="font-pop  text-black text-lg">{item.value}</p>
                        </div>
                    ))
                    : <Fragment />
    );
}


function CardProductToCompare(props) {
    const [listed, setListed] = useState(false);
    function addProduct(product) {
        if (listed) {
            props.removeProduct(product);
            setListed(false);
        }
        else {
            props.addProduct(product);
            setListed(true);
        }
    }
    return (
        <div className="grow px-2">
            <div className="flex justify-between">
                <p className="font-pop text-black font-medium text-2xl">{props.product.name} </p>
                <Switch
                    checked={listed}
                    onChange={() => (addProduct(props.product))}
                    className={`${listed ? "bg-primary" : " bg-pirmaryScarlet-100"}
                     relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${listed ? "translate-x-3" : "translate-x-0"}
                        pointer-events-none inline-block h-4 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
            <div className="flex justify-center">
                <LazyLoadImage effect="blur" src={props.product.img} alt={props.product.name} className="h-48" />
            </div>
            <div className="flex flex-nowrap">
                <div>
                    <p className="font-pop text-bermudaGray-500 text-sm pr-1">Potencia: </p>
                </div>
                <div>
                    <p className="font-pop text-fiord text-sm">{props.product.motorPower} </p>
                </div>
            </div>
            <div className="flex flex-nowrap">
                <div>
                    <p className="font-pop text-bermudaGray-500 text-sm pr-1">Peso: </p>
                </div>
                <div>
                    <p className="font-pop text-fiord text-sm">{props.product.weight} </p>
                </div>
            </div>
            <div className="flex flex-nowrap">
                <div>
                    <p className="font-pop text-bermudaGray-500 text-sm pr-1">Cucharon: </p>
                </div>
                <div>
                    <p className="font-pop text-fiord text-sm">{props.product.cucharon} </p>
                </div>
            </div>
            <div className="flex flex-nowrap">
                <div>
                    <p className="font-pop text-bermudaGray-500 text-sm pr-1">Motor: </p>
                </div>
                <div>
                    <p className="font-pop text-fiord text-sm">{props.product.motor} </p>
                </div>
            </div>
            <div className="flex pt-2 flex-nowrap">
                <div>
                    <p className={(props.product.status === "Disponible" ? "text-success" : props.product.status === "Por Encargo" ? "text-black" : "text-primary") + " font-pop text-sm pr-1 font-semibold"}>{props.product.status} </p>
                </div>
                <div>
                    <p className="font-pop text-fiord text-sm">{props.product.status === "Disponible" ? "Entrega inmediata" : props.product.status === "Por Encargo" ? "Entrega en 2 semanas" : ""} </p>
                </div>
            </div>
        </div>
    );
}

function ReferenceImgProduct(props) {
    function removeProduct(product) {
        props.removeProduct(product);
    }
    return (
        <div className=" bg-background font-pop text-xl font-bold pb-2 text-center rounded-xl relative">
            <img className=" mx-auto h-40 my-5 rounded-md" alt={props.product.name} src={props.product.img} />
            <span>{props.product.name}</span>
            <button onClick={() => removeProduct(props.product)} className="absolute top-2 right-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    );
};

function AddProductButton(props) {
    return (
        <div className={`bg-gray-100 content-center ${props.hidden === true ? "hidden lg:block" : ""} rounded-xl`}>
            <button
                type="button"
                onClick={props.action.openModal}
                className="relative block w-full h-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <p className="flex items-center justify-around">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="block text-sm font-medium text-gray-900">Añadir modelo</span>
                </p>
            </button>
        </div>
    );
}
function SwitchComponent(props) {
    return (
        props.productToCompare.length === 0 && props.position === 1
            ? <AddProductButton action={props.action} />
            : props.productToCompare.length > 0 && props.position === 1
                ? <ReferenceImgProduct product={props.productToCompare[0]} removeProduct={props.removeProduct} />
                : props.productToCompare.length > 1 && props.position === 2
                    ? <ReferenceImgProduct product={props.productToCompare[1]} removeProduct={props.removeProduct} />
                    : <AddProductButton action={props.action} hidden={true} />
    );
}
export default CompareSpecs;