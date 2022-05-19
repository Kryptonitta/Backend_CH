/*
Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
Entre las 13 y las 19 hs será 'Buenas tardes!'. 
De 20 a 5 hs será 'Buenas noches!'.
*/

//NOTA: npm install http + npm install moment + npm install url

const http = require("http"); // Importamos el módulo http
// const { now } = require("moment");
const moment = require("moment"); // Importamos el módulo moment


const PORT = process.env.PORT || 8070; // Creo el puerto que escuchará el servidor con el número que desee 

//req = request, res = response

//Este es un pedido get por defecto
const server = http.createServer((req, res) => { // Creo el servidor 
    console.log(req.url) // Imprimo la url que se está solicitando

    var start = moment().format("HH:mm"); // Creo la hora de inicio
    console.log("El horario actual es: " + start) // Imprimo la hora de inicio

    //A)'/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.

    if (req.url === "/api") { // Si la url es la raíz
        res.end("<h1 style='color:blue'>Bienvenidos al servidor express</h1>") // Envío el mensaje de respuesta
    }

    //B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'

    if (req.url === "/visitas") { // Si la url es la raíz
        let visitas = 0; // Creo la cantidad de visitas en 0
        res.end("La cantidad de visitas es " + visitas); // Imprimo la cantidad de visitas
    }

    //C '/fyh' donde se devolverá la fecha y hora actual en formato objeto: { fecha: '2020-01-01', hora: '00:00' }

    if (req.url === "/fyh") { // Si la url es la raíz
         let hourNum = parseInt(start); // Creo la hora en número

        console.log(hourNum); // Imprimo la hora en número

        if (hourNum >= 18) { // Si la hora es mayor o igual a las 18
            res.end("Buenas noches, son las " + start + " Horas");
        } else {
            res.end("Buenas tardes o buenos dias, son las " + start + " Horas");
        }
    }
})

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${PORT}`)
});

