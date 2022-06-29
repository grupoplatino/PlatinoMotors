import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import {Home} from './pages/home/index'
import {Financing} from './pages/financing/index';
import {Contact} from './pages/contact/index'
import {Services} from './pages/services/index';
import {Shop} from './pages/shop/index';
import Layout from './config/theme/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/financiamiento' element={<Financing/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/catalogo' element={<Shop/>}/>
                <Route path='*' navigate element={<Home/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
);

