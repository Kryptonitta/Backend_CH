**CLASE O4: Administrador de paquetes NPM**

- Node.js es un entorno de tiempo de ejecución de JavaScript.
- Node.js fue creado por los desarrolladores originales de JavaScript e incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript por fuera del navegador.
- Se basa en el motor de tiempo de ejecución JavaScript V8, el mismo que usa Chrome para convertir el Javascript en código máquina.

<<< Escribir nuestro primer programa en Node.js >>>

- Node.js 16.x.x https://nodejs.org/es/ --> para saber si está instalado, en consola pongo "node -v"
- Visual Studio code https://code.visualstudio.com/
- Git https://git-scm.com/ (seleccionar la instalación de git bash si corresponde, ver próximo punto).
- Una consola (elegir una según corresponda):
  - PowerShell (Windows 10, ya viene instalada)
  - Cmder mini (Windows < 10) https://cmder.net/
  - Git Bash (se descarga junto con Git)

/ ---- Node.js: ejecución desde archivo js ---- /

1. Crear una carpeta de proyecto
2. Abrir la carpeta con el vscode
3. Crear un archivo llamado main.js dentro de esa carpeta
4. Escribir código en main.js y guardarlo.
5. Abrir una terminal (la que hayan elegido), ya sea en forma externa o desde dentro del vscode.
6. Ejecutar el programa desde la terminal corriendo la instrucción: node main.js

/ ----- Módulos nativos en JS ---- /

- Un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar.
- Node.js posee varios módulos incorporados (nativos) compilados en binario. Estos módulos básicos están definidos en el código fuente de Node en la carpeta lib/.
- Los módulos básicos tienen la preferencia de cargarse primero si su identificador es pasado desde require().
- Por ejemplo, require('fs') siempre devolverá lo construido en el módulo fs (FileSystem), incluso si hay un fichero con ese nombre.

/ ----- NPM ---- /

NodeJS cuenta con su propio Administrador de Paquetes: NPM (NodeJS Package Manager).

Las dependencias pueden instalarse en forma global o local.

- Si instalamos una dependencia en forma global, todos nuestros programas desarrollados en NodeJS contarán con esa librería, y con la versión que haya sido instalada --> en normal que en este caso nos pida permisos de ADMINISTRADOR
- En cambio, si instalamos en forma local, podremos elegir exactamente qué librería y con qué versión contará cada proyecto que desarrollemos.

---> GLOBAL: npm install -g <nombre_paquete>
---> LOCAL: npm install <nombre_paquete>

<<< IMPORTANTE >>>

- La instalación local de dependencias es la opción es la más recomendable, para poder tener múltiples proyectos usando distintas versiones de una misma librería sin generar problemas de compatibilidad al actualizar a una nueva versión que no sea retrocompatible con las anteriores.

- Sin embargo, muchas veces es útil instalar en forma global librerías utilitarias (por ejemplo librerías de testing) que son usadas para facilitar las tareas de programación y revisión durante la etapa de desarrollo pero que no son necesarias para el uso de la aplicación.

/ ----- ARCHIVO PACKAGE.JSON ---- /

1. Se crea mediante el comando: npm init
2. Se crea un archivo package.json en la carpeta raíz del proyecto
3. Se escribe en el archivo package.json el nombre del proyecto, la versión, la descripción, la licencia, los autores, los dependencias, etc.
4. En package.json se puede escribir un archivo de configuración de scripts que se ejecutará al ejecutar el comando --> npm run <nombre_script> <> "nombreCualquiera": "node nombredearchivo.js",
5. Podemos especificar en este archivo la lista de dependencias, que son las librerías que usa el proyecto para funcionar o para realizar distintos tipos de testing.

<<< MANEJO AUTOMATIZADO DE DEPENDENCIAS >>>

- Siempre que hayamos especificado nuestras dependencias en el archivo de configuración (package.json) podremos actualizar y mantener de forma fácil y segura las dependencias del proyecto con el comando npm install
- Además podemos hacer que npm agregue como dependencia al package.json un módulo que estamos instalando. Si lo queremos como dependencia del proyecto, al comando ‘install’ le agregamos el nombre del módulo: npm install <algún-módulo>
- Si sólo es una dependencia del entorno de desarrollo, le agregamos --save-dev ó -D : npm install --save-dev <algún-módulo-dev> ó npm install -D <algún-módulo-dev>
