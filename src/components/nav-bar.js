import React from "react";
import Logo from '../assets/platino_motors_logo.svg'


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center  justify-between px-2 py-3 bg-background mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-start align-middle">
          <a href="/"><img className="h-10 sm:h-8 lg:w-auto xl:h-10 sm:justify-start" src={Logo} alt="" /></a>
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-end">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center" +(navbarOpen ? "flex" : " hidden")}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto sm:content-center">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="/catalogo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Venta/Renta</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="/servicios"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Partes/Servicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="/financiamiento"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Financiamiento</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-blackPearl hover:opacity-75"
                  href="/contacto"
                >
                  <i className="fab fa-pinterest inline-block align-middle text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contacto</span>
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Inicio/Registro</button>
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
    </>
  );
}
