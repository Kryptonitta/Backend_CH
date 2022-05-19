**CLASE 02: Programación sincrónica y asincrónica**

<<< MANEJO DE ERRORES >>>

- Ante una situación de error, las excepciones se lanzan inmediatamente y se pueden manejar usando try… catch.
- Esta forma de capturar errores se puede utilizar en todas las funciones sincrónicas de acceso al sistema de archivos.

try {
const data = fs.readFileSync('/ruta/que/no/existe')
} catch (err) {
console.log(err)
}

<<< PROMESAS >>>

- El estado inicial de una promesa es:
  - Pendiente (pending)
- Una vez que la operación contenida se resuelve, el estado de la promesa pasa a:
  - Cumplida (fulfilled): la operación salió bien, y su resultado será manejado por el callback asignado mediante el método .then().
  - Rechazada (rejected): la operación falló, y su error será manejado por el callback asignado mediante el método .catch().

**Promesas simples**

```function dividir(dividendo, divisor) {
 return new Promise((resolve, reject) => {
   if (divisor == 0) {
     reject('no se puede dividir por cero')
   } else {
     resolve(dividendo / divisor)
   }
 })
}
```

**Promesas encadenadas**

```
new Promise (function (resolve, reject) {
  setTimeout(() => resolve(1), 1000) ----> La promesa inicial se resuelve en 1 segundo
})
  .then (result => { ----> Llama al controlador .then
    console.log(result)
    return result * 2
  })
    .then (result => {
    console.log(result)
    return result * 2
  })
    .then (result => {
    console.log(result) ----> El valor que devuelve se pasa al próximo .then
    return result * 2
  })
```

<<< OPERACIONES SINCRÓNICAS >>>

- Cuando escribimos más de una instrucción en un programa, esperamos que las instrucciones se ejecuten comenzando desde la primera línea, una por una, de arriba hacia abajo hasta llegar al final del bloque de código.
- Si una instrucción es una llamada a otra función, la ejecución se pausa y se procede a ejecutar esa función.
- Sólo una vez ejecutadas todas las instrucciones de esa función, el programa retomará con el flujo de instrucciones que venía ejecutando antes.

- Las funciones sincrónicas terminan con “Sync”
- Son operaciones bloqueantes que devuelven un resultado
- En todo momento, sólo se están ejecutando las instrucciones de una sola de las funciones a la vez: debe finalizar una función para poder continuar con la otra.
- Es como una secuencia que ocurre en una única línea de tiempo.

<<< PROGRAMACIÓN ASINCRÓNICA >>>

- Para poder usar funciones que realicen operaciones no bloqueantes debemos aprender a usarlas adecuadamente, sin generar efectos adversos en forma accidental.
- Cuando el código que se ejecuta en forma sincrónica, establecer el orden de ejecución consiste en decidir qué instrucción escribir primero.
- Cuando se trata de ejecución asincrónica, sólo sabemos en qué orden comenzarán su ejecución las instrucciones, pero no sabemos en qué momento ni en qué orden terminarán de ejecutarse.

- Se utiliza para poder usar funciones que realicen operaciones no bloqueantes debemos aprender a usarlas adecuadamente, sin generar efectos adversos en forma accidental.
- Cuando el código que se ejecuta en forma sincrónica, establecer el orden de ejecución consiste en decidir qué instrucción escribir primero.
- Cuando se trata de ejecución asincrónica, sólo sabemos en qué orden comenzarán su ejecución las instrucciones, pero no sabemos en qué momento ni en qué orden terminarán de ejecutarse.

**CLASE 03: Manejos de archivos en javascript**

<<< MÓDULO FS >>>

Node.js es una plataforma de desarrollo de software libre, que permite a los desarrolladores crear aplicaciones web, escribir código en JavaScript, y ejecutarlo en un entorno de servidor. FS es un módulo nativo de Node.js que nos permite trabajar con archivos. La mayoría de los métodos de este módulo son sincrónicos, es decir, que se ejecutan en una sola línea de tiempo.

---> https://nodejs.org/docs/latest-v15.x/api/fs.html

- Es la abreviatura en inglés para "file system"
- Sirve para: crear, leer, modificar, etc
- Se utiliza para leer archivos de texto que tenemos en local --> indicando ruta + otros parámetros.
- Lo único que se debe hacer es importarlo al inicio
- Las funciones sincrónicas terminan con “Sync”

