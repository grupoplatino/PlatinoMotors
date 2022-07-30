import { RadioGroup, Listbox, Transition } from '@headlessui/react';
import React, { useState, Fragment } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useTranslation } from "react-i18next";

function Body(props) {
    const [t] = useTranslation('common');

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
                    <div className='py-2 relative md:py-10 px-10 bg-white md:col-span-2 rounded-xl'>
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
                                                    <Listbox.Label className="block text-sm font-pop font-medium text-black">{t("shop.product.quote.type")}</Listbox.Label>
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
                                                                        {({ select, active }) => (
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
                        <div className='container mt-5  width rounded-lg py-5 bg-background'>
                            <div className='flex justify-between items-center px-5'>
                                <div className="grid grid-cols-2">
                                    <div className='bg-white rounded-xl p-3 font-pop ml-2'>
                                        <div>
                                            <p className='font- font-medium text-black text-center'>{t("shop.product.quote.characteristic_one")}</p>
                                        </div>
                                        <div className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-xs text-center'>
                                                Loren Ipsum et dolor fiel
                                            </p>
                                        </div>
                                    </div>
                                    <div className='bg-white rounded-xl p-2 font-pop ml-2'>
                                        <div>
                                            <p className='font- font-medium text-black text-center'>{t("shop.product.quote.characteristic_two")}</p>
                                        </div>
                                        <div className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-xs text-center'>
                                                Loren Ipsum et dolor fiel
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm py-2.5 text-center mx-4 mb-2"><div className='flex items-center'><div><p>{t("shop.product.quote.button")}</p></div><div className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg></div></div></button>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='py-5 px-5 bg-white rounded-xl'>
                        <div>
                            <p className='font-semibold'>{t("shop.product.quote.left_bar_title", {item: `${props.product.category}`})}</p>
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
    const [variant, setVariant] = useState(props.variant.name);
    return (
        <div>
            <p className='font-semibold py-1'>{props.variant.name}</p>
            <RadioGroup value={variant} onChange={setVariant}>
                {
                    props.variant.values.map((value, index) => (
                        <div className='my-1' key={index}>
                            <RadioGroup.Option value={value} className={({ active, checked }) =>

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