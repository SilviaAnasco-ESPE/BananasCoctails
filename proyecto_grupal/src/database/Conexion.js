const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5500;

const conexion = mysql.createConnection({
    host: "localhost",
    database: "bar_database",
    user: "root",
    password: ""
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexion exitosa");
    }
});

// Middleware para habilitar CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Reemplaza con la URL de tu aplicación cliente
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Verfificar si existe
// Endpoint para la autenticación
app.get('/login', (req, res) => {
    const { usuario, contrasena } = req.query;

    if (!usuario || !contrasena) {
        res.status(400).json({ mensaje: "Debe proporcionar tanto usuario como contraseña" });
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

app.get('/datos', (req, res) => {
    const consulta3 = `SELECT PO.FECHAENCARGOPO, PO.DIRECCIONPO, PO.COMENTARIOSPO, Ti.CANTIDAD, Cot.NOMBREC
                      FROM pedidoonline AS PO
                      JOIN relationship_6 AS Ti ON PO.IDPEDIDOONLINE = Ti.IDPEDIDOONLINE
                      JOIN coctel AS Cot ON Cot.IDCOCTEL = Ti.IDCOCTEL`;
    
    conexion.query(consulta3, function (error, resultado) {
        if (error) {
            res.status(500).json({ success: false, error: error.message });
        } else {
            const data = resultado.map(row => ({
                FECHAENCARGOPO: row.FECHAENCARGOPO,
                DIRECCIONPO: row.DIRECCIONPO,
                COMENTARIOSPO: row.COMENTARIOSPO,
                CANTIDAD: row.CANTIDAD,
                NOMBREC: row.NOMBREC
            }));
            res.json({ success: true, data: data });
        }
    });
});



app.post('/insertar',(req,res) => {
    const { usuario, contrasena, nombre,
    apellido, telefono, cedula} = req.query;

    if (!usuario || !contrasena || !nombre || !apellido || !telefono || !cedula) {
        res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        return;
    }
   // INSERT INTO `usuario`(`IDUSUARIO`, `USUARIOU`, `CONTRASENIAU`, `NOMBREU`, `APELLIDOU`, `TELEFONOU`, `CEDULAU`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')
    const consulta2 = `INSERT INTO usuario (USUARIOU, CONTRASENIAU, NOMBREU, APELLIDOU, TELEFONOU, CEDULAU) VALUES ('${usuario}', '${contrasena}', '${nombre}', '${apellido}', '${telefono}', '${cedula}')`;
    conexion.query(consulta2,[usuario, contrasena,
    nombre, apellido, telefono, cedula], function (error, resultado) {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
