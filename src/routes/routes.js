import { Route, Routes } from "react-router-dom";
import { Home, Financing, Contact, Services, Shop} from "../pages";

function Pages() {
    return ( 
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/financiamiento' element={<Financing/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/catalogo' element={<Shop/>}/>
                <Route path='*' navigate element={<Home/>}/>
        </Routes>
     );
}
export default Pages;