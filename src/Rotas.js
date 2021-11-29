import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Listaum from './Paginas/Listaum';
import Listadois from './Paginas/Listadois';
import Header from "./Header";

function Rotas(){
    return(
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<Listaum/>}/>
                    <Route path='/listadois' element={<Listadois/>}/>
                </Routes>
            </Header>
        </BrowserRouter>
    )
};

export default Rotas;