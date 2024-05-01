import React, { useState } from 'react';
import { Form } from './components/Formulario';
import { Listado } from './components/Listado';
import { BaseColaboradores } from './components/BaseColaboradores';
import Buscador from './components/Buscador';

import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');
  const buscarColaboradores = (termino) => {
    setBusqueda(termino);
  };
  const colaboradoresFiltrados = colaboradores.filter(colaborador => {
    return colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div>
      <h1>Listado de colaboradores</h1>
      <Buscador onBuscar={buscarColaboradores} /> 
      <Listado colaboradores={colaboradoresFiltrados} /> 
      <h1>Agregar colaborador</h1>
      <Form agregarColaborador={agregarColaborador} />
    </div>
  );
}

export default App;