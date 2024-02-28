const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8000;

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

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
