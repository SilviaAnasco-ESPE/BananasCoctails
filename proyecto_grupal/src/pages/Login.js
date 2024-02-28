import React, { useState } from "react";
import '../assets/css/login.css';
import logoMenu from '../assets/img/logo.png';

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        try {
            const response = await fetch(`http://localhost:8000/login?usuario=${usuario}&contrasena=${contrasena}`);

            const data = await response.json();
            
            if (data.success) { // Verifica si la autenticación fue exitosa
                setLoggedIn(true);
                // Redirigir a la página deseada
                window.location.href = "/";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar iniciar sesión');
        }
    };

    return (
        <div className="login-body">
            <section className="login-wrapper">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-title">Inicio</h1>
                    <section className="login-inp">
                        <input
                            type="text"
                            name="usuario"
                            className="login-input"
                            placeholder="Usuario"
                            onChange={(e) => setUsuario(e.target.value)}
                            value={usuario}
                        />
                        <i className="fa-regular fa-user"></i>
                    </section>
                    <section className="login-inp">
                        <input
                            type="password"
                            name="contrasena"
                            className="login-input"
                            placeholder="Contraseña"
                            onChange={(e) => setContrasena(e.target.value)}
                            value={contrasena}
                        />
                       <i class="fa-solid fa-unlock"></i>
                    </section>
                    <input className="login-submit" type="submit" value="Iniciar Sesión" />
                    <p className="login-footer">¿No tienes cuenta?
                        <a href="./SignUp.html" className="login-link">Por favor regístrate</a>
                    </p>
                </form>
                <section></section>
                <section className="login-banner">
                    <h1 className="login-wel_text">Bienvenido</h1>
                    <img src={logoMenu} alt="Logo" className="login-img"/>
                    <br />
                    <p className="login-para">Ingresa tu usuario</p>
                </section>
            </section>
        </div>
    );
}

export default Login;
