import React from 'react';

function Listar({ items }) {
  return (
    <div className="lista-tarefas">
      {items.map((item, i) => (
        <div
          key={i}
          className="tarefa">
          {i + 1}: {item.tarefa}
        </div>
      ))}
    </div>
  );
};

export default Listar;