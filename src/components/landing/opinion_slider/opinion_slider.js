import React from "react";
import Slider from "react-slick";
import { AvatarExample } from "../../../assets/index"
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
                    //dotss
                    initialSlide={1}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    dotsClass="slick-dots"
                >
                    {data.map((item) => (
                        <div className="my-2 py-5 md:py-24  container bg-fiord-600 rounded-md">
                            <div className="flex justify-center">
                                <div>
                                    <div className="flex justify-center">
                                        <p className="font-pop font-extrabold text-white mb-2">Titulo de la opinion</p>
                                    </div>
                                    <div className="flex justify-center ">
                                        <p className="mx-14 md:mx-10 lg:mx-14 px-2 font-pop text-white font-medium text-center"> Loren imsum et dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cosequat.</p>
                                    </div>
                                    <div className="flex justify-center align-middle pt-5">
                                        <div className="">
                                            <img alt="avatar" className="rounded-full pr w-10 h-10 bg-white" src={AvatarExample} />
                                        </div>
                                        <div>

                                        <p className="font-pop text-xs mx-2 pt-2 text-light"> <strong>Nombre Apellido</strong> / Posicion</p>
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
            <div className="bg-white bg-opacity-50 rounded-full p">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#000000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <div className="bg-white bg-opacity-50 rounded-full p">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#000000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

export default SliderOpinion;

