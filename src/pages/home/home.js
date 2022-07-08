import { React } from "react";
import {Hero,ReferenceImgRight,ReferneceImgLeft,Searcher,SliderHome, SliderOpinions,ContactUs, HeroCategorySlider} from "../../components/index";


function Home() {
    return (
        <>
        <Hero/>
        <HeroCategorySlider/>
        <Searcher/>
        <SliderHome/>
        <ReferneceImgLeft/>
        <ReferenceImgRight/>
        <SliderOpinions/>
        <ContactUs/>
        </>
    );
}

export default Home;