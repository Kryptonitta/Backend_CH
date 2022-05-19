/*
Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

Ayuda:
Utilizar los métodos diff y format de la librería moment.
*/

const moment = require("moment");

//NOTA: instalé moment en la carpeta de la clase 4 y la misma aparece en el package.json

var today = new moment ("11/04/2021");
var nacimiento = new moment ("08/24/1989");

console.log("Hoy es " + today.format("DD/MM/YYYY"));
console.log("Nací el " + nacimiento.format("DD/MM/YYYY"));

console.log("Desde mi nacimiento pasaron " + moment.duration(today.diff(nacimiento)).asYears() + " años.");
console.log("Desde mi nacimiento pasaron " + moment.duration(today.diff(nacimiento)).asDays() + " dias.");
console.log("Desde mi nacimiento pasaron " + moment.duration(today.diff(nacimiento)).asHours() + " horas.");
console.log("Desde mi nacimiento pasaron " + moment.duration(today.diff(nacimiento)).asMinutes() + " minutos.");
console.log("Desde mi nacimiento pasaron " + moment.duration(today.diff(nacimiento)).asSeconds() + " segundos.");



