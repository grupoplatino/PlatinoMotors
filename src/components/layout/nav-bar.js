import React from "react";
import { Link } from "react-router-dom";
import { PlatinoMotorsBlack } from "../../assets/index";
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { Fragment } from "react";
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
  ]

  return (
    <Popover className="z-30 relative">
      <nav className="fixed w-screen flex flex-wrap items-center z-20 justify-between px-2 py-2 bg-background">
        <div className={"container px-4 mx-auto flex items-center justify-center sm:justify-start " + (navbarOpen ? "flex-wrap" : " flex-nowrap")}>
          <Link to="/">
            <img className="h-10 container w-auto md:h-15" src={PlatinoMotorsBlack} alt="Platino Motors Logo" />
          </Link>
          <div className="w-full relative flex justify-end">
            <button
              className="cursor-pointer leading-none py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className={"lg:flex pt-2 pb-0 flex-grow items-center" + (navbarOpen ? "flex" : " hidden")}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ">
                {
                  ({ open }) => (
                    <>
                      <div className="shadow z-40">
                        <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            )}
                          >
                            <span>Solutions</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
                          <div className="bg-white">
                            <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                  <div className="flex md:h-full lg:flex-col">
                                    <div className="flex-shrink-0">
                                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                      </div>
                                    </div>
                                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                      <div>
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                      </div>
                                      <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                        Learn more <span aria-hidden="true">&rarr;</span>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="bg-gray-50">
                            <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                                  >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )
                }


                <Link to="/shop/category"><span className="ml-2 px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Venta/Renta</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/servicios"><span className="ml-2 px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Partes/Servicio</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/financiamiento"><span className="ml-2 px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Financiamiento</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto"><span className="ml-2 px-3 py-2 flex items-center text-sm font-bold leading-snug hover:opacity-75">Contacto</span></Link>
              </li>
              <li className="nav-item">
                <button type="button" className="text-background bg-gradient-to-r rounded-3xl px-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm py-2.5 text-center mx-4 mb-2">Inicio/Registro</button>
              </li>
              <li className="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1 pt-1 inline-block align-middle" viewBox="0 0 20 20" fill="blackPearl">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Popover>
  );
}
