import { React } from "react";
import {Hero,ReferenceImgRight,ReferneceImgLeft,Searcher,SliderHome, SliderOpinions,ContactUs} from "../../components/index";


function Home() {
    return (
        <>
        <Hero/>
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