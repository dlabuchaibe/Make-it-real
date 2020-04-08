/*
Obtener el apellido de la persona de la cadena de texto: 
var linea = "Jesus Estrada;36;M;Calle 1 # 2";
*/

var linea = "Jesus Estrada;36;M;Calle 1 # 2";

var resultado = linea.split(";")[0].split(" ")[1];
console.log(resultado);