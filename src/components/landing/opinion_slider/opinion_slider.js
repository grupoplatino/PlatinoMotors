import React from "react";
import Slider from "react-slick";
import { data } from "./opinions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./opinion_slider.css";


function SliderOpinion() {
    return (
        <div className="container my-5 mx-auto ">
            <div className="carousel mx-2 sm:mx-0">
                <Slider
                    autoplay={false}
                    autoplaySpeed={5000}
                    initialSlide={1}
                    infinite
                    dots={true}
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    dotsClass="slick-dots"
                >
                    {data.map((item, index) => (
                        <div key={index} className="my-2 py-5 md:py-24 container bg-fiord-600 rounded-xl">
                            <div className="flex justify-center mx-40">
                                <div>
                                    <div className="flex justify-center">
                                        <p className="font-pop font-extrabold text-white mb-4">Titulo de la opinion</p>
                                    </div>
                                    <div className="flex justify-center ">
                                        <p className="mx-14 md:mx-10 lg:mx-14 font-pop text-white font-medium text-center"> Loren imsum et dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cosequat.</p>
                                    </div>
                                    <div className="flex justify-center align-middle pt-5">
                                        <div className="">
                                            <img alt="avatar" className="rounded-full pr w-8 h-8 bg-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                        </div>
                                        <div>
                                        <p className="font-pop text-xs mx-2 pt-2 text-white">
                                            <strong>Nombre Apellido</strong> / Posicion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="bg-white bg-opacity-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#3c4963" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="bg-white bg-opacity-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#3c4963" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

export default SliderOpinion;

