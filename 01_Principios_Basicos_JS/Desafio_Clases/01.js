/*
1) Declarar una clase Usuario

2) Hacer que usuario cuente con los siguientes atributos
- nombre : string
- apellido : string
- libros : object []
- mascotas : string []

3) Hacer que el usuario cuente con los siguientes métodos
- getFullName () : string --> retorna el nombre completo. Usar template strings
- addMascota (string): void --> recibe un nombre de mascota y lo agrega al array de mascotas
- countMascotas () : number --> retorna la cantidad de mascotas que tiene el usuario
- addBook (string, string) : void --> recibe un string "nombre" y un string "autor" y debe agregar un objeto --> {nombre : string , autor:string} al array de libros
- getBookNames() : string [] --> retorna un array con solo los nombres del array de libros del usuario

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos
*/

class Usuaria {
	//Constructor
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}

	// Métodos
	getFullName = () => `Mi nombre es ${this.nombre} ${this.apellido}.`;
	
	addMascota = (nombre) => this.mascotas.push(nombre); //acá pusheo la nueva mascota

	countMascotas = () => this.mascotas.length;

	addBook = (nombre, autor) =>
		this.libros.push({
			//acá pusheo el nuevo libro usando la estructura de constructor declarada arriba
			nombre,
			autor,
		});

	getBookNames = () => this.libros.map((e) => e.nombre); //acá recorro con map para obtener SOLO nombre del escritor
}

//Creación...
let libros = [
	{
		nombre: "Harry Potter y el prisionero de Azkaban",
		autor: "J.K.Rowling",
	},
	{
		nombre: "Harry Potter y las reliquias de la muerte",
		autor: "J.K.Rowling",
	},
];

let mascotas = ["Asecas", "Teodoro"];

// Creación
let usuario1 = new Usuaria("Kari", "Vane", libros, mascotas);
usuario1.addMascota("Manolo");
usuario1.addBook("Harry Potter y el cáliz de fuego", "J.K.Rowling");

//Invocación...
console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
