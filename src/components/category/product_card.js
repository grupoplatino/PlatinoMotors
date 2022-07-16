import React from "react";
import { Link } from "react-router-dom";


function ProductCard(props) {
    return (
        <div className="flex py-5 px-4 bg-white rounded-xl justify-items-center">
            <div className="grow">
                <div className="flex justify-between">
                    <Link to="/shop/product"><p className="font-pop text-black font-medium text-2xl">{props.product.name} </p></Link>
                    
                    <button className="bg-gray-100 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src={props.product.img} alt={props.product.name} className="h-48"/>
                </div>
                <div className="flex flex-nowrap">
                    <div>
                        <p className="font-pop text-bermudaGray-500 text-sm pr-1">Potencia: </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.motorPower} </p>
                    </div>
                </div>
                <div className="flex flex-nowrap">
                    <div>
                        <p className="font-pop text-bermudaGray-500 text-sm pr-1">Peso: </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.weight} </p>
                    </div>
                </div>
                <div className="flex flex-nowrap">
                    <div>
                        <p className="font-pop text-bermudaGray-500 text-sm pr-1">Cucharon: </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.cucharon} </p>
                    </div>
                </div>
                <div className="flex flex-nowrap">
                    <div>
                        <p className="font-pop text-bermudaGray-500 text-sm pr-1">Motor: </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.motor} </p>
                    </div>
                </div>
                <div className="flex pt-2 flex-nowrap">
                    <div>
                        <p className= {(props.product.status === "Disponible" ? "text-success": props.product.status ==="Por Encargo" ? "text-black":"text-primary") + " font-pop text-sm pr-1 font-semibold" }>{props.product.status} </p>
                    </div>
                    <div>
                        <p className="font-pop text-fiord text-sm">{props.product.status === "Disponible" ? "Entrega inmediata":props.product.status ==="Por Encargo" ? "Entrega en 2 semanas":""} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;