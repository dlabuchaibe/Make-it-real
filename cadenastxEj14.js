/* Obtener el promedio de edad de las personas de apellidos que empiecen por la letra E del siguiente listado: 
["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Escobar;34;M;Calle 5 # 2]
*/

var lista = ["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Escobar;34;M;Calle 5 # 2"];

var resultado = 0
for (let i = 0; i < lista.length; i++) {
    var datos = lista[i].split(";");
    var datos2 = datos[0].split(" ");
    if (datos2[1].startsWith("E")){
        resultado += parseInt(lista[i].split(";")[1])/lista.length;
    }
}
console.log(resultado)