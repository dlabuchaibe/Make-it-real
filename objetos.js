/*
var carro = {
    numeroDePuertas: 4,
    color: blanco,
    marca: volkswagen,
    modelo: 2018
}

Crear una función saludar que escriba el nombre de la persona dentro del objeto persona, 
la función debe recibir un parámetro que hace referencia al idioma, si el idioma es inglés saluda en inglés si 
el idioma es español, saluda en español

*/

var persona = {
    nombre: "Daniel",
    edad: 27,
    nacionalidad: "Colombiano",
    idioma: "Español",
    saludar: function (lang) {
        if (lang === "Español") {
            console.log("Hola, " + this.nombre)
        } else if (lang === "Inglés") {
            console.log("Hello, " + this.nombre)
        }
    }
}

persona.saludar("Español")