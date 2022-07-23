import React, { useEffect } from "react";
import {Hero,ReferenceImgRight,ReferneceImgLeft,Searcher,SliderHome, SliderOpinions,ContactUs, HeroCategorySlider} from "../../components/index";
import ScrollToTop from "../../utils/scroll_to_top";


function Home() {
    useEffect(() => {
        ScrollToTop();
    }, []);
    return (
        <div>
        <Hero/>
        <HeroCategorySlider/>
        <Searcher/>
        <SliderHome/>
        <ReferneceImgLeft/>
        <ReferenceImgRight/>
        <SliderOpinions/>
        <ContactUs/>
        </div>
    );
}

export default Home;