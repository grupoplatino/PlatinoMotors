import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
}

function SliderHome() {
    return (
        <section className="bg-primary">
            <div className="container mx-auto bg-white">
                <div>

                <Slider {...settings}>
                    <div >
                        <div className="flex py-40 bg-primary justify-center">
                            <p className="text-white font-xl">Slider 1</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-40 bg-success justify-center">
                            <p>Slider 2</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex py-40 bg-white justify-center">
                            <p>Slider 3</p>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
        </section>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "relative", background: "green" }}
        onClick={onClick}
      />
    );
}

export default SliderHome;