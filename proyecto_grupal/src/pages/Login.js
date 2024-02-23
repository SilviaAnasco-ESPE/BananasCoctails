import React, { useState } from "react";
import '../assets/css/login.css';
import logoMenu from '../assets/img/logo.png';

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes agregar la lógica de validación de usuario y contraseña
        const credencialesValidas = usuario === "miguel@gmail" && contraseña === "luis";

        if (credencialesValidas) {
            setLoggedIn(true);
            // Redirigir a la página deseada
            window.location.href = "/";
        } else {
            alert("Credenciales incorrectas");
        }
    };

    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
    };

    const handleContraseñaChange = (event) => {
        setContraseña(event.target.value);
    };

    if (loggedIn) {
        // Si el usuario está autenticado, podrías redirigir a la ruta deseada aquí
        // Redirigir a la página deseada
        window.location.href = "/";
    }

    return (
        <div className="login-body">
            <section className="login-wrapper">
                <form action="../formularios/validar.php" className="login-form" method="post" onSubmit={handleSubmit}>
                    <h1 className="login-title">Inicio</h1>
                    <section className="login-inp">
                        <input
                            type="text"
                            name="usuario"
                            className="login-input"
                            placeholder="Usuario"
                            value={usuario}
                            onChange={handleUsuarioChange}
                        />
                        <i className="fa-regular fa-user"></i>
                    </section>
                    <section className="login-inp">
                        <input
                            type="password"
                            name="contraseña"
                            className="login-input"
                            placeholder="Contraseña"
                            value={contraseña}
                            onChange={handleContraseñaChange}
                        />
                        <i className="fa-regular fa-lock"></i>
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
