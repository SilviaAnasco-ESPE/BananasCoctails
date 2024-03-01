import React, { Component } from 'react';
import '../assets/css/registro.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            contrasena: '',
            nombre: '',
            apellido: '',
            telefono: '',
            cedula: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { usuario, contrasena, nombre, apellido, telefono, cedula } = this.state;
            const response = await fetch(`http://localhost:8000/insertar?usuario=${usuario}&contrasena=${contrasena}&nombre=${nombre}&apellido=${apellido}&telefono=${telefono}&cedula=${cedula}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario, contrasena, nombre, apellido, telefono, cedula })
            });
            
            const data = await response.json();
            /*console.log(data); // Imprime la respuesta del servidor*/
            alert('Usuario registrado exitosamente');
            window.location.href = "/login";
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <div>
                <div className="cuerpo">
                    <div className="register-container">
                        <header className="titulo">Ingresa tus datos</header>
                        <form onSubmit={this.handleSubmit} className="grid-container">
                            <div className='input-box'>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Usuario"
                                    name="usuario"
                                    value={this.state.usuario}
                                    onChange={this.handleChange}
                                />
                                <i className="fa-solid fa-user-secret"></i>
                            </div>
                            <div className='input-box'>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Contraseña"
                                    name="contrasena"
                                    value={this.state.contrasena}
                                    onChange={this.handleChange}
                                />
                                <i className="fa-solid fa-user-lock"></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Nombre"
                                    name="nombre"
                                    value={this.state.nombre}
                                    onChange={this.handleChange}
                                />
                                <i className="fa-solid fa-address-card"></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Apellido"
                                    name="apellido"
                                    value={this.state.apellido}
                                    onChange={this.handleChange}
                                />
                                <i className="fa-solid fa-image-portrait"></i>
                            </div>
                            <div className='input-box'>
                                <input
                                    type='text'
                                    className='input-field'
                                    placeholder='Telefono'
                                    name="telefono"
                                    value={this.state.telefono}
                                    onChange={this.handleChange}
                                />
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Cedula"
                                    pattern="[0-9]{10}"
                                    title="Ingrese una cédula válida de 10 dígitos"
                                    name="cedula"
                                    value={this.state.cedula}
                                    onChange={this.handleChange}
                                />
                                <i className="fa-solid fa-id-card-clip"></i>
                            </div>
                            <input
                                type="submit"
                                className="submit1"
                                value="Registrarse"
                            />
                        </form>
                        <div className="two-col">
                            <div className="one">
                                <input type="checkbox" id="register-check" />
                                <label htmlFor="register-check">Recuérdame</label>
                                <br />
                            </div>
                            <div className="two">
                                <label>
                                    <a href="#">Términos y condiciones</a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
