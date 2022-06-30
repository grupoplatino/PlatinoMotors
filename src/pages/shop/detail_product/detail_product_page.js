import React from "react";
import { HeaderProduct, BannerProduct } from "../../../components";

function DetailProduct() {
    const product= {
        id: 1,
        status: "Disponible",
        name: "SY16 C EU-US",
        cucharon: '0.04m',
        motorPower: "10,3/2200kW/rpm",
        category: "Excavadora",
        subCategory: "Excavadora Mediana",
        img: "https://www.sanyglobal.com/all/d/file/p/2016-12-16/68f19ca0a089c2b4d8149a4283e52f42.jpg",
        motor: "Yanmar 3TNV70",
        weight: "1920kg",
        manualAttachment: "",
        cualities: [
            {
                title: "Caractieristica uno",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica dos",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica tres",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
            {
                title: "Caractieristica cuatro",
                description: "There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice. If the user doesn't make a selection, display an error message to force one."
            },
        ],
        dataSheet: [
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            },
            {
                title: "Titulo",
                value: "Value"
            }
        ]
    };
    
    return (<>
    <HeaderProduct product={product}/>
    <BannerProduct product={product}/>
    </> );
}

export default DetailProduct;