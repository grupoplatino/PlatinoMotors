import { Route, Routes } from "react-router-dom";
import { Home, Financing, Contact, Services, Shop, DetailProduct } from "../pages";

function Pages() {
    return (
        <Routes>
            <Route path='*' navigate element={<Home />} />
            <Route path="/shop/product" element={<DetailProduct />} />
            <Route path='/financiamiento' element={<Financing />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/servicios' element={<Services />} />
            <Route path='/catalogo' element={<Shop />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}
export default Pages;