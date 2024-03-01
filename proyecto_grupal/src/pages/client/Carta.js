import React, { Component } from 'react';
import CartaProductos from '../../components/Productos';
import Menu from '../../components/Menu';
import PiePagina from '../../components/Footer';
import Menucliente from '../../components/MenuCliente';

class Carta extends Component {
    render() {
        return (
            <div>
                 <>
            <Menucliente/>
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
            </div>
        );
    }
}

export default Carta;