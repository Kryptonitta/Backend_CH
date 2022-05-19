/* EJERCICIO:
a) Guardar un archivo llamado fyh.txt la fecha y hora actual.
b) Leer el archivo y mostrarlo en la consola.
c) Incluir el manejo de errores con try-catch. */

const fs = require("fs");

const fecha = () => {
    let today = new Date();

    // obtengo la fecha del sistema
    let fecha = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
    // obtengo la hora del sistema
    let hour = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // creo una variable con la fecha y hora
    let dateAndHour = fecha + " " + hour;
    // retorno la fecha y hora
    return dateAndHour;
};

//Crear Archivo

try {
    // Creo el archivo
    fs.writeFileSync("fecha.txt", fecha(), "utf-8"); 
    // Leo el archivo
    let fileread = fs.readFileSync("./fecha.txt", "utf-8");

    console.log(fileread);
} catch (err) {
    throw "Error en lectura"; // Acá le digo que si hay un error me diga "Error en lectura"
}