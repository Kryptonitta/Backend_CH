const fs = require("fs");

//Leer archivo de forma asyncrona.
let readFile = fs.readFileSync("./test.txt", "utf-8" ); // tf8 formato de codificacion.
console.log(readFile);

//Escribir en el archivo
fs.writeFileSync("./test2.txt", "Creado desde sync.js\n");

let obj = [
    {
        name: "Camilo",
        lastName: "Lindarte",
    },
    {
        name: "Carlos",
        lastName: "Perez",
    },
];

//fs.writeFileSync("./test.json", JSON.stringify(obj, null , 2));

// let readFile2 = fs.readFileSync("./test.txt", { encoding: "utf-8" }); // tf8 formato de codificacion.
// console.log(readFile2);

// //Agregar contenido a mi archivo
fs.appendFileSync("./test.txt", "Agregado desde async.js\n", {
    encoding: "utf-8",
});

// let append2 = fs.appendFileSync("./test.txt", JSON.stringify(obj), {
//   encoding: "utf-8",
// });

// Manejor de errores
let obj2 = [
    {
        noma: "camilo",
        lastName: "Lindarte",
    },
    {
        noma: "camilo",
        lastName: "Lindarte",
    },
    {
        noma: "camilo",
        lastName: "Lindarte",
    },
];

//Crear
try {
    fs.writeFileSync("./objetoDesdeAsync.json", JSON.stringify(obj2, null, 2) + "\n", "utf-8");
} catch {
    console.log("error a crear archivo");
}

try {
    let fR= fs.readFileSync("./objetoDesdeAsync.json", "utf-8");
    console.log(fR)
} catch {
    console.log("error al leer archivo");
}

// //Añadir
// try{
//     fs.appendFileSync("./fileOne.json", "Aca termina el json", { encoding: "utf-8" })
// }catch{
//     console.log("Error al añadir")
// }

// //Borrar
// try{
//     fs.unlinkSync("./fileOne.json")
// }catch{
//     console.log("Error al borra Archivo")
// }