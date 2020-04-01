/* Crear un programa para calcular el salario de una persona con base en el número de horas trabajadas y 
el valor de la hora. Si la persona trabaja más de 40 horas, las horas extras deben pagarse con un incremento 
del 50% sobre el valor de la hora normal.

Mostrar el salario total y cuánto ganó por horas extras
*/

var hora = 45;
var horaSemanal = 40;
var horaExtra= hora -horaSemanal;
var valorHora = 40000;
var salario = hora * valorHora;

if (hora > 40) {
    var incremento = (valorHora/horaSemanal) * 0.5;
    console.log(salario + incremento);
    console.log(incremento);
}