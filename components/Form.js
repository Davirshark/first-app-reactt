import React, { useState} from 'react';


function Form({ novaTarefa }) {
    const [userInput, setUserInput] = useState("");


    const handleSubmit = enter => {
        enter.preventDefault();
        if (!userInput) return;
        novaTarefa({ tarefa: userInput, });
    };



    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                placeholder="Nova Tarefa"
                type="text"
                className="input"
                value={userInput}
                onChange={novaTarefa => setUserInput(novaTarefa.target.value)}
                
            />
            
        </form>
    );
};

export default Form;