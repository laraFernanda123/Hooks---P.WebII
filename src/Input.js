import React, { useState, useEffect} from 'react';

import "./styles/global.css";

const Input = () => {
    const [ write, setWrite ] = useState('');
    const [ add, setAdd ] = useState([]);
    const [click, setClick] = useState(0);

   
    
        
    return(
    <div>
        <h1 className="text-center text-primary">Lista de alunos que vão para visita técnica do IFAL</h1>

        <form 
            onSubmit={event =>{
                event.preventDefault();
                if(write) {

                    /*Aqui está infrigindo a primeira regra*/                
                    useEffect(() => {
                        document.title = `Você clicou ${click} vezes`;
                    });
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

            <button className="button1" type="submit">Adicionar aluno</button>
            <p> Os alunos faltosos são:{click}</p>
            <button onClick={()=>setClick(click +1)} className="button1" type="submit">Faltas</button>
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
