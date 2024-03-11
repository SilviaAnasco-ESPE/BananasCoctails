import React, { Component } from "react";
import "../../assets/css/ordenes.css";
import Menu from "../../components/MenuAdmin";
import PiePagina from "../../components/Footer";

class Ordenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      error: null,
      tipoBusqueda: 0,
      terminoBusqueda: "",
    };
  }

  componentDidMount() {
    this.handleMostrarTablas();
  }

  handleMostrarTablas = () => {
    const { tipoBusqueda, terminoBusqueda } = this.state;
    let url = "http://localhost:8000/datos";
    if (tipoBusqueda !== 0 && terminoBusqueda !== "") {
      url += `?tipo=${tipoBusqueda}&termino=${terminoBusqueda}`;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          this.setState({ datos: data.data, error: null });
        } else {
          throw new Error(data.error);
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  handleTipoBusquedaChange = (event) => {
    this.setState({ tipoBusqueda: event.target.value });
  };

  handleTerminoBusquedaChange = (event) => {
    this.setState({ terminoBusqueda: event.target.value });
  };

  handleBuscarClick = () => {
    this.handleMostrarTablas();
  };

  render() {
    const { datos, error } = this.state;

    if (error) {
      console.error("Error:", error);
    }

    return (
      <div>
        <Menu />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="background-image">
          <h1 className="tituloTabla">Tabla de Datos</h1>
          <div className="ContenerdorBusqueda">
            <div className="ComboBusqueda">
              <select onChange={this.handleTipoBusquedaChange}>
                <option value="0">Buscar por:</option>
                <option value="1">Fecha de Encargo</option>
                <option value="2">Dirección</option>
                <option value="3">Comentarios</option>
                <option value="4">Cantidad</option>
                <option value="5">Nombre Coctel</option>
              </select>
            </div>
            <div className="Busqueda">
              <input
                type="text"
                placeholder="Buscar"
                className="inputBusqueda"
                value={this.state.terminoBusqueda}
                onChange={this.handleTerminoBusquedaChange}
              ></input>
            </div>
            <div className="BuscarButton">
              <button onClick={this.handleBuscarClick}>Buscar</button>
            </div>
          </div>

          <table className="elegant-table">
            <thead>
              <tr>
                <th>Fecha de Encargo</th>
                <th>Dirección</th>
                <th>Comentarios</th>
                <th>Cantidad</th>
                <th>Nombre Coctel</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((fila, index) => (
                <tr key={index}>
                  <td>{fila.FECHAENCARGOPO}</td>
                  <td>{fila.DIRECCIONPO}</td>
                  <td>{fila.COMENTARIOSPO}</td>
                  <td>{fila.CANTIDAD}</td>
                  <td>{fila.NOMBREC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PiePagina />
      </div>
    );
  }
}

export default Ordenes;
