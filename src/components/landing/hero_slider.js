import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
    Crane,
    DumpTruck,
    Excavator,
    Fireguard,
    Loader,
    Mining,
    Mixer,
    MotorGrader,
    Pilotage,
    Port,
    RightArrowBreadOrange,
    VibroCompactor } from "../../assets";

const categories = [
    {
        id: 1,
        name: "Excavadoras",
        img: Excavator
    },
    {
        id: 2,
        name: "Cargadoras",
        img: Loader
    },
    {
        id: 3,
        name: "Volquetas",
        img: DumpTruck
    },
    {
        id: 4,
        name: "Motoniveladoras",
        img: MotorGrader
    },
    {
        id: 5,
        name: "Vibrocompactador",
        img: VibroCompactor
    },
    {
        id: 6,
        name: "Hormigón",
        img: Mixer
    },
    {
        id: 7,
        name: "Grúas",
        img: Crane
    },
    {
        id: 8,
        name: "Pilotaje",
        img: Pilotage
    },
    {
        id: 9,
        name: "Portuaria",
        img: Port
    },
    {
        id: 10,
        name: "Minera",
        img: Mining
    },
    {
        id: 11,
        name: "Bomberos",
        img: Fireguard
    }
]
const products = [
    {
        name: "SY16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cucharon",
        interestFact: "0,04m3",
        motor: "Yanmar 3TNV70",
        categoryId: 1,
        img: "https://image.made-in-china.com/155f0j00tJsTjyMRnlgW/SANY-SY215C-Excavator-20Ton-Price-of-Long-Boom-Excavator.jpg"
    },
    {
        name: "SY16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cucharon",
        interestFact: "0,04m3",
        motor: "Yanmar 3TNV70",
        categoryId: 1,
        img: "https://image.made-in-china.com/155f0j00tJsTjyMRnlgW/SANY-SY215C-Excavator-20Ton-Price-of-Long-Boom-Excavator.jpg"
    },
    {
        name: "SY16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cucharon",
        interestFact: "0,04m3",
        motor: "Yanmar 3TNV70",
        categoryId: 1,
        img: "https://image.made-in-china.com/155f0j00tJsTjyMRnlgW/SANY-SY215C-Excavator-20Ton-Price-of-Long-Boom-Excavator.jpg"
    },
    {
        name: "SY16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cucharon",
        interestFact: "0,04m3",
        motor: "Yanmar 3TNV70",
        categoryId: 1,
        img: "https://image.made-in-china.com/155f0j00tJsTjyMRnlgW/SANY-SY215C-Excavator-20Ton-Price-of-Long-Boom-Excavator.jpg"
    },
    {
        name: "CT16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cuchara",
        interestFact: "0,14m3",
        motor: "Yanmar 3TNV70",
        categoryId: 2,
        img: "https://sc04.alicdn.com/kf/H5c15142a839048ad8f7c09a2e77676bf7.jpg"
    },
    {
        name: "CT16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cuchara",
        interestFact: "0,14m3",
        motor: "Yanmar 3TNV70",
        categoryId: 2,
        img: "https://sc04.alicdn.com/kf/H5c15142a839048ad8f7c09a2e77676bf7.jpg"
    },
    {
        name: "CT16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cuchara",
        interestFact: "0,14m3",
        motor: "Yanmar 3TNV70",
        categoryId: 2,
        img: "https://sc04.alicdn.com/kf/H5c15142a839048ad8f7c09a2e77676bf7.jpg"
    },
    {
        name: "CT16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cuchara",
        interestFact: "0,14m3",
        motor: "Yanmar 3TNV70",
        categoryId: 2,
        img: "https://sc04.alicdn.com/kf/H5c15142a839048ad8f7c09a2e77676bf7.jpg"
    },
    {
        name: "VQ16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cajon",
        interestFact: "13m3",
        motor: "Yanmar 3TNV70",
        categoryId: 3,
        img: "https://img.directindustry.es/images_di/photo-g/52887-16186650.webp"
    },
    {
        name: "VQ16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cajon",
        interestFact: "13m3",
        motor: "Yanmar 3TNV70",
        categoryId: 3,
        img: "https://img.directindustry.es/images_di/photo-g/52887-16186650.webp"
    },
    {
        name: "VQ16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cajon",
        interestFact: "13m3",
        motor: "Yanmar 3TNV70",
        categoryId: 3,
        img: "https://img.directindustry.es/images_di/photo-g/52887-16186650.webp"
    },
    {
        name: "VQ16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Cajon",
        interestFact: "13m3",
        motor: "Yanmar 3TNV70",
        categoryId: 3,
        img: "https://img.directindustry.es/images_di/photo-g/52887-16186650.webp"
    },
    {
        name: "MN16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Arpon",
        interestFact: "4mts",
        motor: "Yanmar 3TNV70",
        categoryId: 4,
        img: "https://img.directindustry.es/images_di/photo-mg/52887-16185490.jpg"
    },
    {
        name: "MN16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Arpon",
        interestFact: "4mts",
        motor: "Yanmar 3TNV70",
        categoryId: 4,
        img: "https://img.directindustry.es/images_di/photo-mg/52887-16185490.jpg"
    },
    {
        name: "MN16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Arpon",
        interestFact: "4mts",
        motor: "Yanmar 3TNV70",
        categoryId: 4,
        img: "https://img.directindustry.es/images_di/photo-mg/52887-16185490.jpg"
    },
    {
        name: "MN16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Arpon",
        interestFact: "4mts",
        motor: "Yanmar 3TNV70",
        categoryId: 4,
        img: "https://img.directindustry.es/images_di/photo-mg/52887-16185490.jpg"
    },
    {
        name: "VC16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Rodillo",
        interestFact: "3 Tons",
        motor: "Yanmar 3TNV70",
        categoryId: 5,
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/5f5427961a701ba7da444018c3701697.jpg"
    },
    {
        name: "VC16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Rodillo",
        interestFact: "3 Tons",
        motor: "Yanmar 3TNV70",
        categoryId: 5,
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/5f5427961a701ba7da444018c3701697.jpg"
    },
    {
        name: "VC16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Rodillo",
        interestFact: "3 Tons",
        motor: "Yanmar 3TNV70",
        categoryId: 5,
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/5f5427961a701ba7da444018c3701697.jpg"
    },
    {
        name: "VC16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Rodillo",
        interestFact: "3 Tons",
        motor: "Yanmar 3TNV70",
        categoryId: 5,
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-19/5f5427961a701ba7da444018c3701697.jpg"
    },
    {
        name: "MX16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tambor",
        interestFact: "13Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 6,
        img: "https://img.directindustry.com/images_di/photo-g/52887-16171168.webp"
    },
    {
        name: "MX16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tambor",
        interestFact: "13Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 6,
        img: "https://img.directindustry.com/images_di/photo-g/52887-16171168.webp"
    },
    {
        name: "MX16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tambor",
        interestFact: "13Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 6,
        img: "https://img.directindustry.com/images_di/photo-g/52887-16171168.webp"
    },
    {
        name: "MX16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tambor",
        interestFact: "13Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 6,
        img: "https://img.directindustry.com/images_di/photo-g/52887-16171168.webp"
    },
    {
        name: "GR16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "50 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 7,
        img: "https://www.lectura-specs.es/models/renamed/orig/gruas-telescopicas-montadas-sobre-camion-stc250-sany.jpg"
    },
    {
        name: "GR16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "50 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 7,
        img: "https://www.lectura-specs.es/models/renamed/orig/gruas-telescopicas-montadas-sobre-camion-stc250-sany.jpg"
    },
    {
        name: "GR16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "50 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 7,
        img: "https://www.lectura-specs.es/models/renamed/orig/gruas-telescopicas-montadas-sobre-camion-stc250-sany.jpg"
    },
    {
        name: "GR16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "50 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 7,
        img: "https://www.lectura-specs.es/models/renamed/orig/gruas-telescopicas-montadas-sobre-camion-stc250-sany.jpg"
    },
    {
        name: "PM16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 8,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/below%2040T%20Reach-172942.png"
    },
    {
        name: "PM16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 8,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/below%2040T%20Reach-172942.png"
    },
    {
        name: "PM16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 8,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/below%2040T%20Reach-172942.png"
    },
    {
        name: "PM16 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 8,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/below%2040T%20Reach-172942.png"
    },
    {
        name: "PJ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 9,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/Single%20Empty%20Co-173125.png"
    },
    {
        name: "PJ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 9,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/Single%20Empty%20Co-173125.png"
    },
    {
        name: "PJ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 9,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/Single%20Empty%20Co-173125.png"
    },
    {
        name: "PJ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Altura",
        interestFact: "10 Mts",
        motor: "Yanmar 3TNV70",
        categoryId: 9,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20200825/Single%20Empty%20Co-173125.png"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Caja",
        interestFact: "13mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 10,
        img: "https://www.sanyperu.com/storage/admin/2020/12/upload_1609036690syz318c-8r,,,2_2020_12_26_21_38_10.jpg"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Caja",
        interestFact: "13mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 10,
        img: "https://www.sanyperu.com/storage/admin/2020/12/upload_1609036690syz318c-8r,,,2_2020_12_26_21_38_10.jpg"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Caja",
        interestFact: "13mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 10,
        img: "https://www.sanyperu.com/storage/admin/2020/12/upload_1609036690syz318c-8r,,,2_2020_12_26_21_38_10.jpg"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Caja",
        interestFact: "13mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 10,
        img: "https://www.sanyperu.com/storage/admin/2020/12/upload_1609036690syz318c-8r,,,2_2020_12_26_21_38_10.jpg"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tanque",
        interestFact: "50mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 11,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20210111/Long%20Span%20Water-174124.png"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tanque",
        interestFact: "50mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 11,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20210111/Long%20Span%20Water-174124.png"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tanque",
        interestFact: "50mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 11,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20210111/Long%20Span%20Water-174124.png"
    },
    {
        name: "VQ10 C EU-US",
        powerMotor: "10,3/2200kW/rpm",
        weight: "1920kg",
        interesFactName: "Tanque",
        interestFact: "50mt3",
        motor: "Yanmar 3TNV70",
        categoryId: 11,
        img: "https://sanyglobal-img.sany.com.cn/product/goods/20210111/Long%20Span%20Water-174124.png"
    },



];

