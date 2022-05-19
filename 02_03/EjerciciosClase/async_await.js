// RESOLUCIÓN CON --> PROMESAS

const fs = require("fs"); // File System

//Leer
let read = fs.promises.readFile("./test.txt", "utf-8"); 
// >>> PROMESA <<<

//Try
try{
    read
        .then((res) => {   
            console.log("El archivo dice...");
            console.log(res)
        }) 
        .catch((err) => {
            console.log("Error al leer el archivo desde el read .catch");
            console.log(err)
        }
    );
}catch(err){
    console.log("El archivo no pudo ser leido");
    console.log(err)
}

// >>> ASYNC - AWAIT <<<

const save = async () => { //acá le digo que va a ser un proceso asíncrono: esto significa que se va a realizar en paralelo con lo que está arriba
    try{
        let read = await fs.promises.readFile("./test.txt", "utf-8"); //con el await le digo "esperá que pase esto..."
        console.log("Funcionó el try!")
        return read
    } catch (err){
        console.log(err)
    }
}

save()

async


