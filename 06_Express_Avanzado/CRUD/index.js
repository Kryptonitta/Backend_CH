const express = require('express');
const app = express();
//Para exportar el array
let arr = require('./arr');
app.use(express.json()); // acá le digo a express que acepte json

// console.log(arr); //pruebo que lo traiga

//ABRIENDO PUERTO
app.listen(3003, () => {
    console.log('Server on port 3003');
});

//Para que funcionen BIEN en NECESARIO que primero se ponga el caso de /, luego el /palabra y finalmente el /:palabra.

//GET
app.get('/', (req, res) => {
    res.send('Hello World');
    console.log("Hola normal")
}
);

// <<< FORMAS DE ENVIARLE PARAMETROS A LA URL >>>

//QUERY simple:/api?algo=xxx 
//QUERY con mas de un parametro:/api?algo=xxx&algo2=xxx

//Esto es enviarle valores por la url
//El get sabe que viene luego por la palabra que le sigue a /. En este caso puse query pero podria modificarla.

app.get("/api", (req, res) => {
    console.log(req.query);
    let obj = {
        name: req.query.name,
        lastName: req.query.lastName,
        id: 5,
    };

    arr.push(obj);
    res.send("Usuario guardado correctamente!");
});

app.get('/query', (req, res) => {
    console.log(req.query); //Acá busco la propiedad query que es lo que viene despues del signo de pregunta
    res.send(`Hola desde query`);
});

//QUERY + array
app.get('/queryArray', (req, res) => {
    //queryArray?nombre=Kari&apellido=Vane
    console.log(req.query); //Acá busco la propiedad query que es lo que viene despues del signo de pregunta
    let obj = {
        id : 5, //en realidad deberia ser una funcion que determine el numero de id
        nombre: req.query.nombre,
        apellido: req.query.apellido
    }
    arr.push(obj);
    console.log(arr);
    res.send("Usuario guardado correctamente desde query array");
});

//Creo una ruta para que me muestre el array completo (si antes agregué un usuario, ahora me va a aparecer acá, sino no)
app.get("/users", (req, res) => {
    //Creo un objeto que es el array
    res.send({data:arr});
});

//PARAMETROS URL: se pueden configurar en un put/post/push/get/delete
//Le obliga al cliente a enviar un parametro en la url: significa que si deja el / solo va a tener un error. 
//La palabra que venga luego de : puede ser cualquiera. Con los dos puntos se le avisa que van a ser params

// app.get('/:params', (req, res) => { //:algo --> así le digo que se le va a pasar params
//     //console.log(req); //En este caso le pido TODO el objeto. Es algo gigante y nunca voy a pedirlo completo
//     console.log(req.params); //req es el pedido. En este caso le pido solo que me devuelva la propiedad params
//     res.send(`Hola desde params`);
//     console.log('Hola desde params');
// });


//PROBANDO FILTER (para que funcione comento el de arriba)
app.get('/:id', (req, res) => { //http://localhost:3003/2   
    console.log(req.params); 

    let {id} = req.params; //Esto es destructuring. Lo que está dentro de {} es lo que se va a llamar.

    // console.log(id);
    // console.log(typeof id);

    //Busco el array con id=2
    let arrNew = arr.filter((x)=> {
        return x.id == id
    })
    
    console.log(arrNew)
    
    res.send({data:arrNew[0]});
});

//Post: los navegadores solo nos permiten hacer peticiones get
//Los podemos hacer con postman
//POSTMAN: tengo que ir a la pestaña "body"--> elijo raw --> select JSON. Un JSON se escribe {("name:"kaki","surname":"vane")}
//En el body escribo el JSON. y le doy a post.
app.post("/", (req, res)=> {
    console.log(req.body)

    let objNuevo = {
        //el id es un numero random entre 5 y 10
        id: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
        nombre: req.body.name,
        apellido: req.body.lastName,

        /*
        En postman envio el JSON: {"name":"kaki","lastName":"vane"}
        */
    };
    
    arr.push(objNuevo);

    res.send("Esto es un POST!")
})

//PUT: son los pedidos para actualizar. También se hace con postman
//Como params le paso el id del objeto que quiero buscar
app.put('/:id', (req, res) => { //http://localhost:3003/2
    //La info la capturo mediante el objeto req.body

    //Acá utilizo el metodo findIndex para buscar el objeto que quiero actualizar
    let index = arr.findIndex((x)=> {
        return x.id == req.params.id
    })

    arr[index].nombre = req.body.nombre
    //acá le digo que me traiga el objeto con el id que le paso por params

    //Recordar: si bien el id que busco es el 3, el index es el 2 porque el array empieza en 0.
    res.send({message: "Usuario actualizado"}); //acá le digo que me muestre un mensaje que luego se va a ocultar

    console.log("Estoy en put")
});

app.delete('/:id', (req, res) => { //http://localhost:3003/2
    //La info la capturo mediante el objeto req.body
    let newArr = arr.filter((x)=> {
        return x.id != req.params.id
    })

    console.log(newArr);

    //Ahora igualo a array a nuevo array con las modificaciones
    arr = newArr;

    res.send({message: "Usuario eliminado"}); //acá le digo que me muestre un mensaje que luego se va a ocultar
});

//PASOS: primero hago el get, luego el post, luego el put...y finalmente el get nuevamente para ver los resultados