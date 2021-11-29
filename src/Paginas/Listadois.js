import React, {useState, useEffect} from 'react';
import './App.css';
import useCheckList from '../Hooks/useCheckList';



const Listadois = () =>{

  const isContextList = useCheckList(false);
  

  return (
    <div className="App">
        <header className="App-header">
        <a> IFAL - Instituto Federal de Alagoas </a>
          <p> Aperte com o botão esquero do mouse em qualquer lugar da tela para marcar como concluído! </p>
          <ul className= "App-lista"> <h1> Lista diaria - Dia 2 - <a> {isContextList ? 'Concluido' : 'Pendente'} </a>  </h1>
            <li>Atividade P. Móvel </li> 
            <li>Atividade Física </li>
            <li>Atividade Sociologia </li>
            <li>Atividade Redes </li>
          </ul>

        </header>

        
    </div>

    
  );
};

export default Listadois;
