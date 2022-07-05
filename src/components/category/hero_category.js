import { RightArrowBreadOrange } from "../../assets";

function HeroCategory(props) {
    let cantProducts = 0;
    for (let i = 0; i < props.products.length; i++) {
        if(props.products[i].categoryId === props.category.id){
            cantProducts++;
        }
    }
    return (
    <div className="bg-b bg-white">
        <div className="container mx-auto">
                <div className="flex pt-16 justify-between flex-wrap">
                    <div className="flex items-center">
                        <p className="pr-2 text-blackPearl-900 font-pop text-sm">Comprar</p>
                        <img className="h-3 pr-2" src={RightArrowBreadOrange} alt="icono flecha derecha" />
                        <p className="pr-2 text-primary font-pop text-sm">{props.category.name}</p>
                    </div>
                    <div className="flex">
                        <p className="font-pop text-gray-700"> {cantProducts} Resultados</p>
                    </div>
                </div>
                <div className="flex pt-6 pb-4  flex-wrap justify-between">
                    <div>
                        <p className="font-pop mb-1 font-semibold text-3xl text-blackPearl-800"> {props.category.name}</p>
                    </div>
                    <div className=" flex flex-nowrap justify-items-stretch content-end">
                        <div><button className="rounded bg-black border border-black py-1 font-pop text-sm px-2 mx-1 text-white">Ver Todos</button></div>
                        <div><button className="rounded bg-otherLight border border-gray py-1 font-pop text-sm px-2 mx-1 text-gray-700">Quiero Comprar</button></div>
                        <div><button className="rounded bg-otherLight border border-gray py-1 font-pop text-sm px-2 mx-1 text-gray-700">Quiero Rentar</button></div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default HeroCategory;