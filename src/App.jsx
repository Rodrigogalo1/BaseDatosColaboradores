import React, { useState } from 'react';
import { Form } from './components/Formulario';
import { Listado } from './components/Listado';
import { BaseColaboradores } from './components/BaseColaboradores';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');
  const [alerta, setAlerta] = useState('');
  const [error, setError] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

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
      <Form agregarColaborador={agregarColaborador} alerta={alerta} setAlerta={setAlerta} setError={setError} setRegistroExitoso={setRegistroExitoso} />
      {error && <Alert mensaje={alerta} className="Alert" />}
      {registroExitoso && <div className="registro-exitoso">Colaborador agregado!</div>}
    </div>
  );
}

export default App;