function HeroCategorySlider() {
    const [categoryId, setCategoryId]= useState(categories[0].id);
    const [allProducts] = useState(products);
    const [productCategory, setProductCategory] = useState(allProducts.filter(a => a.categoryId === categoryId));
    // const [activeIndex, setActiveIndex] = useState(1);
    // const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
    const handleSetIndex = (categoryId) => {
        setCategoryId(categoryId);
        let result = allProducts.filter(a => a.categoryId === categoryId);
        setProductCategory(result);
    }
    return (
        <div className="bg-background">
            <div className="flex overflow-x-auto sm:justify-start xl:justify-center bg-white none-scroll-custom">
                {
                    categories.map((item) => (
                        <div key={item.id} className="cursor-pointer py-2 lg:py-0" onClick={() => handleSetIndex(item.id)}>
                            <div className="p-1 border border-gray-100 w-32 sm:w-28 xl:w-auto">
                                <div className="bg-gray-100 mx-4 my-2 p-1 rounded-md">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div>
                                    <p className="font-pop text-center text-fiord-900 text-xs truncate">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="hidden xl:block container mx-auto mb-5">
                <div className="grid grid-cols-1 py-5 grow gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {
                        // eslint-disable-next-line
                        productCategory.map(function (item, index) {

                            return (
                                <div key={index}>
                                    <SpecialProduct product={item} />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="conatiner mx-auto text-center">
                    <button type="button" className="text-background bg-gradient-to-r rounded-3xl pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-20 py-2.5 text-center mr-2 mb-2">Ver todos</button>
                </div>
            </div>
            <div className="block xl:hidden container mx-auto mb-5 lg:px-4 xl:px-0">
                <div className="grid grid-cols-1 py-5 grow gap-4 sm:grid-cols-3">
                    {
                        // eslint-disable-next-line
                        productCategory.map(function (item, index) {
                            if (index < 3) {
                                return (
                                    <div key={index}>
                                        <SpecialProduct product={item} />
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                <div className="conatiner mx-auto text-center">
                    <button type="button" className="text-background bg-gradient-to-r rounded-3xl pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-20 py-2.5 text-center mr-2 mb-2">Ver todos</button>
                </div>
            </div>
        </div>
    );
}

function SpecialProduct(props) {
    return (
        <div className="flex mx-6 sm:mx-0 py-4 px-5 bg-white rounded-3xl shadow-sm hover:shadow-md justify-items-center">
            <div className="grow">
                <div>
                    <Link to="/shop/product"><p className="font-pop text-black font-medium text-2xl">{props.product.name}</p></Link>
                </div>
                <div className="flex items-center">
                    <div>
                        <Link to="/shop/product"><p className="font-pop text-primary font-medium text-xs">Ver Detalles </p></Link>
                    </div>
                    <div>
                        <img className="ml-1" src={RightArrowBreadOrange} alt="Flecha derecha" />
                    </div>
                </div>
                <div className="justify-center flex mb-2">
                    <img src={props.product.img} alt={props.product.name} className="h-40" />
                </div>
                <div className="flex flex-nowrap">
                    <div>
                        <p className="font-pop text-bermudaGray-500 text-sm pr-1">Potencia: </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.powerMotor} </p>
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
                        <p className="font-pop text-bermudaGray-500 text-sm pr-1">{props.product.interesFactName}: </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.interestFact} </p>
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
        </div>
    );
}

export default HeroCategorySlider;