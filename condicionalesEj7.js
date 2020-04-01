/* Haga un algoritmo que dados los tres lados de un triángulo diga si éste es: equilátero (3 lados iguales), 
escaleno(ningún lado igual) o isósceles (2 lados iguales)

Lado1 = 10
Lado2 = 10
Lado3 = 10

Lado1 es igual Lado2 y el lado2 es igual al lado3 -> es equilatero
Sino, lado1 es igual al lado2 o el lado2 es igual al lado3 o lado1 es igual al lado3 -> isósceles
Sino, es escaleno
*/

var lado1 = 8;
var lado2 = 7;
var lado3 = 10;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("Escaleno");
} else {
    console.log("Isóceles");
};