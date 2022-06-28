import React from "react";
import Slider from "react-slick";
import { data } from "./images_slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";



function SliderHome() {
    return (
        <div className="container my-5 mx-auto">
            <div  className="carousel">
                <Slider
                    autoplay={false}
                    autoplaySpeed={5000}
                    dots
                    initialSlide={1}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    customPaging={(i) => {
                        return (
                            <div className="h-1 r">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f1f1f1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        );
                    }}
                    dotsClass="slick-dots"
                >
                    {data.map((item) => (
                        <div>
                            <img src={item} className="rounded-xl" alt="" style={{ width: "100%", height: "60vh" }} />
                            
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

export default SliderHome;