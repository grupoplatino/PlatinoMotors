function BannerProduct(props) {
    return (
        <div className="bg-black">
            <div className="container mx-auto lg:px-2 xl:px-0">
                <div className="flex justify-between md:justify-start py-2 items-center flex-wrap">
                    <div className="px-1">
                        <div className="grid grid-cols-1 py-2 px-2">
                            <p className="text-white text-2xl font-semibold font-pop">{props.product.motor}</p>
                            <p className="text-white text-left text-sm font-pop">Motor</p>
                        </div>
                    </div>
                    <div className="px-1">
                        <div className="grid grid-cols-1 py-2 px-2">
                            <p className="text-white text-2xl font-semibold font-pop">{props.product.weight}</p>
                            <p className="text-white text-left text-sm font-pop">Peso</p>
                        </div>
                    </div>
                    <div className="px-1">
                        <div className="grid grid-cols-1 py-2 px-2">
                            <p className="text-white text-2xl font-semibold font-pop">{props.product.cucharon}</p>
                            <p className="text-white text-left text-sm font-pop">Cucharon</p>
                        </div>
                    </div>
                    <div className="px-1">
                        <div className="grid grid-cols-1 py-2 px-2">
                            <p className="text-white text-2xl font-semibold font-pop">{props.product.motorPower}</p>
                            <p className="text-white text-left text-sm font-pop">Potencia de motor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerProduct;