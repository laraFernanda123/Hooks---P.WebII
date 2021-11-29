import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title= `Sua média é ${count/4} `; 
  });
  useEffect(
    ()=>console.log("Carregada")
  );
  
  

  return (
    <div className= 'estilo'>
      <p>Somatório das notas dos quatro bimestres: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>
        Adicione aqui
      </button>
    </div>
    
    
  );
}
  

export default App;


