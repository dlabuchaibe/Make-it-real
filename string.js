/*
console.log ("Hola" + "Mundo" + "Cómo" + "Estás");
console.log(1===1);
var nombre = "Daniel";
var apellido = " Abuchaibe"
console.log("Hola " + name + apellido);
*/
newFunction();
function newFunction() {
    var precio = 5;
    var cantidad = 5;
    var totalVenta = precio * cantidad;
    var descuento = totalVenta * 0.2;
    console.log("descuento= ", descuento);
    console.log("El precio de la venta es " + (totalVenta - descuento));
}

