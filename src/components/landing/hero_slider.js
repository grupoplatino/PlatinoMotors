import React, {useState} from 'react';
import { Crane, DumpTruck, Excavator, Fireguard, Loader, Mining, Mixer, MotorGrader, Pilotage, Port, VibroCompactor } from '../../assets';
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

function FilterProducts (categoryId) {
    const productsFilter = [];
    for (let i = 0; i < products.length; i++) 
    {
       if(products[i].categoryId === categoryId){
        productsFilter.push(products[i]);
       }
    }
    return productsFilter;
}

function HeroCategorySlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
    return (
        <div className='bg-background'>
            <div className='grid grid-cols-11 gap-0 bg-white '>
                {
                    categories.map((key,index)=>(
                        <div key={index} className="cursor-pointer"  onClick={() => handleSetIndex(index)}>
                            <div className='p-1 border border-gray-100'>
                                <div className='bg-gray-100 mx-4 my-2 p-1 rounded-md'>
                                    <img src={categories[index].img} alt={categories[index].name}/>
                                </div>
                                <div>
                                    <p className='font-pop text-center text-fiord-900 text-xs'>{categories[index].name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='container mx-auto'>
                <div className='flex bg-success'>
                    <div className='grid grid-cols-1 grow sm:grid-cols-4'>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}



export default HeroCategorySlider;