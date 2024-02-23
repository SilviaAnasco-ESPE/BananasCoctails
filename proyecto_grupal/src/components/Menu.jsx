import React from 'react';
import '../assets/css/index.css';
import '../assets/css/estiloBase.css';
import logoMenu from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function menu() {
    return (
        <div className="App">
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
            <Link to = "/inicio#contacto">Conctacto</Link>
            <Link to = "/login">Iniciar Sesion</Link>
          </nav>
        </section>
      </header>

      <input type="checkbox" id="btn-menu" />

      <aside className="container-menu">
        <section className="cont-menu">
          <header>
            <center>
              <img src={logoMenu} width="60%" />
            </center>
          </header>
          <nav>
            <Link to = "/carta">Carta</Link>
            <Link to = "/paquetes">Paquetes</Link>
            <Link to = "/nosotros">Nosotros</Link>
            <Link to = "/login">Salir</Link>
          </nav>
         

          <label htmlFor="btn-menu">✖️</label>
        </section>
      </aside>

    </div>
    )
    
}
export default menu;
