import React, { useState } from 'react';
import { Form } from './components/Formulario';
import { Listado } from './components/Listado';

import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div>
      <h1>Listado de colaboradores</h1>
      <Listado colaboradores={colaboradores} />
      <h1>Agregar colaborador</h1>
      <Form agregarColaborador={agregarColaborador} />
    </div>
  );
}

export default App;