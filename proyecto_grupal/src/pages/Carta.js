import React from 'react';
import CartaProductos from '../components/Productos';
import '../assets/css/cartaV2.css';
import Carrito from '../components/Carrito';
import Menu from '../components/Menu';
import PiePagina from '../components/Footer';


const Carta = () => {
    return (
        <>
            <Menu />

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
            <PiePagina />
        </>
    );
};

export default Carta;
