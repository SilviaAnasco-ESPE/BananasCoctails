import React, { useState } from 'react';

const Carrito = () => {
    const [carritoItems, setCarritoItems] = useState([]);
    const [carritoVisible, setCarritoVisible] = useState(false);
    const [totalCarrito, setTotalCarrito] = useState(0);

    const agregarItemAlCarrito = (titulo, precio, imagenSrc) => {
        const nuevoItem = {
            titulo: titulo,
            precio: precio,
            imagenSrc: imagenSrc,
            cantidad: 1
        };

        // Verificar si el ítem ya está en el carrito
        const encontrado = carritoItems.find(item => item.titulo === titulo);
        if (encontrado) {
            encontrado.cantidad++;
            setCarritoItems([...carritoItems]);
        } else {
            setCarritoItems([...carritoItems, nuevoItem]);
        }

        actualizarTotalCarrito();
        hacerVisibleCarrito();
    };

    const eliminarItemCarrito = (titulo) => {
        const nuevoCarrito = carritoItems.filter(item => item.titulo !== titulo);
        setCarritoItems(nuevoCarrito);
        actualizarTotalCarrito();
        ocultarCarrito();
    };

    const sumarCantidad = (titulo) => {
        const nuevoCarrito = carritoItems.map(item => {
            if (item.titulo === titulo) {
                item.cantidad++;
            }
            return item;
        });
        setCarritoItems(nuevoCarrito);
        actualizarTotalCarrito();
    };

    const restarCantidad = (titulo) => {
        const nuevoCarrito = carritoItems.map(item => {
            if (item.titulo === titulo && item.cantidad > 1) {
                item.cantidad--;
            }
            return item;
        });
        setCarritoItems(nuevoCarrito);
        actualizarTotalCarrito();
    };

    const hacerVisibleCarrito = () => {
        setCarritoVisible(true);
    };

    const ocultarCarrito = () => {
        if (carritoItems.length === 0) {
            setCarritoVisible(false);
        }
    };

    const pagarClicked = () => {
        alert("Gracias por la compra");
        setCarritoItems([]);
        setTotalCarrito(0);
        ocultarCarrito();
    };

    const actualizarTotalCarrito = () => {
        let total = 0;
        carritoItems.forEach(item => {
            total += parseFloat(item.precio) * item.cantidad;
        });
        setTotalCarrito(total);
    };

    return (
        <div className={`carrito ${carritoVisible ? '' : 'oculto'}`}>
            <div className="carrito-items">
                {carritoItems.map((item, index) => (
                    <div key={index} className="carrito-item">
                        <img src={item.imagenSrc} width="80px" alt="" />
                        <div className="carrito-item-detalles">
                            <span className="carrito-item-titulo">{item.titulo}</span>
                            <div className="selector-cantidad">
                                <button className="restar-cantidad" onClick={() => restarCantidad(item.titulo)}>-</button>
                                <input type="text" value={item.cantidad} className="carrito-item-cantidad" disabled />
                                <button className="sumar-cantidad" onClick={() => sumarCantidad(item.titulo)}>+</button>
                            </div>
                            <span className="carrito-item-precio">{item.precio}</span>
                        </div>
                        <button className="btn-eliminar" onClick={() => eliminarItemCarrito(item.titulo)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="carrito-total">
                <strong>Tu Total</strong>
                <span className="carrito-precio-total"> ${totalCarrito.toFixed(2)}</span>
                <button className="btn-pagar" onClick={pagarClicked}>Pagar</button>
            </div>
        </div>
    );
};

export default Carrito;
