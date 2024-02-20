import React, { useState, useEffect } from 'react';
import '../App.css';

const Reloj = () => {
    const [horaActual, setHoraActual] = useState('');

    useEffect(() => {
        const mostrarHora = () => {
            const fecha = new Date();
            const horas = String(fecha.getHours()).padStart(2, '0');
            const minutos = String(fecha.getMinutes()).padStart(2, '0');
            const segundos = String(fecha.getSeconds()).padStart(2, '0');
            setHoraActual(`${horas}:${minutos}:${segundos}`);
        };

        const intervalId = setInterval(mostrarHora, 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []); // El efecto se ejecutará solo una vez al montar el componente

    return (
        <div id="reloj" className="relojEstilo">
            {horaActual}
        </div>
    );
};

export default Reloj;
