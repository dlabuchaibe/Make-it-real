/* Dados dos números indicar si el primer número  es un número de teléfono fijo válido (7 dígitos) y 
el segundo número es un número de celular válido(10 dígitos). Los valores se deben capturar como cadenas de texto. 
Validar que no contenga espacios.
*/

var num1 = "3529242";
var num2 = "3106101010";

if (num1.length === 7 && num2.length === 10) {
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== " ") {
            console.log("Tel valido")
        } else {
            console.log("Tel invalido")
        }
    }
    for (let j = 0; j < num2.length; j++) {
        if (num2[j] !== " ") {
            console.log("Cel valido")
        } else {
            console.log("Cel invalido")
        }
    } 
};
