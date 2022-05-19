//CONSIGNA: Crear un script de node js que nos permite calcular la suma, resta multiplicacion, división y  módulo de dos números que se pasan como argumento del script.

var params = process.argv.slice(2); //acá le digo que solo use los dos primeros parámetros que se le pasen
let numero01 = parseInt(params[0]); //con parseInt le digo que convierta el string a un entero
let numero02 = parseInt(params[1]);

let suma = numero01 + numero02;
let resta = numero01 - numero02;
let division = numero01 / numero02;
let modulo = numero01 % numero02;

console.log(suma);
console.log(resta);
console.log(division);
console.log(modulo);

//el archivo corre con --> npm run e01 20 15 

// 20 y 15 son los números que se pasan. Pueden modificarse.