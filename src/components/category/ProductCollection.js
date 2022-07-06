import React from 'react';
import { UpdateWhiteIcon } from '../../assets';
import ProductCard from './product_card';

function ProductCollection(props) {
    let products = [];

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

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].categoryId === props.category.id) {
            products.push(props.products[i]);
        }
    }
    for (let i = 0; i < products.length; i++) {

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
        <div className="bg-background">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="grid grow grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5 py-5 md:grid-cols-4">
                        <div className="bg-successmx-5 sm:mx-0 col-span-1">
                            <div className="flex items-center justify-between py-2 bg-black rounded-md">
                                <div className="pl-2">
                                    <p className="text-white">Filtrar Por</p>
                                </div>
                                <div className="flex items-center">
                                    <button>
                                        <div className='flex '>

                                            <div>
                                                <p className='text-white font-pop text-sm mr-1'>limpiar</p>
                                            </div>
                                            <div className="pr-2">
                                                <img alt='actualizar' className='h-4' src={UpdateWhiteIcon} />
                                            </div>
                                        </div>

                                    </button>
                                </div>
                            </div>
                            <div className="mt-1 bg-white py-2 rounded-md">
                                {
                                    filters.map((item,index)=>(
                                    <div key={index}>
                                        <div className='mx-2'>
                                            <p className='font-pop text-sm py-1 font-semibold '>{item.title}</p>
                                            <hr className='bg-primary h-0.5 border-none'></hr>
                                        </div>
                                        <div className='mx-2'>
                                        <ul>
                                            {
                                                item.values.map((filter, pk)=>(
                                                    <div key={pk}>
                                                        <li>
                                                            <div className='flex justify-between mr-2'>
                                                            <p className='font-pop text-gray-500'>{filter}</p>
                                                            <input type="checkbox" className=''></input>
                                                            </div>
                                                        </li>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                            </div>
                                    </div>))
                                }
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 grow mx-5 sm:mx-0">
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                                {
                                    products.map((item, index) => (
                                        <div key={index}>
                                            <ProductCard product={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCollection;