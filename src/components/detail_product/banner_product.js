function BannerProduct(props) {
    return (  <div className="bg-black">
        <div className="container mx-auto">
            <div className="flex justify-start py-5 flex-wrap">
                <div className="px-2">
                    <div className="grid grid-cols-1 py-2 px-2">
                        <p className="text-white text-2xl font-extralight font-pop ">{props.product.motor}</p>
                        <p className="text-white text-center text-md font-bold font-pop ">Motor</p>
                    </div>
                </div>
                <div className="px-2">
                    <div className="grid grid-cols-1 py-2 px-2">
                        <p className="text-white text-2xl font-extralight font-pop ">{props.product.motor}</p>
                        <p className="text-white text-center text-md font-bold font-pop ">Peso</p>
                    </div>
                </div>
                <div className="px-2">
                    <div className="grid grid-cols-1 py-2 px-2">
                        <p className="text-white text-2xl font-extralight font-pop ">{props.product.cucharon}</p>
                        <p className="text-white text-center text-md font-bold font-pop ">Cucharon</p>
                    </div>
                </div>
                <div className="px-2">
                    <div className="grid grid-cols-1 py-2 px-2">
                        <p className="text-white text-2xl font-extralight font-pop ">{props.product.motorPower}</p>
                        <p className="text-white text-center text-md font-bold font-pop ">Potencia de motor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default BannerProduct;