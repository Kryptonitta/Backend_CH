/*Desarrollar un proyecto en node.js que declare un array de objetos 
Y obtenga la siguiente información de dicho array
A) Los nombres de los productos en un string separados por comas.
B) El precio total
C) El precio promedio
D) El producto con menor precio
E) El producto con mayor precio
F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

Aclaración: todos los valores monetarios serán expresados con 2 decimales
*/

//Declaro el array de objetos
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

//A) DEVOLVER LOS NOMBRES SEPARADOS POR COMAS

//Recorro el array de objetos con un map y le digo que me devuelva los nombres de los productos
let arrNom =  productos.map(x => {
    return x.nombre
})

//Creo una variable para guardar el string de los nombres separándolos con una coma
let stringNames = arrNom.join(",")
console.log(stringNames)

let ac = 0

//B) EL PRECIO TOTAL
//Recorro el array de objetos con un map y le digo que me devuelva el precio de los productos. 
let precio = productos.map((x) => {
    return x.precio
    
})

console.log("Los precios de los productos son: "+precio)

//Le digo que reduzca los valores a una sola variable. 
let suma = precio.reduce((ac, x) => {
    return ac + x
}, 0)

let sumaP=suma.toPrecision(6)

console.log("La suma total es: $"+sumaP)
console.log(typeof(sumaP))

//C) EL PRECIO PROMEDIO
let promedio = suma / productos.length
console.log("El precio promedio es: $"+promedio)

//D) EL PRODUCTO CON MENOR PRECIO --> no entiendo por que no me funciona
//Ternario -->  CONDICION ? TRUE : FALSE
let menor = productos.reduce((ac, x) => {
    return ac < x.precio & ac!=0 ? ac :x.precio 
}
, 0)

console.log("El menor precio es: $"+menor)

//E) EL PRODUCTO CON MAYOR PRECIO
let mayor = productos.reduce((ac, x) => {
    return ac > x.precio ? ac : x.precio
}
, 0)

console.log("El mayor precio es: $"+mayor)

//F) CON LOS DATOS DE LOS PUNTOS 1 AL 5 CREAR UN OBJETO Y REPRESENTARLO POR CONSOLA
let objeto = {
    nombres: stringNames,
    precioTotal: sumaP,
    precioPromedio: promedio,
    productoMenor: menor,
    productoMayor: mayor
}

console.log(objeto)