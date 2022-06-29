import { React } from "react";
import { SanyWhiteLogo } from '../../assets/index';    
function Hero() {
    return ( 
        <div className="container mx-auto">
           <section className='bg-[url("https://sanyglobal-img.sany.com.cn/product/category/20200831/Large-Excavator-145138.jpg?x-oss-process=image/format,webp")] h-100 sm:h-120 w-full bg-cover bg-center py-10 '>
                <div className="flex  justify-center sm:justify-start">
                    <div className="  px-2 sm:px-10 py-10 mx-20 ">
                        <p className="text-white text-center sm:text-left text-5xl font-bold font-pop mb-3">Compra y Renta </p>
                        <p className="text-white text-center sm:text-left text-5xl font-bold font-pop mb-5">de Maquinaria</p>
                        <p className="text-white text-center sm:text-left font-pop  text-md">Distribuidor exclusivo de</p>
                        <div className="justify-center flex sm:justify-start">
                        <img className="h-10 mb-8" alt="Sany Logo" src={SanyWhiteLogo}/>
                        </div>
                        <div className="flex justify-center sm:justify-start">
                        <button className="text-background bg-gradient-to-r rounded-3xl px-10 py-1 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm text-center mr-2 mb-2 font-pop">Cotizar</button>
                        </div>
                    </div>
                </div>
           </section>
        </div>
     );
}

export default Hero;