Podemos listar algunas de ellas:

- readFileSync: lectura de un archivo en forma sincrónica
- writeFileSync: escritura de un archivo en forma sincrónica
- appendFileSync: actualización de un archivo en forma sincrónica
- unlinkSync: borrado de un archivo en forma sincrónica
- mkdirSync: creación de una carpeta

RECORDAR: el archivo es mejor que esté al mismo nivel. Si es así, se escribe:
---> "./nombreArchivo.tipoDeArchivo"

- PASO 01 --> IMPORTAR EL MÓDULO : node.js utiliza el método require() para importar sus módulos nativos.
  const fs = require('fs');

- PASO 02 --> EJECUTAR LA FUNCIÓN

- Ejemplo: readFile

  fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if(err) {
  console.log('error: ', err);
  } else {
  console.log(data);
  }
  });

- readFileSync: a diferencia del anterior, este bloquea las lineas de código siguientes mientras se ejecuta

  let archivo = fs.readFileSync('archivo2.txt', 'utf-8');

/ --- leer un archivo --- /

> > > let leerArchivo = fs.readFileSync('./archivo2.txt', 'utf-8');

- El primer parámetro es un string con la ruta del archivo que queremos leer
- El segundo parámetro indica el formato de codificación de caracteres con que fue escrito el dato que estamos leyendo --> El formato que utilizaremos con más frecuencia será 'utf-8' (inglés: 8-bit Unicode Transformation Format, español: Formato de Codificación de caracteres Unicode).

/ --- sobreEscribir un archivo --- /

> > > let sobreEscribirArchivo = fs.writeFileSync('./archivo2.txt', "NUEVO TEXTO", 'utf-8')

- El primer parámetro es un string con la ruta del archivo en el que queremos escribir
- El segundo parámetro indica lo que queremos escribir.
- La función admite un tercer parámetro opcional para indicar el formato de codificación de caracteres con que queremos escribir el texto: por defecto 'utf-8'.

IMPORTANTE: Si la ruta provista fuera válida, pero el nombre de archivo no existiera, la función creará un nuevo archivo con el nombre provisto

/ --- agregar contenido a un archivo --- /

> > > let agregarContenidoaArchivo = fs.appendFileSync('archivo2.txt', 'ESTO ES UN AGREGADO','utf-8')

- El primer parámetro es un string con la ruta del archivo al que le queremos agregar contenidos
- El segundo parámetro indica lo que queremos agregar.
- La función admite un tercer parámetro opcional para indicar el formato de codificación de caracteres con que queremos escribir el texto: por defecto 'utf-8'.
- Si la ruta provista fuera válida, pero el nombre de archivo no existiera, la función creará un nuevo archivo con el nombre provisto

/ --- borrar un archivo --- /

> > > let borrarArchivo = fs.unlinkSync ('archivo2.txt')

- El único parámetro es un string con la ruta del archivo que queremos borrar.

<<< FS ASINCRÓNICO : CALLBACKS >>>

- Las funciones asincrónicas tiene el mismo nombre que sus versiones sincrónicas, pero sin la palabra “Sync” al final
- Son operaciones no bloqueantes
- Reciben un nuevo último parámetro: un callback.
- Los callbacks pueden recibir un primer parámetro destinado al error (si lo hubiere) para saber cómo manejarlo y un segundo parámetro, en caso de que la función en cuestión devuelva algún resultado, para indicar qué hacer con el mismo.
- Para manejar los errores que pueden surgir de su ejecución, no será necesario ejecutarlas utilizando try / catch.

* readFile: lectura de un archivo en forma asincrónica
* writeFile: escritura de un archivo en forma asincrónica
* appendFile: actualización de un archivo en forma asincrónica
* unlink: borrado de un archivo en forma asincrónica
* mkdir: creación de una carpeta

<<< FS ASINCRÓNICO: PROMESAS >>>

- El módulo fs nos permite operar tanto de forma sincrónica como asincrónica.
- fs inicialmente ofrecía funciones que reciben un callback para manejar el asincronismo.
- En una actualización de este módulo se agregaron versiones de funciones asincrónicas que en lugar de recibir callbacks, operan mediante promesas con then/catch.
- Posteriormente se incluyó una sintaxis simplificada utilizando las nuevas palabras reservadas “async” y “await”.
