**CLASE 05: servidores web**

/ ---- NODEMON ---- /

- Nodemon es una utilidad que monitorea los cambios en el código fuente que se esta desarrollando y automáticamente re inicia el servidor.

- Vamos a instalar la dependencia nodemon de forma global usando npm --> npm i -g nodemon

/ ---- MODULO HTTP ---- /

- El módulo http es una librería que nos permite crear servidores web.
- Vamos a instalar la dependencia http de forma global usando npm --> npm i -g http
- Vamos a instalar la dependencia http de forma local usando npm --> npm i http
- Trabaja con el protocolo HTTP, que es el que se utiliza en Internet para transferir datos en la Web.
- Nos va a servir para crear un servidor HTTP que acepte solicitudes desde un cliente web.
- Para poder utilizarlo en nuestro código, tenemos que requerirlo mediante la instrucción require('http') y guardarlo en una variable para su posterior uso --> <const http = require('http')>
- Por ejemplo, una de las tareas implementadas en el módulo HTTP es la de crear un servidor, que se hace con el módulo "createServer()".

--> const server = http.createServer((peticion, respuesta) => {
--> respuesta.end('Hola mundo')
--> })

- La petición por ahora no la usamos, pero contiene datos de la petición realizada.
- La respuesta la usaremos para enviarle datos al cliente que hizo la petición.
- De modo que "respuesta.end()" sirve para terminar la petición y enviarle datos al cliente.

--> const connectedServer = server.listen(8080, () => {
--> console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
--> })

- En el caso de que el servidor pueda escuchar en el puerto 8080, se mostrará un mensaje en la consola.
- En el caso de que el servidor no pueda escuchar en el puerto 8080, se mostrará un error en la consola.

- El código COMPLETO queda así:

.const http = require('http')

.const server = http.createServer((peticion, respuesta) => {
....respuesta.end('Hola mundo')
.})

.const connectedServer = server.listen(8080, () => {
....console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
.})

- Se guarda en un archivo servidor.js (también puede ser otro nombre)
- Se ejecuta con node

<<< ESCUCHANDO PUERTO >>>

1. Vamos desde la línea de comandos a la carpeta donde guardamos el archivo servidor.js y ejecutamos el comando "node" seguido del nombre del archivo que pretendemos ejecutar: node servidor.js
2. En la consola de comandos aparecerá el mensaje que informa que nuestro servidor está escuchando en el puerto 8080.
3. El modo de comprobar si realmente el servidor está escuchando a solicitudes de clientes en dicho puerto es acceder con un navegador a la dirección: http://localhost:8080
4. En la vista del navegador se mostrará el mensaje "Hola mundo!” devuelto por el servidor.

/ ---- MODULO URL ---- /

- El módulo url es una librería que nos permite trabajar con las direcciones URL.
- Vamos a instalar la dependencia url de forma global usando npm --> npm i -g url
- Vamos a instalar la dependencia url de forma local usando npm --> npm i url
- Nos va a servir para trabajar con las direcciones URL.
- Para poder utilizarlo en nuestro código, tenemos que requerirlo mediante la instrucción require('url') y guardarlo en una variable para su posterior uso --> <const url = require('url')>
- Por ejemplo, una de las tareas implementadas en el módulo URL es la de parsear una URL, que se hace con el módulo "parse()".
- Para parsear una URL, necesitamos pasarle la URL que queremos parsear y un objeto de opciones.

/ ---- SERVIDOR EN EXPRESS ---- /

- Express es un framework de Node.js que nos permite crear servidores http.
- Sirve para web y para aplicaciones móviles.
- Vamos a instalar el framework Express de forma global usando npm --> npm install -g express
- Vamos a instalar el framework Express de forma local usando npm --> npm install express
- Trabaja con el protocolo HTTP, que es el que se utiliza en Internet para transferir datos en la Web.
- Nos va a servir para crear un servidor HTTP que acepte solicitudes desde un cliente web.
- Para poder utilizarlo en nuestro código, tenemos que requerirlo mediante la instrucción require('express') y guardarlo en una variable para su posterior uso --> <const express = require('express')>
- Permite personalizar la manera en que se maneja cada petición en forma más simple y rápida.

<<< Express como soporte para servidores REST >>>

- Express nos permite definir, para cada tipo de petición HTTP que llegue a una determinada URL, qué acciones debe tomar, mediante la definición de un callback para cada caso que consideremos necesario incluir en nuestra API.

1. Uso del módulo Express

<const express = require('express')>

<const app = express()>

2. Conexión con el servidor

- Debemos indicar en qué puerto de nuestra computadora queremos que nuestra aplicación comience a escuchar peticiones. Este puerto será de uso exclusivo de nuestro servidor, y no podrá ser compartido con otras aplicaciones.

<const PORT = 8080>

<const server = app.listen(PORT, () => {
....console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})>

3. Manejo de errores

- El argumento "error" que recibimos en el callback del método "listen()" a través del método "on()"

<const PORT = 8080>

<const server = app.listen(PORT, () => {
...console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))>

4. Configuración método GET

- El método "get()" nos permite definir una ruta para una petición HTTP GET.
- El primer argumento es la URL que queremos que el servidor escuche.
- El segundo argumento es un callback que se ejecutará cuando llegue una petición GET a la URL indicada.
- El callback recibirá como primer argumento el objeto "request" que contiene información sobre la petición que se está realizando.
- El callback recibirá como segundo argumento el objeto "response" que contiene información sobre la respuesta que se está enviando al cliente.

<app.get('/', (req, res) => {
...res.send({ mensaje: 'hola mundo' })
})>

- req = request (petición) / res = response (respuesta)
