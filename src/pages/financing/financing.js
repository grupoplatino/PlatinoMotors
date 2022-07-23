import {FinancingHero, LoginRequest, StepsToFinancing} from "../../components/index";
import React, { useEffect } from "react";
import ScrollToTop from "../../utils/scroll_to_top";

function Financing() {
    useEffect(() => {
        ScrollToTop();
    }, []);
    return ( 
    <div>
     <FinancingHero/>
     <StepsToFinancing/>
     <LoginRequest/>
    </div>
    );
}

export default Financing;