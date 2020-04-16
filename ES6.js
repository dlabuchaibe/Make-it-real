function miFuncion(arg, ...args) {
    console.log(arg);
    console.log(args[1]);
};

miFuncion("Daniel", "Abuchaibe", "Ramirez");

/*
Crear un arreglo con 5 números aleatorios, y mostrar por consola la raíz cuadrada del mínimo elemento 
del arreglo, y todos los valores del arreglo
*/

let arr = [Math.round(Math.random()*10), Math.round(Math.random()*10), Math.round(Math.random()*10), Math.round(Math.random()*10), Math.round(Math.random()*10)]
console.log(Math.sqrt(Math.min(...arr)));

class persona {
    constructor(nombre) {
      this.nombre = nombre;
    };
  
    obtenerNombre() {
      return this.nombre;
    };
  };

  var persona1 = new persona("Daniel")
  var persona2 = new persona("Jesus")
  var persona3 = new persona("Leonardo")

  console.log(persona3.obtenerNombre())
