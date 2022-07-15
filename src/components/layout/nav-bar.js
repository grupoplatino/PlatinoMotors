import React from "react";
import { Link } from "react-router-dom";
import { PlatinoMotorsBlack } from "../../assets/index";
import { Popover } from '@headlessui/react';


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  //const categories = [
  //  {
  //    id: 1,
  //    name: "Excavadoras",
  //  },
  //  {
  //    id: 2,
  //    name: "Cargadoras",
  //  },
  //  {
  //    id: 3,
  //    name: "Volquetas",
  //  },
  //  {
  //    id: 4,
  //    name: "Motoniveladoras",
  //  },
  //  {
  //    id: 5,
  //    name: "Vibrocompactador",
  //  },
  //  {
  //    id: 6,
  //    name: "Hormigon",
  //  },
  //  {
  //    id: 7,
  //    name: "Grúas",
  //  },
  //  {
  //    id: 8,
  //    name: "Pilotaje",
  //  },
  //  {
  //    id: 9,
  //    name: "Portuaria",
  //  },
  //  {
  //    id: 10,
  //    name: "Minera",
  //  },
  //  {
  //    id: 11,
  //    name: "Bomberos",
  //  }
  //];
//
  //const subCategories = [
  //  {
  //    categoryId: 1,
  //    name: "Miniexcavadoras",
  //  },
  //  {
  //    categoryId: 1,
  //    name: "Excavadora Mediana",
  //  },
  //  {
  //    categoryId: 1,
  //    name: "Excavadora grande",
  //  },
  //  {
  //    categoryId: 2,
  //    name: "Cargadora de Neumaticos",
  //  },
  //  {
  //    categoryId: 2,
  //    name: "Cargadora de oruga",
  //  },
  //  {
  //    categoryId: 3,
  //    name: "< 50Tons",
  //  },
  //  {
  //    categoryId: 3,
  //    name: "> 50Tons",
  //  },
  //  {
  //    categoryId: 4,
  //    name: "Espatula 3660mm",
  //  },
  //  {
  //    categoryId: 4,
  //    name: "Espatula 4270mm",
  //  },
  //  {
  //    categoryId: 5,
  //    name: "Vibrocompactador liso",
  //  },
  //  {
  //    categoryId: 5,
  //    name: "Vibrocompactador pata de cabra",
  //  },
  //  {
  //    categoryId: 5,
  //    name: "Vibrocompactador doble via",
  //  },
  //  {
  //    categoryId: 5,
  //    name: "Vibrocompactador de neumaticos",
  //  },
  //  {
  //    categoryId: 5,
  //    name: "Vibrocompactador liso",
  //  },
  //  {
  //    categoryId: 6,
  //    name: "Mixer 10",
  //  },
  //  {
  //    categoryId: 6,
  //    name: "Mixer 13",
  //  },
  //  {
  //    categoryId: 7,
  //    name: "Grua Electrica",
  //  },
  //  {
  //    categoryId: 7,
  //    name: "Grua Mediana",
  //  },
  //  {
  //    categoryId: 8,
  //    name: "Single Pilot",
  //  },
  //  {
  //    categoryId: 8,
  //    name: "Dual Pilot",
  //  },
  //  {
  //    categoryId: 9,
  //    name: "Portuaria uno",
  //  },
  //  {
  //    categoryId: 9,
  //    name: "Portuaria dos",
  //  },
  //  {
  //    categoryId: 10,
  //    name: "50 Tons",
  //  },
  //  {
  //    categoryId: 10,
  //    name: "100 Tons",
  //  },
  //  {
  //    categoryId: 11,
  //    name: "150 M3",
  //  },
  //  {
  //    categoryId: 11,
  //    name: "200 M3 ",
  //  },
  //];

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
