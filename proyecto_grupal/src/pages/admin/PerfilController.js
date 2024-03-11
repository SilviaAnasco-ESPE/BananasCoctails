import React, { Component } from "react";
import Menu from "../../components/MenuAdmin";
import PiePagina from "../../components/Footer";

class Ordenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      error: null,
      tipoBusqueda: 0, // 0 para cédula, 1 para ID
      terminoBusqueda: "",
    };
  }

  componentDidMount() {}

  handleMostrarTablas = () => {
    const { tipoBusqueda, terminoBusqueda } = this.state;
    let url = "http://localhost:8000/buscar";
    if (tipoBusqueda !== 0 && terminoBusqueda !== "") {
      url += `?tipo=${tipoBusqueda}&termino=${terminoBusqueda}`;
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
    } else {
      // Manejar el caso cuando no hay término de búsqueda
    }
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
        
        <div>
          <h1>Tabla de Datos</h1>
          <div>
            <select onChange={this.handleTipoBusquedaChange}>
              <option value="0">Buscar por:</option>
              <option value="1">Cédula</option>
              <option value="2">ID</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Buscar"
              value={this.state.terminoBusqueda}
              onChange={this.handleTerminoBusquedaChange}
            ></input>
          </div>
          <div>
            <button onClick={this.handleBuscarClick}>Buscar</button>
          </div>
        </div>

        <table>
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
                <td>{fila.IDUSUARIO}</td>
                <td>{fila.CEDULAU}</td>
                <td>{fila.NOMBREU}</td>
                <td>{fila.APELLIDOU}</td>
                <td>{fila.TELEFONOU}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PiePagina />
      </div>
    );
  }
}

export default Ordenes;
