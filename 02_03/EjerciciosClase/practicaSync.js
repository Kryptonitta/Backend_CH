const fs = require('fs');

//Lectura (acá me va a leer el archivo, luego lo va a reescribir)
let file = fs.readFileSync('./test.txt', 'utf-8');

console.log(file);

// ESCRIBIR ARCHIVO (acá me va a escribir el archivo)
let probandoWrite = fs.writeFileSync('./test.txt', 'Modificando texto nuevamente', 'utf-8');

console.log(probandoWrite); //me devuelve undefined, está bien eso. Es lo que dice la documentación. Si voy al archivo veré el cambio. 

//>>> INCORPORANDO OBJETOS
//Defino el objeto

let objeto = {
    name: 'Juan',
    age: 23,
}

// -->> fs.writeFileSync('./test.txt', objeto, 'utf-8'); ---> esto me va a dar error ya que no puedo mandar el objeto así suelto

fs.writeFileSync('./test.txt', JSON.stringify(objeto), 'utf-8');

// CREANDO ARCHIVO NUEVO con Write File Sync --> como el archivo no existe se va a crear uno nuevo
//.txt
let fileTxt = fs.writeFileSync('./test2.txt', 'Soy un archivo nuevo', 'utf-8');
//.json
let fileJson = fs.writeFileSync('./test2.json', 'Soy un archivo nuevo', 'utf-8');

console.log(fileTxt); //me devuelve undefined, está bien eso. Es lo que dice la documentación. Si voy al archivo veré el cambio. 

// AÑADIR CONTENIDO AL ARCHIVO
fs.appendFileSync('./test.txt', '\nSoy una línea nueva', 'utf-8');

// BORRAR CONTENIDO
fs.unlinkSync('./test2.txt'); //Me va a borrar el archivo que cree en la linea 27