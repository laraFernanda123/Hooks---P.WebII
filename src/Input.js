import React, { useState } from 'react';

import "./styles/global.css";

const Input = () => {
    const [ write, setWrite ] = useState('');
    const [ add, setAdd ] = useState([]);

    return(
    <div>
        <h1 className="text-center text-primary">Mural de Atividades - IFAL</h1>

        <form 
            onSubmit={event =>{
                event.preventDefault();
                if(write) {
                    setAdd([...add, write]);
                    setWrite("");
                }
            }}
        >

            <input 
                className="form-control input1"
                placeholder="Digite aqui a tarefa a ser realizada"
                type="text"
                value={write}
                onChange={event => setWrite(event.target.value)}
            />

            <button className="button1" type="submit">Adicionar tarefa</button>
        </form>

        <ol>
            {add.map((add, index) => (
                <li key={index} className="result">{add}</li>
            ))}
        </ol>
    </div>
);
}

export default Input;
