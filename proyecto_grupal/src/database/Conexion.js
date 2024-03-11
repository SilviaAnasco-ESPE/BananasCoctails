const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 8000;

const conexion = mysql.createConnection({
  host: "localhost",
  database: "bar_database",
  user: "root",
  password: "",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion exitosa");
  }
});

// Middleware para habilitar CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Reemplaza con la URL de tu aplicación cliente
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//LOGIN-VERIFICACION
app.get("/login", (req, res) => {
  const { usuario, contrasena } = req.query;

  if (!usuario || !contrasena) {
    res
      .status(400)
      .json({ mensaje: "Debe proporcionar tanto usuario como contraseña" });
    return;
  }

  const consulta = `SELECT * FROM usuario WHERE USUARIOU = '${usuario}' AND CONTRASENIAU = '${contrasena}'`;
  conexion.query(consulta, [usuario, contrasena], function (error, resultado) {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      if (resultado && resultado.length > 0) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    }
  });
});

//MOSTAR DATOS Y BUSQUEDA
app.get("/datos", (req, res) => {
  const { tipo, termino } = req.query;

  let consulta3 = `SELECT PO.FECHAENCARGOPO, PO.DIRECCIONPO, PO.COMENTARIOSPO, Ti.CANTIDAD, Cot.NOMBREC
                      FROM pedidoonline AS PO
                      JOIN relationship_6 AS Ti ON PO.IDPEDIDOONLINE = Ti.IDPEDIDOONLINE
                      JOIN coctel AS Cot ON Cot.IDCOCTEL = Ti.IDCOCTEL`;

  if (tipo && termino) {
    switch (parseInt(tipo)) {
      case 1:
        consulta3 += ` WHERE PO.FECHAENCARGOPO LIKE '%${termino}%'`;
        break;
      case 2:
        consulta3 += ` WHERE PO.DIRECCIONPO LIKE '%${termino}%'`;
        break;
      case 3:
        consulta3 += ` WHERE PO.COMENTARIOSPO LIKE '%${termino}%'`;
        break;
      case 4:
        consulta3 += ` WHERE Ti.CANTIDAD LIKE '%${termino}%'`;
        break;
      case 5:
        consulta3 += ` WHERE Cot.NOMBREC LIKE '%${termino}%'`;
        break;
      default:
        break;
    }
  }

  conexion.query(consulta3, function (error, resultado) {
    if (error) {
      res.status(500).json({ success: false, error: error.message });
    } else {
      const data = resultado.map((row) => ({
        FECHAENCARGOPO: row.FECHAENCARGOPO,
        DIRECCIONPO: row.DIRECCIONPO,
        COMENTARIOSPO: row.COMENTARIOSPO,
        CANTIDAD: row.CANTIDAD,
        NOMBREC: row.NOMBREC,
      }));
      res.json({ success: true, data: data });
    }
  });
});

/*REGISTRAR USUARIO */
app.post("/insertar", (req, res) => {
  const { usuario, contrasena, nombre, apellido, telefono, cedula } = req.query;

  if (!usuario || !contrasena || !nombre || !apellido || !telefono || !cedula) {
    res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
    return;
  }
  const consulta2 = `INSERT INTO usuario (USUARIOU, CONTRASENIAU, NOMBREU, APELLIDOU, TELEFONOU, CEDULAU) VALUES ('${usuario}', '${contrasena}', '${nombre}', '${apellido}', '${telefono}', '${cedula}')`;
  conexion.query(
    consulta2,
    [usuario, contrasena, nombre, apellido, telefono, cedula],
    function (error, resultado) {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.json({ success: true });
      }
    }
  );
});

//Busqueda por nombre cliente
app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { usuario, contrasena, nombre, apellido, telefono, cedula } = req.body;

  const consulta = `UPDATE usuario 
                    SET USUARIOU = ?, CONTRASENIAU = ?, NOMBREU = ?, APELLIDOU = ?, TELEFONOU = ?, CEDULAU = ?
                    WHERE IDUSUARIO = ?`;

  conexion.query(consulta, [usuario, contrasena, nombre, apellido, telefono, cedula, id], function (error, resultado) {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.json({ success: true, mensaje: "Usuario actualizado correctamente" });
    }
  });
});
/*
app.get("/buscar", (req, res) => {
  const { tipo, termino } = req.query;

  let consultaSQL = "SELECT * FROM usuario";
  let parametros = [];

  if (tipo && termino) {
    switch (parseInt(tipo)) {
      case 1:
        consultaSQL += " WHERE IDUSUARIO = ?";
        parametros.push(termino);
        break;
      case 2:
        consultaSQL += " WHERE CEDULAU = ?";
        parametros.push(termino);
        break;
      default:
        break;
    }
  }

  conexion.query(consultaSQL, parametros, function (error, resultado) {
    if (error) {
      res.status(500).json({ success: false, error: error.message });
    } else {
      if (resultado && resultado.length > 0) {
        const usuariosEncontrados = resultado.map(usuario => ({
          id: usuario.IDUSUARIO,
          usuario: usuario.USUARIOU,
          contrasena: usuario.CONTRASENIAU,
          nombre: usuario.NOMBREU,
          apellido: usuario.APELLIDOU,
          telefono: usuario.TELEFONOU,
          cedula: usuario.CEDULAU,
        }));
        res.json({ success: true, usuarios: usuariosEncontrados });
      } else {
        res.json({ success: false });
      }
    }
  });
});*/

app.get("/buscar", (req, res) => {
  const { tipo, termino } = req.query;

  let consulta3 = `SELECT U.IDUSUARIO, U.CEDULAU, U.NOMBREU, U.APELLIDOU, U.TELEFONOU
                    FROM usuario AS U`;

  if (tipo && termino) {
    switch (parseInt(tipo)) {
      case 1:
        consulta3 += ` WHERE U.IDUSUARIO = '${termino}'`;
        break;
      case 2:
        consulta3 +=` WHERE U.CEDULAU = '${termino}'`;
      default:
        break;
    }
  }

  conexion.query(consulta3, function (error, resultado) {
    if (error) {
      res.status(500).json({ success: false, error: error.message });
    } else {
      const data = resultado.map((row) => ({
        ID: row.IDUSUARIO,
        CEDULA: row.CEDULAU,
        NOMBRE: row.NOMBREU,
        APELLIDO: row.APELLIDOU,
        TELEFONO: row.TELEFONOU,
      }));
      res.json({ success: true, data: data });
    }
  });
});




app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
