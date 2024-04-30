import React from 'react';

const Alert = ({ mensaje }) => {
    return (
        <div className="alert">
            {mensaje}
        </div>
    );
};

export default Alert;