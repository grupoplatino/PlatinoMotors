import { React } from "react";
import {Hero,ReferenceImgRight,ReferneceImgLeft,Searcher,SliderHome} from "../../components/index";


function Home() {
    return (
        <>
        <Hero/>
        <Searcher/>
        <SliderHome/>
        <ReferneceImgLeft/>
        <ReferenceImgRight/>
        </>
    );
}

export default Home;