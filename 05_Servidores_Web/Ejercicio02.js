// Crear un proyecto de servidor http en node.js que utilice la dependencia express

const express = require('express');
const app = express();

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor creado con express corriendo en el puerto: ${PORT}`);
});
server.on('error', (err) => {
    console.log(err);
});

