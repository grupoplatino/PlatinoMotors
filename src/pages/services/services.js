import { HeroServices, Maintenance, SpareParts, SpecialAtention } from "../../components";
import React, { useEffect } from "react";
import ScrollToTop from "../../utils/scroll_to_top";

function Services() {
    useEffect(() => {
        ScrollToTop();
    }, []);
    return (
        <div>
            <HeroServices />
            <Maintenance />
            <SpecialAtention />
            <SpareParts />
        </div>
    );
}

export default Services;