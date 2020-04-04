/* Utilizando un operador ternario evalúe una expresión para saber si a una familia se le otorga 
o no el subsidio del gobierno que corresponde a 1 SMLV. Si el ingreso familiar es inferior a $1’000.000 
y en la casa habitan 4 o más personas, la persona recibe el subsidio. Muestre como resultado el valor 
del ingreso familiar más el subsidio.
*/

var salario = 877803;
var npersonas = 5;
var subsidio = 1000000

salario < 1000000 && npersonas >= 4 ? console.log("El salario es: " + salario + ", " + "El subsidio es: " + subsidio) : console.log("No recibe subsidio");
