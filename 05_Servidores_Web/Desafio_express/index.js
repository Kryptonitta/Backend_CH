/*Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
1) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
2) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.
Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
*/

//1) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor

//INSTALAR: express , fs 

// Importando...
import express from 'express';
import Contenedor from './contenedor.js';

// Creando el servidor
const app = express(); //instanciar express (para crear servidor express)
const port = process.env.PORT || 8080; // Creo el puerto que escuchará el servidor con el número que desee
const contenedor = new Contenedor(); // El new me sirve para crear una instancia de la clase Contenedor


//testeando el puerto
app.get('/', (req, res) => {
    res.send('test....');
});

//1) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
app.get("/productos", async (req, res) => {
    res.send(await contenedor.getAll());
});

//2) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
app.get("/productoRandom", async (req, res) => {
    res.send(await contenedor.getRandom());
});

//Escuchar el puerto
app.listen(port, () => {
    console.log(`Servidor creado en el puerto ${port}`);
});