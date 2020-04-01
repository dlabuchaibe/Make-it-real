/*Diseñar un algoritmo que calcule la nota final de cualquier asignatura a partir de 2 notas parciales. 
El algoritmo debe mostrar, además de la nota final, un mensaje que indique el resultado:
0 - 2.0 : Pésimo
2.1 - 2.9 : Insuficiente
3.0 - 4.0 : Aceptable
4.1 - 5.0 : Bueno
*/

var nota1 = 4.5
var nota2 = 4
var prom = (nota1 + nota2)/2

if (prom >= 0 && prom <= 2) {
    console.log("Pesimo");
} else if (prom >= 2.1 && prom <= 2.9) {
    console.log("Insuficiente");
} else if (prom >= 3 && prom <= 4) {
    console.log("Aceptable");
} else if (prom >= 4.1 && prom <= 5) {
    console.log("Bueno");
}
