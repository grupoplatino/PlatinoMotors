import React from 'react';
import { HeroCategory, ProductCollection} from '../../../components';
function Category() {
    const products =[
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
            brand:"SANY",
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
    const categories = [
        {
            id:1,
            name:"Excavadora"
        },
        {
            id:2,
            name:"Volqueta"
        },
        {
            id:3,
            name:"Mixer"
        }
    ];

    return (
        <>
           <HeroCategory category={categories[0]} products={products}/>
           <ProductCollection category={categories[0]} products={products} />
        </>
    );
}

export default Category;