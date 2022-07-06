import React from 'react';
import { UpdateWhiteIcon } from '../../assets';
import ProductCard from './product_card';

function ProductCollection(props) {
    let products = [];
    let filters = {
        brands: [],
        motors: [],
    };
    for (let i = 0; i < props.products.length; i++) {
        if(props.products[i].categoryId===props.category.id)
        {
            products.push(props.products[i]);
        }
    }

    for (let i = 0; i < products.length; i++) {
      
        
    }
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
                            <div className="mt-1 bg-white flex py-2 rounded-md">
                                <div>
                                </div>
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