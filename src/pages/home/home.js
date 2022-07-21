import { React } from "react";
import {Hero,ReferenceImgRight,ReferneceImgLeft,Searcher,SliderHome, SliderOpinions,ContactUs, HeroCategorySlider} from "../../components/index";


function Home() {
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