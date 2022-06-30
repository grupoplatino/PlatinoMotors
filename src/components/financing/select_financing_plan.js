import React from 'react';

function SelectFinancingPlan() {
    const plans = [
        {
            title: "Plan Albañil",
            description: "Loren ipsum et dolor bit samen i nomine padre et fili at bringe string"
        },
        {
            title: "Plan maistro",
            description: "Loren ipsum et dolor bit samen i nomine padre et fili at bringe string"
        },
        {
            title: "Plan todo terreno",
            description: "Loren ipsum et dolor bit samen i nomine padre et fili at bringe string"
        },
    ]


    return (
        <div className="bg-otherLigh mb-2 md:mb-10">
            <div className="container mx-auto">
                <div className="flex justify-center  py-5 mx-2 rounded-md border bg-white border-lightPlaceHolder">
                    <div className=" grow">
                        <div className="ml-5 mb-5">
                            <p className="font-pop font-semibold text-fiord-900">Solicitud de financiamiento</p>
                        </div>
                        <hr className='bg-lightPlaceHolder  h-0.5 border-none' />
                        <div className="grow ml-5 justify-center mt-5">
                            <p className="text-ber text-bermudaGray-900">Elije un producto</p>
                        </div>
                        <div className="grid grid-cols-1 gap-0 mb-5">
                            <div className="wrap  mb-1 sm:mb-0 mx-2 mt-2">
                                <input type='text' className="  border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop  " placeholder="Producto"></input>
                            </div>
                            <div className="wrap  mb-1 sm:mb-0 mx-2 mt-2">
                                <input type='number' className="  border-b text-sm focus:border-primary bg-otherLight-50 focus:outline-none placeholder:pop text-fiord-500 border-lightPlaceHolder active:border-primary block w-full pl-2 p-2.5 placeholder:font-pop  " placeholder="Cantidad"></input>
                            </div>
                        </div>
                        <hr className='bg-lightPlaceHolder  h-0.5 border-none' />
                        <form>
                            <div className="mt-5 grow ml-5">
                                <p className="text-ber text-bermudaGray-900">Elije un plan de financiamiento</p>
                            </div>

                            {
                                plans.map((item, index) =>
                                (
                                    <div key={index} className="flex justify-center mx-2 my-5">
                                        <div className="grow border-lightPlaceHolder bg-otherLight-50 rounded-md   pl-2 ml-2 pr-5 py-5">
                                            <div className="flex items-center ">
                                                <div className='ml-4 mr-4'>
                                                    <input type="checkbox"  className='   accent-white w-4 h-4 rounded focus:ring-2 focus:ring-success' />
                                                </div>
                                                <div>
                                                    <p className='font-pop font-semibold'>{item.title}</p>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                            <div className='flex justify-center lg:pt-5'>
                                <div className=''>
                                    <button type="button" className="text-background bg-gradient-to-r rounded-3xl pr-6 pl-6 pb-2 pt-2 from-startGradiant to-endGradiant hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Solicitar Financiamiento</button>
                                </div>
                            </div>
                            <div className='flex py-5 justify-center sm:px-24'>
                                <div>
                                    <p className="font-normal text-blackPearl-100 text-center text-sm">Al proceder, serás redirigido a Platino.hn para completar el formulario de solicitud.</p>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectFinancingPlan;