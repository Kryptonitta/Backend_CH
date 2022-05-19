//Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas. Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. 

//A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.

const express = require('express');
const app = express();

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor creado con express corriendo en el puerto: ${PORT}`);
});

app.get('/', (req, res) => {
    res.end('<h1 style="color:blue">Bienvenidos al servidor express</h1>');
});

//B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'

app.get('/visitas', (req, res) => {
    let contador = 0;
    contador++;
    res.send(`La cantidad de visitas es ${contador}`);
});
//C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: { fyh: '11/1/2021 11:36:04' }

app.get('/fyh', (req, res) => {
    let date = new Date();
    let fyh = date.toLocaleString();
    res.send({ fyh });
});

//En caso de error, representar el detalle.
server.on('error', (err) => {
    console.log(err);
});





const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

//Routes


