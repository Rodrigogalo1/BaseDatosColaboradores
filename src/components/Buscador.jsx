import React from 'react';

const Buscador = ({ onBuscar }) => {
  const handleChange = (e) => {
    const termino = e.target.value;
    onBuscar(termino);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador"
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;