import React from 'react';
import useCheckList from '../Hooks/useCheckList';
import './App.css';



const Listaum = () =>{

    const isContextList = useCheckList(false);
  

  return (
    <div className="App">
        <header className="App-header">
          <a> IFAL - Instituto Federal de Alagoas </a>
          <p> Aperte com o botão esquero do mouse em qualquer lugar da tela para marcar como concluído! </p>
          <ul className= "App-lista"> <h1> Lista diaria - Dia 1 - <a> {isContextList ? 'Concluido' : 'Pendente'} </a> </h1>
            <li>Atividade P. Web 2 </li> 
            <li>Atividade Filosofia </li>
            <li>Atividade Inglês </li>
            <li>Atividade GOST </li>
          </ul>

        </header>

        
    </div>

    
  );
};

export default Listaum;
