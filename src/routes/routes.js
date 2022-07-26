import { Route, Routes } from "react-router-dom";
import { Home, Financing, Contact, Services, DetailProduct, Category, MakeYourOwn} from "../pages";
import PageNotFound from "../pages/server_errors/page_not_found";

function Pages() {
    return (
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/financiamiento' element={<Financing/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path="/shop/product" element={<DetailProduct/>}/>
                <Route path="/shop/category" element={<Category/>}/>
                <Route path="/shop/add-product-to-cart" element={<MakeYourOwn/>}/>
                <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}
export default Pages;