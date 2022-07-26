import { RadioGroup, Listbox, Transition } from '@headlessui/react';
import React, { useState, Fragment } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

function Body(props) {
    
    const variants = [
        {
            name: "Cucharon",
            values: [
                {
                    name: "0.04m",
                    img: "https://shop.miflota.com/wp-content/uploads/2021/03/cucharon2.png"

                },
                {
                    name: "0.03m",
                    img: "https://shop.miflota.com/wp-content/uploads/2021/03/cucharon1.png"
                },
            ]
        },
        {
            name: "Cabina",
            values: [
                {
                    name: "Acondicionada",
                    img: "https://sc02.alicdn.com/kf/H11451f1093404381a171813ab0a6ba74N/223063454/H11451f1093404381a171813ab0a6ba74N.jpg"
                },
                {
                    name: "Libre",
                    img: "https://sc02.alicdn.com/kf/H11451f1093404381a171813ab0a6ba74N/223063454/H11451f1093404381a171813ab0a6ba74N.jpg"
                },
            ]
        },
        {
            name: "Rodaje",
            values: [
                {
                    name: "Oruga Metalica",
                    img: "http://victoryepes.blogs.upv.es/files/2016/05/1.png"
                },
                {
                    name: "Oruga de Caucho",
                    img: "http://victoryepes.blogs.upv.es/files/2016/05/011.png"
                },
                {
                    name: "Llantas",
                    img: "https://vrm.mx/seo/wp-content/uploads/2021/01/4.Bobcat.png"
                }
            ]
        }

    ];
    const operations = [
        {
            id: 1,
            name: "Comprar",
            avalible: true,
        },
        {
            id: 2,
            name: "Rentar",
            avalible: false,
        },
    ];
    const [selected, setSelected] = useState(operations[0]);
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='bg-background'>
            <div className='container mx-auto pb-5 pt-20 md:pt-20'>
                <div className='grid md:gap-5 font-pop xl:gap-10 gap-2 grid-cols-1 md:grid-cols-3 mx-2 md:mx-0'>
                    <div className='py-2 relative md:py-5 px-5 bg-white md:col-span-2 rounded-xl'>
                        <div className='grid gap-2 md:grid-cols-2 grid-cols-1'>
                            <div className='order-2 md:order-1'>
                                <p className='text-3xl font-semibold text-black'>{props.product.name}</p>
                                <div className='mt-5'>
                                    <div className='flex'>
                                        <p className='text-gray-600'>Potencia de Motor</p>
                                        <p className='text-black ml-2'>{props.product.motorPower}</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-gray-600'>Peso</p>
                                        <p className='text-black ml-2'>{props.product.weight}</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-gray-600'>Cucharon</p>
                                        <p className='text-black ml-2'>{props.product.cucharon}</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-gray-600'>Motor</p>
                                        <p className='text-black ml-2'>{props.product.motor}</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-success'>{props.product.status}</p>
                                        <p className='text-gray-600 ml-2'>{props.product.status === 'Disponible' ? 'para entrega inmediata' : 'Por encargo'}</p>
                                    </div>
                                    <div>
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="block text-sm font-pop font-medium text-black">Actividad</Listbox.Label>
                                                    <div className="mt-1 relative">
                                                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                            <div className="flex items-center">
                                                                <span
                                                                    aria-label={selected.online ? 'Online' : 'Offline'}
                                                                    className={classNames(
                                                                        selected.online ? 'bg-green-400' : 'bg-gray-200',
                                                                        'flex-shrink-0 inline-block h-2 w-2 rounded-full'
                                                                    )}
                                                                />
                                                                <span className="ml-3 block truncate">{selected.name}</span>
                                                            </div>
                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                {operations.map((operation) => (
                                                                    <Listbox.Option
                                                                        key={operation.name}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                            )
                                                                        }
                                                                        value={operation}
                                                                    >
                                                                        {({ selected, active }) => (
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <span
                                                                                        className={classNames(
                                                                                            operation.avalible ? 'bg-green-400' : 'bg-gray-200',
                                                                                            'flex-shrink-0 inline-block h-2 w-2 rounded-full'
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    <span
                                                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                    >
                                                                                        {operation.name}
                                                                                        <span className="sr-only"> is {operation.avalible ? 'online' : 'offline'}</span>
                                                                                    </span>
                                                                                </div>

                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active ? 'text-white' : 'text-indigo-600',
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>
                                    </div>
                                </div>
                            </div>
                            <div className='ord order-1 md:order-2 mx-auto'>
                                <img className='h-56' alt={props.product.name} src={props.product.img} />
                            </div>
                        </div>
                        <div className=' mt-5 container rounded-lg  py-10 bg-background left-0'>
                        </div>
                        <div className=' mt-5 container rounded-lg  py-10 bg-background left-0'>
                        </div>
                    </div>
                    <div className='py-5 px-5 bg-white rounded-xl'>
                        <div>
                            <p className='font-semibold'>Personaliza tu {props.product.category}</p>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className='font-pop'>
                            {
                                variants.map((variant, index) => (
                                    <VariantOptions key={index} variant={variant} />
                                ))
                            }
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
function VariantOptions(props) {
    const [variant, setVariant] = useState("");
    return (
        <div>
            <p className='font-semibold py-1'>{props.variant.name}</p>
            <RadioGroup value={variant} onChange={setVariant}>
                {
                    props.variant.values.map((value, index) => (
                        <div className='my-1'>
                            <RadioGroup.Option key={index} value={value} className={({ active, checked }) =>
                                `${active
                                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 '
                                    : ''
                                }
                            ${checked ? 'bg-gray-50 bg-opacity-75 text-black border-blue border' : 'bg-white border'
                                }
                              relative  cursor-pointer rounded-lg shadow-sm focus:outline-none`
                            }>
                                <div className='py-2  ml-2'>
                                    <p className='font-pop'>{value.name}</p>
                                </div>

                            </RadioGroup.Option>
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    );
}



export default Body;