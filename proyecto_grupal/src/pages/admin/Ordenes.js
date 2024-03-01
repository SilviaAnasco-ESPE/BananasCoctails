import React, { Component } from 'react';

class Ordenes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: null
        };
        this.handleMostrarTablas = this.handleMostrarTablas.bind(this);
    }

    componentDidMount() {
        // Llama a la función para mostrar las tablas cuando se monta el componente
        this.handleMostrarTablas();
    }

    handleMostrarTablas() {
        // Realiza la solicitud al servidor para obtener los datos
        fetch('http://localhost:8000/datos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del servidor');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    this.setState({ datos: data.data, error: null });
                } else {
                    throw new Error(data.error);
                }
            })
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    render() {
        const { datos, error } = this.state;

        if (error) {
            console.error('Error:', error);
        }

        return (
            <div>
                <h1>Tabla de Datos</h1>
                <button onClick={this.handleMostrarTablas}>Mostrar Tablas</button>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de Encargo</th>
                            <th>Dirección</th>
                            <th>Comentarios</th>
                            <th>Cantidad</th>
                            <th>Nombre Coctel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((fila, index) => (
                            <tr key={index}>
                                <td>{fila.FECHAENCARGOPO}</td>
                                <td>{fila.DIRECCIONPO}</td>
                                <td>{fila.COMENTARIOSPO}</td>
                                <td>{fila.CANTIDAD}</td>
                                <td>{fila.NOMBREC}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Ordenes;
