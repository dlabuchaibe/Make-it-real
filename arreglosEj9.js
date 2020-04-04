/*Se tienen 2 arreglos paralelos con los siguientes valores:
asistentes = ["Gina", "Juan", "Luz", "Michael"];
asistencia = [true, true, false, true];
Se debe recorrer el arreglo en un ciclo e informar si cada persona asistió o no a la sesión de Make It Real de la siguiente forma:
“Gina asistió”
“Juan asistió”
“Luz no asistió”
“Michael asistió”
*/

var asistentes = ["Gina", "Juan", "Luz", "Michael"];
var asistencia = [true, true, false, true];

for (let i = 0; i < asistentes.length; i++) {
    if (asistencia[i] === true) {
        console.log(asistentes[i] + " " + "asistio")
    } else {
        console.log(asistentes[i] + " " + "no asistio")
    }
};