//import {readFile, writeFile, unlink} from 'fs' //importamos el modulo fs y sus funciones

/* Resumen objetos:
    - Un objeto es una colección de propiedades y métodos.
    - Un objeto es una colección de pares clave/valor.
    - Se le pueden pasar numbers, strings, booleans, arrays, objetos, etc.
*/

const fs = require('fs').promises //importamos el modulo fs
//const fs = require('fs') //Si NO pongo el .promises, tengo que agregarlo en el método que lo usa --> await.fs.promises.readFile(...)

// Creo el objeto con los metodos --> el parámetro que recibe es el archivo que queremos leer --> './archivo.txt'
// module.exports sirve para exportar el objeto.

module.exports = class Contenedor {
    //Creando el constructor
    constructor(nombreArchivo){
        this.archivo = nombreArchivo
        this.array = []
    }

    //Obteniendo todos los productos
    async getAllAsync() {
        try {
            const data = await fs.readFile(this.archivo, 'utf-8') //leemos el archivo y lo guardamos en data
            this.array = JSON.parse(data) //parseamos el archivo y lo guardamos en el array
            // return this.array //retornamos el array
            console.log(this.array) // esto es para que me muestre el array en la consola
        } catch (error) {
            console.log(error)
        }
    }

    //Obteniendo un producto
    async getOneAsync(id) {
        try {
            const data = await fs.readFile(this.archivo, 'utf-8') //leemos el archivo y lo guardamos en data
            this.array = JSON.parse(data) //parseamos el archivo y lo guardamos en el array
            // return this.array.find(producto => producto.id == id) //buscamos el producto por id y lo guardamos en la variable producto
            console.log(this.array.find(producto => producto.id == id)) //esto es para que me muestre el producto en la consola
        } catch (error) {
            console.log(error)
        }
    }

    //Borrar todos los productos
    async deleteAllAsync() {
        try {
            await fs.promises.unlink(this.archivo) //borramos el archivo
            return true
        } catch (error) {
            console.log(error)
        }
    }

    //Borrar un producto
    async deleteOneAsync(id) {
        try {
            const data = await fs.readFile(this.archivo, 'utf-8') //leemos el archivo y lo guardamos en data
            this.array = JSON.parse(data) //parseamos el archivo y lo guardamos en el array
            const producto = this.array.find(producto => producto.id == id) //buscamos el producto por id y lo guardamos en la variable producto
            this.array = this.array.filter(producto => producto.id != id) //filtramos el array y lo guardamos en el array
            await fs.writeFile(this.archivo, JSON.stringify(this.array)) //escribimos el archivo
            // return producto
            console.log(producto) //esto es para que me muestre el producto en la consola
        } catch (error) {
            console.log(error)
        }
    }

    //Guardando el producto
    async saveAsync(obj) {
        //Leer el archivo
        try {
            const data = await fs.readFile(this.archivo, 'utf-8') //fs.promise es una promesa. promise 
            this.array = JSON.parse(data)
        } catch (error) { //si no lo lee hace esto... 
            console.log(error)
        }
        //Agregar el producto al array
        this.array.push(obj)
        //Escribir el archivo
        try {
            await fs.writeFile(this.archivo, JSON.stringify(this.array))
        } catch (error) {
            console.log(error)
        }
    }

    //Obteniendo un producto aleatorio
    async getRandomAsync() {
        try {
            const data = await fs.readFile(this.archivo, 'utf-8') //leemos el archivo y lo guardamos en data
            this.array = JSON.parse(data) //parseamos el archivo y lo guardamos en el array
            const random = Math.floor(Math.random() * this.array.length) //generamos un numero aleatorio entre 0 y el tamaño del array
            // return this.array[random] //retornamos el producto aleatorio
            console.log(this.array[random]) //esto es para que me muestre el producto aleatorio en la consola
        } catch (error) {
            console.log(error)
        }
    }
}

