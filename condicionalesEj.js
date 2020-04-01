/* 
1. Crear un archivo llamado condicionales.js 
2. En el contenido pegar el siguiente código:
var precio = 200000;
var cantidad = 3;
var totalVenta = precio * cantidad;
var descuento = totalVenta * 0,2;
var valorFinalVenta = totalVenta - descuento;
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);

3. Aplicar el descuento si el total de la venta supera el valor del  SMLV
*/

var precio = 200000;
var cantidad = 3;
var totalVenta = precio * cantidad;
var descuento= totalVenta * 0.2;
var valorFinalVenta = totalVenta - descuento;
var SMLV = 980657;
console.log("Total antes de decuento: " + totalVenta);
if (totalVenta > SMLV) {
    console.log("Valor del descuento: " + descuento);
    console.log("Total a pagar: " + valorFinalVenta);
} else {
    var descuento2 = totalVenta * 0.1;
    console.log("Valor del descuento: " + descuento2);
    console.log("Total a pagar: " + (totalVenta - descuento2));
}