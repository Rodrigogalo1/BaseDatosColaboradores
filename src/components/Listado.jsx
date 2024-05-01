import React, { useState } from 'react';

export const Listado = ({ colaboradores }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Edad</th>
          <th scope="col">Cargo</th>
          <th scope="col">Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.email}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};