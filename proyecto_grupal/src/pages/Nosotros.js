import React from 'react';
import '../assets/css/nosotros.css';
import logoMenu from '../assets/img/logo.png';
import Nosotros1 from '../assets/img/Imagenes_Carta/Nosotros1.jpg';
import Nosotros2 from '../assets/img/Imagenes_Carta/Nosotros2.jpeg';
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <div>
            <header className="header">
            <section className="container">
                <section className="btn-menu">
                    <label htmlFor="btn-menu">☰</label>
                </section>
                <section className="logo">
                    <h1>BANANAS COCKTAILS</h1>
                </section>
                <nav className="menu">
                    <Link to = "/">Inicio</Link>
                    <Link to = "/nosotros">Nosotros</Link>
                    <Link to = "/inicio#contacto">Contacto</Link>
                    <Link to = "/login">Iniciar Sesion</Link>
                </nav>
            </section>
        </header>

        <input type="checkbox" id="btn-menu" />

        <aside className="container-menu">
            <section className="cont-menu">
                <header>
                    <center>
                        <img src={logoMenu} width="60%" alt="Logo" />
                    </center>
                </header>
                <nav>
                    <Link to = "/carta">Carta</Link>
                    <Link to = "/paquetes">Paquetes</Link>
                    <a href="#contacto">Nosotros</a>
                    <Link to = "/login">Salir</Link>
                </nav>

                <label htmlFor="btn-menu">✖️</label>
            </section>
        </aside>

        <section className="seccionPrincipal">
    <article>
        <section className="tarjeta">
            <div className="contenido-texto">
                <h3>Un poco sobre nosotros</h3>
                <p>
                    Banana's Cocktails es un servicio de barra móvil y coctelería clásica, que ofrece un enfoque innovador con iluminación led que se ajusta a cualquier tipo de ocasión, tales como:
                </p>
                <ul>
                    <li>Bodas</li>
                    <li>Cumpleaños</li>
                    <li>Eventos corporativos</li>
                    <li>Eventos Deportivos</li>
                    <li>Lanzamiento de marcas</li>
                    <li>Entre otras festividades</li>
                </ul>
                <p>
                    Contamos con más de 6 años de experiencia dentro del mercado, brindando un servicio de excelencia a todos nuestros clientes. Nuestro equipo de bartenders y auxiliares de bar aseguran el cumplimiento de las normas de bioseguridad, servicio ágil de bebidas y por tanto, el total éxito de su evento.
                </p>
                <a href="#">Ver mas</a>
            </div>
            <div className="visual">
                <img src={Nosotros1} alt="" />
            </div>
        </section>
    </article>

    <article>
        <section className="tarjeta">
            <div className="contenido-texto">
                <h3>Como funciona</h3>
                <p>
                    Disponemos de un sistema modular de barras que ofrece la configuración perfecta para su evento sin importar el tamaño del lugar o el número de invitados. Banana's Cocktails cuenta con una carta de cócteles y bebidas mismas que pueden ser con o sin alcohol, con opciones desde las tradicionales hasta las más novedosas, que le darán a su evento un toque de originalidad y encanto. Una vez seleccionados los cócteles y definido el número de personas que asistirán al evento se realiza una cotización o puede elegir un paquete de los que se muestran a continuación.
                </p>
                <a href="#">Ver mas</a>
            </div>
            <div className="visual">
                <img src={Nosotros2} alt="" />
            </div>
        </section>
    </article>

    <h2 className="titulo1">BANANAS COCKTAILS DONDE LA BEBIDA ES LO PRIMERO</h2>
    <section className="contenedorLogo">
        <section className="logo3D"></section>
    </section>
</section>

        <footer className="piePagina">
            <p>Banana's Cocktails</p>
            <p>Copyright ©</p>
            <section className="socials">
                <a style={{ background: 'rgb(61, 131, 221)' }} href="https://www.facebook.com/choilusion" className="fa-brands fa-facebook-f"></a>
                <a style={{ background: 'rgb(67, 182, 228)' }} href="https://twitter.com/?lang=es" className="fa-brands fa-twitter"></a>
                <a style={{ backgroundImage: 'linear-gradient(to right, #ff8d54, #ff13ff)' }} href="https://www.instagram.com/bananas_cocktails/" className="fa-brands fa-instagram"></a>
            </section>
        </footer>
        </div>
    );
}

export default Nosotros;
