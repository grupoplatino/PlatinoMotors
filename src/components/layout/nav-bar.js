import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { PlatinoMotorsBlack, RightArrowBreadOrange } from "../../assets/index";
import { Popover, Transition, Disclosure, Switch, Combobox } from "@headlessui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SearchIcon, SelectorIcon } from "@heroicons/react/solid";


export default function Navbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [isOpenMegaMenu, setIsOpenMegaMenu] = useState(false);
  const [isLogued, setIsLogued] = useState(false);
  const categories = [
    {
      id: 1,
      name: "Excavadoras",
    },
    {
      id: 2,
      name: "Cargadoras",
    },
    {
      id: 3,
      name: "Volquetas",
    },
    {
      id: 4,
      name: "Motoniveladoras",
    },
    {
      id: 5,
      name: "Vibrocompactador",
    },
    {
      id: 6,
      name: "Hormigon",
    },
    {
      id: 7,
      name: "Grúas",
    },
    {
      id: 8,
      name: "Pilotaje",
    },
    {
      id: 9,
      name: "Portuaria",
    },
    {
      id: 10,
      name: "Minera",
    },
    {
      id: 11,
      name: "Bomberos",
    }
  ];
  const subCategories = [
    {
      categoryId: 1,
      name: "Miniexcavadoras",
    },
    {
      categoryId: 1,
      name: "Excavadora Mediana",
    },
    {
      categoryId: 1,
      name: "Excavadora grande",
    },
    {
      categoryId: 2,
      name: "Cargadora de Neumaticos",
    },
    {
      categoryId: 2,
      name: "Cargadora de oruga",
    },
    {
      categoryId: 3,
      name: "< 50Tons",
    },
    {
      categoryId: 3,
      name: "> 50Tons",
    },
    {
      categoryId: 4,
      name: "Espatula 3660mm",
    },
    {
      categoryId: 4,
      name: "Espatula 4270mm",
    },
    {
      categoryId: 5,
      name: "Vibrocompactador liso",
    },
    {
      categoryId: 5,
      name: "Vibrocompactador pata de cabra",
    },
    {
      categoryId: 5,
      name: "Vibrocompactador doble via",
    },
    {
      categoryId: 5,
      name: "Vibrocompactador de neumaticos",
    },
    {
      categoryId: 5,
      name: "Vibrocompactador liso",
    },
    {
      categoryId: 6,
      name: "Mixer 10",
    },
    {
      categoryId: 6,
      name: "Mixer 13",
    },
    {
      categoryId: 7,
      name: "Grua Electrica",
    },
    {
      categoryId: 7,
      name: "Grua Mediana",
    },
    {
      categoryId: 8,
      name: "Single Pilot",
    },
    {
      categoryId: 8,
      name: "Dual Pilot",
    },
    {
      categoryId: 9,
      name: "Portuaria uno",
    },
    {
      categoryId: 9,
      name: "Portuaria dos",
    },
    {
      categoryId: 10,
      name: "50 Tons",
    },
    {
      categoryId: 10,
      name: "100 Tons",
    },
    {
      categoryId: 11,
      name: "150 M3",
    },
    {
      categoryId: 11,
      name: "200 M3 ",
    },
  ];
  function childCategories(categoryId) {
    let children = [];
    for (let i = 0; i < subCategories.length; i++) {
      if (subCategories[i].categoryId === categoryId) {
        children.push(subCategories[i]);
      }
    }
    return children;
  }
  function closeMegaMenu(open) {
    return false;
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Popover className="fixed w-screen z-40 font-pop bg-white">
      <div className="absolute inset-0 shadow z-20 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <SwitchNavBar isSearching={isSearching} categories={categories} setIsSearching={setIsSearching} childCategories={childCategories} />
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg  md:hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <LazyLoadImage effect="blur" className="h-6 container w-auto md:h-15" src={PlatinoMotorsBlack} alt="Platino Motors Logo" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#000000">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 ">
                <nav className="md:flex md:justify-between">
                  <Disclosure>
                    {
                      ({ extended }) => (
                        <div className="">
                          <Disclosure.Button>
                            <div className="flex justify-between  items-center ">
                              <div>
                                <span className="px-3 py-2 w-max flex items-center text-sm font-bold leading-snug hover:opacity-75">Equipo</span>
                              </div>
                              <div>
                                <img src={RightArrowBreadOrange} alt="flecha derecha" className={`${extended ? "rotate-90 transform" : ""
                                  } h-3 w-3`} />
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <div className="flex justify-center">
                              <Link to="/shop/category">
                                <button type="button" className="text-black font-pop bg-white w-full rounded-3xl  focus:ring-4 
                                    focus:outline-none focus:ring-blue-300  border border-black shadow-md font-medium text-sm px-12 py-2 sm:py-2 text-center mr-2 mb-2">Ver Todo</button>
                              </Link>
                            </div>
                            {
                              categories.map((category, index) => (
                                <div key={index} className="mx-auto w-full max-w-md rounded-2xl bg-white p-1">
                                  <Disclosure>
                                    {
                                      ({ open }) => (
                                        <>
                                          <Disclosure.Button className="flex w-full justify-between items-center rounded-lg  px-4 py-2 text-left text-sm font-">
                                            <span>{category.name}</span>
                                            <img src={RightArrowBreadOrange} alt="flecha derecha" className={`${open ? "rotate-90 transform" : ""
                                              } h-3 w-3`} />
                                          </Disclosure.Button>
                                          <Disclosure.Panel>
                                            {
                                              childCategories(category.id).map((child, key) => (
                                                <div key={key}>
                                                  <Link to="/shop/product">
                                                    <p className="font-pop text-sm ml-7 text-gray-500">
                                                      {child.name}
                                                    </p>
                                                  </Link>
                                                </div>
                                              ))
                                            }
                                          </Disclosure.Panel>
                                        </>
                                      )
                                    }
                                  </Disclosure>
                                </div>
                              ))
                            }
                          </Disclosure.Panel>
                        </div>
                      )
                    }

                  </Disclosure>
                  <div className="flex flex-col md:flex-row">
                    <Link to="/servicios"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Partes/Servicio</span></Link>
                    <Link to="/financiamiento"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Financiamiento</span></Link>
                    <Link to="/contacto"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Contacto</span></Link>
                    <div>
                      <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm py-2.5 text-center mx-4 mb-2">Inicio/Registro</button>
                    </div>

                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white hidden md:block shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-2 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <img className="h-6 container w-auto md:h-15" src={PlatinoMotorsBlack} alt="Platino Motors Logo" />
                  </Link>
                </div>
                <div className="mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#000000">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
                <Popover.Group as="nav" className="flex z-40 space-x-2">
                  <Popover>
                    {(isOpenMegaMenu) => (
                      <>
                        <Popover.Button className={classNames(isOpenMegaMenu ? "text-gray-900" : "text-gray-900",
                          "group bg-white rounded-md inline-flex items-center text-base z-40 font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pirmaryScarlet-100"
                        )}>
                          <span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Venta/Renta</span>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden md:block absolute z-30 top-full inset-x-2 rounded-lg px-5 mt-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl mx-auto grid gap-y-4 px-4 py-2 grid-cols-4 lg:px-8">
                              {
                                categories.map((item, index) => (
                                  <div key={index} onClick={setIsOpenMegaMenu(false)}>
                                    <Link to="/shop/category" className="-m-3 my-1 flex flex-col font-pop justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex  items-center">
                                        <div className="mr-2">
                                          <img src={RightArrowBreadOrange} alt="flecha derecha" />
                                        </div>
                                        <div>{item.name}</div>
                                      </div>
                                    </Link>
                                    <div>
                                      {
                                        childCategories(item.id).map(
                                          (child, key) => (
                                            <div key={key} onClick={setIsOpenMegaMenu(isOpenMegaMenu)}>
                                              <Link to="/shop/category">
                                                <p className="text-gray-500 hover:text-pirmaryScarlet-600 text-sm pl-1">
                                                  {child.name}
                                                </p>
                                              </Link>
                                            </div>
                                          )
                                        )
                                      }
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                            <div className="container mx-auto">
                              <hr />
                              <div className="flex justify-center my-2">
                                <Link to="/shop/category">
                                  <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-10 py-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm  text-center">Ver Todo</button>
                                </Link>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link to="/servicios"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Partes/Servicio</span></Link>
                  <Link to="/financiamiento"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Financiamiento</span></Link>
                  <Link to="/contacto"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Contacto</span></Link>
                  <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm py-2.5 text-center mx-4 mb-2">Inicio/Registro</button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1 pt-1 inline-block align-middle" viewBox="0 0 20 20" fill="blackPearl">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </Popover.Group>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

function SwitchNavBar(props) {
  const [enabled, setEnabled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [query, setQuery] = useState('');
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function beginSearching(isSearching) {
    props.setIsSearching(isSearching);
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
  const filteredProducts =
    query === ''
      ? products
      : products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
      })
  //TODO: DIBUJAR EL BUSCADOR
  return (
    props.isSearching === true ?
      <div className="container  mx-auto py-5">
        <div className="grid grid-cols-1  relative justify-between mx-20 px-20 ">
          <div className="flex">
            <Combobox value={selectedProduct} onChange={setSelectedProduct}>
              <Combobox.Label>Buscar:</Combobox.Label>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(product) => product.name}
                className="grow bg-white border-b border-primary focus:border-none mx-4 px-5"
              />
              <Combobox.Button className="absolute inset-y-0 right-32 flex items-center pr-2">
                <SearchIcon
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </Combobox.Button>

              <Combobox.Options className="bg-white rounded-xl shadow-xl ml-16 container w-96 mt-10 absolute">
                {filteredProducts.map((product) => (
                  <Combobox.Option key={product.name} value={product}>
                    <div className="py-1 flex items-center hover:bg-gray-200 font-pop cursor-pointer font-medium text-black pl-5">
                      <div className="p-2 bg-gray-200 rounded-lg mr-3">
                        <img className="h-10 w-10" alt={product.name} src={product.img} />
                      </div>
                      <div className="flex items-baseline">
                        <p>
                      {product.name} 
                        </p>
                        <p className="text-xs text-gray-400 ml-2">
                      {product.category}

                        </p>
                      </div>
                    </div>
                  </Combobox.Option>
                ))}
              </Combobox.Options>

            </Combobox>
            <div>
              <button onClick={() => (beginSearching(false))} className="bg-background shadow-sm p-1 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1  inline-block align-middle" viewBox="0 0 20 20" fill="blackPearl">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
      :
      <Fragment>
        <div className="max-w-7xl mx-auto flex w-full items-center px-4 py-2 sm:px-6 lg:px-8 md:space-x-10">
          <div>
            <span className="sr-only">Platino Motors</span>
            <Link to="/">
              <LazyLoadImage effect="blur" className="h-10 container w-auto md:h-15" src={PlatinoMotorsBlack} alt="Platino Motors Logo" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pirmaryScarlet-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary">
              <span className="sr-only">Abrir Opciones</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex  lg:items-center lg:justify-end">
            <Popover.Group as="nav" className="flex z-40 space-x-2">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className={classNames(open ? "text-gray-900" : "text-gray-900",
                      "group bg-white rounded-md inline-flex items-center text-base z-40 font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pirmaryScarlet-100"
                    )}>
                      <span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Venta/Renta</span>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-30 top-full inset-x-0 transform shadow-lg bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-4 px-4 py-2 sm:grid-cols-2 sm:gap-2 sm:px-6 lg:grid-cols-4 lg:px-8">
                          {
                            props.categories.map((item, index) => (
                              <div key={index}>
                                <Link to="/shop/category" className="-m-3 my-1 flex flex-col font-pop justify-between rounded-lg hover:bg-gray-50">
                                  <div className="flex  items-center">
                                    <div className="mr-2">
                                      <img src={RightArrowBreadOrange} alt="flecha derecha" />
                                    </div>
                                    <div>{item.name}</div>
                                  </div>
                                </Link>
                                <div>
                                  {
                                    props.childCategories(item.id).map(
                                      (child, key) => (
                                        <div key={key} className="pb-1">
                                          <Link to="/shop/category">
                                            <p className="text-gray-500 hover:text-pirmaryScarlet-600 text-sm pl-2">
                                              {child.name}
                                            </p>
                                          </Link>
                                        </div>
                                      )
                                    )
                                  }
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className="container mx-auto">
                          <hr />
                          <div className="flex justify-center my-4">
                            <Link to="/shop/category">
                              <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-10 py-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm  text-center">Ver Todo</button>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link to="/servicios"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Partes/Servicio</span></Link>
              <Link to="/financiamiento"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Financiamiento</span></Link>
              <Link to="/contacto"><span className="px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Contacto</span></Link>

              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-8 w-11 bg-gray-200 items-center rounded-full`}
              >

                <span
                  className={`${enabled ? 'translate-x-4' : 'translate-x-1'
                    } inline-block h-6 w-6  transform rounded-full bg-white`}
                >
                  {
                    enabled ? <p className="font-pop text-xs pt-1">ES</p> : <p className="font-pop text-xs pt-1">EN</p>
                  }
                </span>
              </Switch>
              <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm py-2.5 text-center mx-4 mb-2">Inicio/Registro</button>
              <div>
                <button onClick={() => (beginSearching(true))} className="bg-background shadow-sm p-1 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1  inline-block align-middle" viewBox="0 0 20 20" fill="blackPearl">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </Popover.Group>
          </div>
        </div>
      </Fragment>
  );
}

