/*
Definir una clase Persona con los atributos: nombre, apellido, género, fecha de nacimiento (DD-MM-AAAA).
Crear métodos para establecer y obtener los valores de cada atributo. Mostrar el resultado por consola.
Crear un método para obtener la edad de la persona, con base en la fecha actual. Mostrar el resultado por consola.
*/
class Persona {
    constructor(nombre, apellido, genero, fNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.fNacimiento = fNacimiento;
    }

    obtenerNombre() {
        console.log(`El nombre de la persona es: ${this.nombre}`);
        return this;
    }
    
    obtnerApellido() {
        console.log(`El apellido de la persona es: ${this.apellido}`);
        return this;
    }

    obtenerGenero() {
        console.log(`El género de la persona es: ${this.genero}`);
        return this;
    }

    obtenerFNacimiento() {
        console.log(`La fecha de nacimiento de la persona es: ${this.fNacimiento}`);
        return this;
    }

    edad() {
        let hoy = new Date(Date.now());
        let nacimiento = new Date (Date.parse(this.fNacimiento));
        let difAño = hoy.getFullYear() - nacimiento.getFullYear();
        let difMes = hoy.getMonth() - nacimiento.getMonth();
        let difDia = hoy.getDate() - nacimiento.getDate();
        if (difMes < 0 || difMes === 0 && difDia < 0) {
            difAño--;
        }; 
        console.log(`La edad de la persona es: ${difAño}`);
        return this;
    }
}

let persona1 = new Persona("Daniel", "Abuchaibe", "Masculino", "02/21/1992");
persona1.obtenerNombre().obtnerApellido().obtenerGenero().obtenerFNacimiento().edad()
