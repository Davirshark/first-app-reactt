import React, { useState } from 'react';
import './App.css';
import Listar from './components/Lista.js';
import Formulário from './components/Form.js';

function App() {
  const [tarefas, setTodos] = useState([
    {  tarefa: "Correr" },
    { tarefa: "Estudar" },
    { tarefa: "Jogar Lol" }
  ]);
  return (
    <div className="App">
      <Formulário novaTarefa={(nova) => {
        if (nova.tarefa.length > 0) {
          setTodos([...tarefas, nova]);
        }
      }} />
      <Listar items={tarefas} ></Listar>
    </div>
  );
}

export default App;