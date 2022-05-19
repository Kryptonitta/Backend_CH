**Express avanzado**
Express es un framework de Node.js que nos permite crear aplicaciones web.

- Cliente: es quien envia la peticion al servidor.
- Servidor: es el que recibe la peticion y la procesa.

- Requests: son las peticiones que se envian al servidor. Las realiza el cliente.
- Responses: son las respuestas que se envian al cliente. Las realiza el servidor.

<<< HTTPS >>>

- Http es un protocolo de comunicacion.
- Get: peticiones que no necesitan datos. Las realiza el cliente.
- Post: peticiones que necesitan datos. Las realiza el cliente. Ej: formularios.
- Put: peticiones con actualizacion de datos. Las realiza el cliente.
- Delete: peticiones para eliminar datos. Las realiza el cliente.

// Códigos de estado //

Los códigos de estado son una serie de números que indican el estado de la petición. Son usados por el servidor para indicar el estado de la petición. Es la respuesta que se envía al cliente.

- Nosotros podemos ver los estados desde la pestaña network de Chrome.

1xx: Información --> la petición está siendo procesada.
2xx: Éxito --> la petición se ha completado con éxito.
3xx: Redirección --> la petición se ha completado con éxito pero se debe redirigir a otra dirección.
4xx: Error del cliente --> la petición tuvo un error y no pudo ser procesada.
5xx: Error del servidor --> el servidor falló al procesar la petición.

cliente --> send a request <- JSON -> http methods <- HTTP -> server sends a response <-- server

<<< CONCEPTOS: API / REST / API REST >>>

API: es una interfaz de comunicación entre el cliente y el servidor.
REST/SOAP: es la lógica detrás de la API. Es una serie de reglas que definen el comportamiento de la API. Devuelve la info en formato JSON o XML.
API REST: una api rest es una api que se basa en la lógica REST.

JSON: devuelve objetos en formato JSON. Nuestro trabajo es manejar estos objetos.
XLM: es la manera que se utilizaba antes de JSON pero era complicado de manejar.

_Api REST_ :

- Se utiliza exclusivamente para obtener datos mediante peticiones HTTP.
- Para que una API se considere REST debe cumplir las características:

1. arquitectura cliente - servidor sin estado
2. cacheable
3. operaciones comunes
4. interfaz uniforme
5. utilización de hipermedios

<<< POSTMAN >>>

- Es un programa que nos permite hacer pruebas de nuestras peticiones.
- Si bien podemos probar get en el navagador, no podemos probar post ni put ni delete.
- Postman se puede instala o usar en la pestaña de desarrollo.
- https://web.postman.co/
