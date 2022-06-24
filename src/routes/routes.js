import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom';

import{
    Home as Home,
} from '../pages/home/index';
import {
    Main as MainLayout,
  } from '..'

function routes() {
    return (  
        <Routes>
            <Route navigate path='/' element={Home}></Route>
        </Routes>
    );
}

export default routes;