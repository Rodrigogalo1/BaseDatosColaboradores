import React, { useState } from 'react';
import Alert from './Alert';

export const Form = ({ agregarColaborador }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [CargoColaborador, setCargoColaborador] = useState('');
    const [TelefonoColaborador, setTelefonoColaborador] = useState('');
    const [error, setError] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [alerta, setAlerta] = useState('');

    const validarInput = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || edad === '' || CargoColaborador === '' || TelefonoColaborador === '') {
            setError(true);
            setAlerta('Debes completar todos los campos');
            setRegistroExitoso(false);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError(true);
            setAlerta('El formato del correo electrónico es incorrecto');
            setRegistroExitoso(false);
            return;
        }

        if (!Number.isInteger(Number(edad)) || edad < 18 || edad > 100) {
            setError(true);
            setAlerta('La edad debe ser mayor a 18 años');
            setRegistroExitoso(false);
            return;
        }

        if (!/^9\d{8}$/.test(TelefonoColaborador)) {
            setError(true);
            setAlerta('El número de teléfono debe comenzar con 9 y tener exactamente 9 dígitos');
            setRegistroExitoso(false);
            return;
        }
       
        setTimeout(() => {
            setRegistroExitoso(true);
            setError(false);
            setAlerta('Colaborador agregado');
            agregarColaborador({ nombre, email, edad, cargo: CargoColaborador, telefono: TelefonoColaborador });
        },);
    };

    return (
        <form action="" onSubmit={validarInput}>
           
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label"></label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre del colaborador"
                    name="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label"></label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email del colaborador"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label"></label>
                <input
                    type="text"
                    className="form-control"
                    id="edad"
                    placeholder="Edad del colaborador"
                    onChange={(e) => setEdad(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Cargocolaborador" className="form-label"></label>
                <input
                    type="text"
                    className="form-control"
                    id="CargoColaborador"
                    placeholder="Cargo del colaborador"
                    onChange={(e) => setCargoColaborador(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="TelefonoColaborador" className="form-label"></label>
                <input
                    type="tel"
                    className="form-control"
                    id="TelefonoColaborador"
                    placeholder="Telefono del colaborador"
                    onChange={(e) => setTelefonoColaborador(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success">Agregar colaborador</button>
            {error && <Alert mensaje={alerta} className="Alert" />}
            {registroExitoso && <div className="registro-exitoso">Colaborador agregado !</div>}
        </form>
    );
};
