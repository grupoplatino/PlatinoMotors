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
        <div className="bg-otherLigh">
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
                        <div className="mt-5 grow ml-5">
                            <p className="text-ber text-bermudaGray-900">Elije un plan de financiamiento</p>
                        </div>
                        <div >
                            {
                                plans.map(function (item, index){
                                    return(
                                        <div key={index}>
                                        <div className="flex justify-center mx-2 my-5">
                                            <div className="grow border border-lightPlaceHolder rounded-md bg-white pl-5 ml-2 pr-5 py-5">
                                                <div className="grid grid-cols-2">
                                                    
                                                </div>
                                                <p>{item.title}</p>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>);
                                    }
                                   
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectFinancingPlan;