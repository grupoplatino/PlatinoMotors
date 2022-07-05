import React from "react";
import Slider from "react-slick";
import { data } from "./images_slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";



function SliderHome() {
    return (
        <div className="container mb-5 mt-16 mx-auto">
            <div className="carousel">
                <Slider
                    autoplay={false}
                    autoplaySpeed={5000}
                    //dots
                    initialSlide={1}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}

                    dotsClass="slick-dots"
                >
                    {data.map((item) => (
                        <div>
                            <img src={item} className="rounded-3xl" alt="" style={{ width: "100%", height: "75vh" }} />
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
            <div className="bg-white bg-opacity-50 rounded-full p">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#3c4963" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

export default SliderHome;