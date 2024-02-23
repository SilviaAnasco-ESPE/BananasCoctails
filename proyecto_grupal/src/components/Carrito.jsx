import React, { useState } from 'react';

const Carrito = () => {
    const [carritoVisible, setCarritoVisible] = useState(false);
    const [itemsCarrito, setItemsCarrito] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);

    const pagarClicked = () => {
        alert("Gracias por la compra");
        // Limpiamos el carrito al pagar
        setItemsCarrito([]);
        setTotalCarrito(0);
        ocultarCarrito();
    };

    const hacerVisibleCarrito = () => {
        setCarritoVisible(true);
    };

    const ocultarCarrito = () => {
        setCarritoVisible(false);
    };

    const agregarItemAlCarrito = (titulo, precio) => {
        const nuevoItem = { titulo, precio, cantidad: 1 };
        const nuevoTotal = totalCarrito + parseFloat(precio.replace('$', ''));
        setItemsCarrito([...itemsCarrito, nuevoItem]);
        setTotalCarrito(nuevoTotal);
        hacerVisibleCarrito();
    };

    const eliminarItemCarrito = (indice) => {
        const itemEliminado = itemsCarrito[indice];
        const nuevoTotal = totalCarrito - parseFloat(itemEliminado.precio.replace('$', '')) * itemEliminado.cantidad;
        const nuevosItemsCarrito = itemsCarrito.filter((item, index) => index !== indice);
        setItemsCarrito(nuevosItemsCarrito);
        setTotalCarrito(nuevoTotal);
        ocultarCarritoSiVacio(nuevosItemsCarrito.length);
    };

    const sumarCantidad = (indice) => {
        const nuevosItemsCarrito = [...itemsCarrito];
        nuevosItemsCarrito[indice].cantidad++;
        setItemsCarrito(nuevosItemsCarrito);
        actualizarTotalCarrito(nuevosItemsCarrito);
    };

    const restarCantidad = (indice) => {
        const nuevosItemsCarrito = [...itemsCarrito];
        if (nuevosItemsCarrito[indice].cantidad > 1) {
            nuevosItemsCarrito[indice].cantidad--;
            setItemsCarrito(nuevosItemsCarrito);
            actualizarTotalCarrito(nuevosItemsCarrito);
        }
    };

    const actualizarTotalCarrito = (items) => {
        const nuevoTotal = items.reduce((total, item) => total + parseFloat(item.precio.replace('$', '')) * item.cantidad, 0);
        setTotalCarrito(nuevoTotal);
    };

    const ocultarCarritoSiVacio = (cantidadItems) => {
        if (cantidadItems === 0) {
            ocultarCarrito();
        }
    };

    return (
        <section className={`carrito ${carritoVisible ? 'visible' : ''}`}>
            <section className="header-carrito">
                <h2>Tu Carrito</h2>
            </section>

            <section className="carrito-items">
                {itemsCarrito.map((item, index) => (
                    <div className="carrito-item" key={index}>
                        <span>{item.titulo}</span>
                        <div className="selector-cantidad">
                            <button onClick={() => restarCantidad(index)}>-</button>
                            <input type="text" value={item.cantidad} readOnly />
                            <button onClick={() => sumarCantidad(index)}>+</button>
                        </div>
                        <span className="carrito-item-precio">{item.precio}</span>
                        <button className="btn-eliminar" onClick={() => eliminarItemCarrito(index)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                ))}
            </section>

            <section className="carrito-total">
                <section className="fila">
                    <strong>Tu Total</strong>
                    <span className="carrito-precio-total">{`$${totalCarrito.toFixed(2)}`}</span>
                </section>
                <button className="btn-pagar" onClick={pagarClicked}>
                    Pagar <i className="fa-solid fa-bag-shopping"></i>
                </button>
            </section>
        </section>
    );
};

export default Carrito;
