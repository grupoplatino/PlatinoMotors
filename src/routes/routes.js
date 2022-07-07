import { Route, Routes } from "react-router-dom";
import { Home, Financing, Contact, Services, DetailProduct, Category} from "../pages";

function Pages() {
    return (
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/financiamiento' element={<Financing/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path="/shop/product" element={<DetailProduct/>}/>
                <Route path="/shop/category" element={<Category/>}/>
        </Routes>
    );
}
export default Pages;