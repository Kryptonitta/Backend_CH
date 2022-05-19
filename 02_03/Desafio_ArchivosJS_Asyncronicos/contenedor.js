/* Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:
● save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
● getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
● getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
● deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
● deleteAll(): void - Elimina todos los objetos presentes en el archivo. 
El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
- Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
- Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
- Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
- Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído.
*/

// import Contenedor from "./appAsync.js"
const Contenedor = require("./appAsync.js")

// INICIO
// Esto solo es para el caso de crear un nuevo producto
// const nuevoProducto = 
//     {
//         title: 'Pidget',                                                                                                                          
//         price: 300,                                                                                                                                     
//         thumbnail: 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pidgey-512.png',                                   
//         id: 3 
//     }

const producto = new Contenedor('productos.txt')
//FIN

//producto.save(nuevoProducto) // Guardamos el nuevo producto

// producto.getOneAsync(4) // Buscamos el producto con id 4
producto.getAllAsync() // Obtenemos todos los productos
// producto.deleteOneAsync(2) // Eliminamos el producto con id 2
// producto.deleteAllAsync() // Eliminamos todos los productos
// producto.saveAsync() // Obtenemos todos los productos
// producto.getRandomAsync() // Obtenemos un producto aleatorio
