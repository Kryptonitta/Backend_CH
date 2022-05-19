//Creo constante express para poder requerir la dependencia express que acabo de instalar
const express = require('express');

//Luego guardo en app la ejecucion de express
const app = express();

// En app me van a quedar cargados los metodos de express
// Con app.listen le digo que me abra el puerto 3002
app.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002');
});

// Creo las rutas 

// GET: Obtener datos
// SEND: Enviar datos  
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Creo ruta para que me responda con un estado definido por mi. Naturalmente me devuelve un estado 200 y yo le pido un 300
app.get('/estado', (req, res) => {
    res.sendStatus(300).send('Estado: 200');
})

//PARAMS: se le llama así a los parametros que se le pasan a la ruta --> /:id
app.get('/:id', (req, res) => {
    res.send(`Hola ${req.params.id}`);
}); // --> http://localhost:3002/:id







