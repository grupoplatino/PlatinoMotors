import React, { useState, Fragment, useEffect } from 'react';
import { Dialog, Switch, Disclosure, Transition } from '@headlessui/react';
import { UpArrowOrangeIcon, DownArrowBlackIcon } from '../../assets';

function CompareSpecs(props) {
    const vsProduct = [];
    vsProduct.push(props.product);
    const [isOpen, setIsOpen] = useState(false);
    const [listed, setListed] = useState(false);
    const [listProductToCompare, setListOroductToCompare] = useState([]);

    function closeModal() {
        setIsOpen(false)
    };
    function openModal() {
        setIsOpen(true)
    };
    const vsDetailsProduct = [];
    function compareProducts() {
        for (let i = 0; i < vsProduct.length; i++) {
           
            for (let e = 0; e < products.length; e++) {
                if (products[e].name === vsProduct[i].name) {
                    vsDetailsProduct.push(products[e]);
                    setListOroductToCompare(vsDetailsProduct);
                }
            }
        }
        console.log(vsDetailsProduct);
        setIsOpen(false);
    };

    function addProduct(product) {
        if (listed === true) {
            let newVsProduct = {
                name: product.name
            };
            vsProduct.push(newVsProduct);
        }
        else {
            let index = 0;
            for (let i = 0; i < vsProduct.length; i++) {
                if (vsProduct[i].name === product.name) {
                    index = i;
                }
            }
            vsProduct.slice(index, 1);
        }
        return setListed;
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
    }
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
        <div className='bg-white hidden md:block'>
            <div className='container mx-auto'>
                <div className='text-center font-pop pb-10 pt-20 text-3xl font-bold text-black'>
                    <span>Especificaciones y Comparativa</span>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <div className=' bg-background rounded-xl'>
                        <span className=''>Compare hasta 3 modelos distintos</span>
                    </div>
                    <div className=' bg-background font-pop text-xl font-bold pb-2 text-center rounded-xl'>
                        <img className=' mx-auto h-40 my-5 rounded-md' alt={props.product.name} src={props.product.img} />
                        <span>{props.product.name}</span>
                    </div>
                    <SwitchComponent productToCompare={listProductToCompare} product={props.product} action={{ openModal }} />
                    <div className=' bg-gray-100 rounded-xl'>
                        <button
                            onClick={openModal}
                            type="button"
                            className="relative block w-full h-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="mt-2 block text-sm font-medium text-gray-900">Añadir modelo</span>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 mt-2 gap-4'>
                    <div className='py-2 px-5 bg-background rounded-xl'>
                        {
                            props.product.dataSheet.map((item, index) => (
                                <div key={index} className="rounded my-1 border-b pb-2">
                                    <p className="font-pop font-bold text-black text-lg">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='py-2 px-5 bg-background  rounded-xl'>
                        {
                            props.product.dataSheet.map((item, index) => (
                                <div key={index} className="rounded my-1 border-b pb-2">
                                    <p className="font-pop  text-black text-lg">{item.value}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='py-2 px-5 bg-background rounded-xl'>
                        {
                            vsProduct.length === 1
                                ? <Fragment />
                                : products[0].dataSheet.map((item, index) => (
                                    <div key={index} className="rounded my-1 border-b pb-2">
                                        <p className="font-pop  text-black text-lg">{item.value}</p>
                                    </div>
                                ))
                        }
                    </div>
                    <div className='py-2 px-5 bg-background rounded-xl'>
                        {
                            vsProduct.length > 2
                                ? products[1].dataSheet.map((item, index) => (
                                    <div key={index} className="rounded my-1 border-b pb-2">
                                        <p className="font-pop  text-black text-lg">{item.value}</p>
                                    </div>
                                ))
                                : <Fragment />
                        }
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
                            <div className='bg-white flex'>

                            </div>
                            <div className="container mx-auto  items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white  p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg py-2 px-2 font-pop font-medium bg-background  shadow-sm flex items-center justify-between rounded-md leading-6 text-black">
                                            <div className='flex'>
                                                <div className='mr-2'>
                                                    <p>Escoge la maquinaria para la comparativa</p>
                                                </div>
                                                <ProductsHeader vsProducts={vsProduct} />
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
                                            <div className='grid grid-cols-10'>
                                                <div className='m-2 col-span-2 rounded-sm '>
                                                    {
                                                        filters.map((item, index) => (
                                                            <Disclosure key={index}>
                                                                {({ open }) => (
                                                                    <div key={index}>
                                                                        <Disclosure.Button className="flex w-full justify-between font-pop  bg-white border-b px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                                            <span>{item.title}</span>
                                                                            {
                                                                                open ? <img className='h-4 w-4' alt='arrow' src={UpArrowOrangeIcon} /> : <img alt='arrow' className='h-4 w-4' src={DownArrowBlackIcon} />
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
                                                                                            <div className='flex font-pop justify-between'>
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
                                                <div className='m-2 col-span-8 rounded-sm'>
                                                    <div className='grid gap-2 grid-cols-3'>
                                                        {
                                                            productsBySameCategory.map((item, key) => (
                                                                <div key={key} className='flex py-5 px-2 bg-background rounded-xl justify-items-center'>
                                                                    <CardProductToCompare product={item} listed={listed} addProduct={addProduct} />
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

function ProductsHeader(props) {
    const products = props.vsProducts;
    return (
        products.map((item, index) => (
            <div key={index} className='border-2 mx-2 rounded-md border-primary text-primary'>
                <p className='px-2'>{item.name}</p>
            </div>
        ))
    );
};

function CardProductToCompare(props) {
    return (
        <div className='grow'>
            <div className='flex justify-between'>
                <p className='font-pop text-black font-medium text-2xl'>{props.product.name} </p>
                <Switch
                    checked={props.listed}
                    onChange={props.addProduct(props.product)}
                    className={`${props.listed ? 'bg-primary' : ' bg-pirmaryScarlet-100'}
                                                                                            relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${props.listed ? 'translate-x-3' : 'translate-x-0'}
                                                                                             pointer-events-none inline-block h-4 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
            <div className='flex justify-center'>
                <img src={props.product.img} alt={props.product.name} className="h-48" />
            </div>
            <div className='flex flex-nowrap'>
                <div>
                    <p className='font-pop text-bermudaGray-500 text-sm pr-1'>Potencia: </p>
                </div>
                <div>
                    <p className='font-pop text-fiord text-sm'>{props.product.motorPower} </p>
                </div>
            </div>
            <div className='flex flex-nowrap'>
                <div>
                    <p className='font-pop text-bermudaGray-500 text-sm pr-1'>Peso: </p>
                </div>
                <div>
                    <p className='font-pop text-fiord text-sm'>{props.product.weight} </p>
                </div>
            </div>
            <div className='flex flex-nowrap'>
                <div>
                    <p className='font-pop text-bermudaGray-500 text-sm pr-1'>Cucharon: </p>
                </div>
                <div>
                    <p className='font-pop text-fiord text-sm'>{props.product.cucharon} </p>
                </div>
            </div>
            <div className='flex flex-nowrap'>
                <div>
                    <p className='font-pop text-bermudaGray-500 text-sm pr-1'>Motor: </p>
                </div>
                <div>
                    <p className='font-pop text-fiord text-sm'>{props.product.motor} </p>
                </div>
            </div>
            <div className='flex pt-2 flex-nowrap'>
                <div>
                    <p className={(props.product.status === "Disponible" ? 'text-success' : props.product.status === "Por Encargo" ? 'text-black' : 'text-primary') + ' font-pop text-sm pr-1 font-semibold'}>{props.product.status} </p>
                </div>
                <div>
                    <p className='font-pop text-fiord text-sm'>{props.product.status === "Disponible" ? "Entrega inmediata" : props.product.status === "Por Encargo" ? "Entrega en 2 semanas" : ""} </p>
                </div>
            </div>
        </div>
    );
}

function ReferenceImgProduct(props) {
    return (
        <div className=' bg-background font-pop text-xl font-bold pb-2 text-center rounded-xl relative'>
            <img className=' mx-auto h-40 my-5 rounded-md' alt={props.product.name} src={props.product.img} />
            <span>{props.product.name}</span>
            <button className='absolute top-2 right-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></button>
        </div>
    );
};

function AddProductButton(props) {
    return (
        <div className='bg-gray-100 content-center rounded-xl'>
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
        props.productToCompare.length === 0
            ? <AddProductButton action={props.action} />
            : <ReferenceImgProduct product={props.productToCompare[0]} />
    );
}



export default CompareSpecs;