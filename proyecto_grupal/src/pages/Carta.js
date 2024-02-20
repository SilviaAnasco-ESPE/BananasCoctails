import React from 'react';
import { Link } from 'react-router-dom';
import logoMenu from '../assets/img/logo.png';
import CartaProductos from '../components/Productos';
import '../assets/css/cartaV2.css';
import Carrito from '../components/Carrito';


const Carta = () => {
    return (
        <>
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

            <section className="contenedor">
                <div id="container-items" className="container-items">
                    <CartaProductos/>
                </div>

                {/* Carrito de Compras */}
                <section className="carrito" id="carrito">
                    <section className="header-carrito">
                        <h2>Tu Carrito</h2>
                    </section>

                    <section className="carrito-items">
                        <Carrito/>
                    </section>

                    <section className="carrito-total">
                        <section className="fila">
                            <strong>Tu Total</strong>
                            <span className="carrito-precio-total"> $0,00 </span>
                        </section>
                        <button className="btn-pagar">
                            Pagar <i className="fa-solid fa-bag-shopping"></i>
                        </button>
                    </section>
                </section>
            </section>
            <footer className="piePagina">
                <p>Banana's Cocktails</p>
                <p>Copyright ©</p>
                <section className="socials">
                    <a
                        style={{ background: 'rgb(61, 131, 221)' }}
                        href="https://www.facebook.com/choilusion"
                        className="fa-brands fa-facebook-f"
                    ></a>
                    <a
                        style={{ background: 'rgb(67, 182, 228)' }}
                        href="https://twitter.com/?lang=es"
                        className="fa-brands fa-twitter"
                    ></a>
                    <a
                        style={{ backgroundImage: 'linear-gradient(to right, #ff8d54, #ff13ff)' }}
                        href="https://www.instagram.com/bananas_cocktails/"
                        className="fa-brands fa-instagram"
                    ></a>
                </section>
            </footer>
        </>
    );
};

export default Carta;
