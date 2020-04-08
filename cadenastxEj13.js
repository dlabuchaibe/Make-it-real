/* Obtener el promedio de edad de las personas del siguiente listado: 
["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Castillo;34;M;Calle 5 # 2]
*/

var lista = ["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Castillo;34;M;Calle 5 # 2"];

var resultado = 0
for (let i = 0; i < lista.length; i++) {    
    resultado += (parseInt(lista[i].split(";")[1]))/lista.length;   
}
console.log(resultado)