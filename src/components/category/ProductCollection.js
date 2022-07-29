import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { UpArrowOrangeIcon, UpdateWhiteIcon, DownArrowBlackIcon } from "../../assets";
import { ProductCard } from "../../components";
import { useTranslation } from "react-i18next";

function ProductCollection(props) {
    const [t] = useTranslation('common');
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
    let dataBrands =        new Set(filters[0].values);
    let dataMotors =        new Set(filters[1].values);
    let dataMotorsPower =   new Set(filters[2].values);
    let dataStatuses =      new Set(filters[3].values);
    let brands =            [...dataBrands];
    let motors =            [...dataMotors];
    let motorsPower =       [...dataMotorsPower];
    let statuses =          [...dataStatuses];
    filters[0].values =     brands;
    filters[1].values =     motors;
    filters[2].values =     motorsPower;
    filters[3].values =     statuses;
    return (
        <div className="bg-background">
            <div className="container mx-auto md:px-5 xl:px-10">
                <div className="flex">
                    <div className="grid grow grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5 py-5 md:grid-cols-6 lg:grid-cols-4 px-4 md:px-0">
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="flex items-center justify-between py-2 bg-black rounded-md">
                                <div className="pl-2">
                                    <p className="text-white">{t("shop.hero.filter.order_by")}</p>
                                </div>
                                <div className="flex items-center">
                                    <button>
                                        <div className="flex">
                                            <div>
                                                <p className="text-white font-pop text-sm mr-1">{t("shop.hero.filter.clear")}</p>
                                            </div>
                                            <div className="pr-2">
                                                <img alt="actualizar" className="h-4" src={UpdateWhiteIcon} />
                                            </div>
                                        </div>

                                    </button>
                                </div>
                            </div>
                            <div className="mt-1 bg-white py-4 px-2 rounded-md">
                                {
                                    filters.map((item, index) => (
                                        <Disclosure key={index}>
                                            {({ open }) => (
                                                <>
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
                                                </>
                                            )}
                                        </Disclosure>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 grow mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
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