/*
Definir una clase Persona con los atributos: nombre, apellido, género, fecha de nacimiento (DD-MM-AAAA).
Crear métodos para establecer y obtener los valores de cada atributo. Mostrar el resultado por consola.
Crear un método para obtener la edad de la persona, con base en la fecha actual. Mostrar el resultado por consola.
*/
class Persona {
    constructor(nombre, apellido, género, fNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.género = género;
        this.fNacimiento = fNacimiento;
    }
    nombre() {
        return `El nombre de la persona es: ${this.nombre}`;
    }
    apellido() {
        return `El apellido de la persona es: ${this.apellido}`;
    }
    género() {
        return `El género de la persona es: ${this.género}`;
    }
    fNacimiento() {
        return `La fecha de nacimiento de la persona es: ${this.fNacimiento}`;
    }
    edad() {
        let hoy = new date();
        let nacimiento = new date(fNacimiento);
        let difAño = hoy.getFullYear() - nacimiento.getFullYear();
        let difMes = hoy.getMonth() - nacimiento.getMonth();
        let difDia = hoy.getDate() - nacimiento.getDate();
        if (difMes < 0 || difMes === 0 && difDia < 0) {
            difaño--;
        }
        else {
            return difaño;
        }
    }
}
