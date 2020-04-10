/*
Obtener la edad de las personas que hablen inglés de un arreglo de 5 objetos Persona. Cada elemento del arreglo
tiene la siguiente estructura:
{
  nombre: "Jesus",
  sexo: "M",
  edad: 36,
  idiomas: ["EN","ES"],
  verEdad: function(){
     console.log(“La edad de “+this.nombre+” es “+this.edad);
  }
}
*/

var personas = [{
    nombre: "Jesus",
    sexo: "M",
    edad: 36,
    idiomas: ["EN","ES"],
    verEdad: function(){
       console.log("La edad de "+this.nombre+" es "+this.edad);
    }
  },{
    nombre: "David",
    sexo: "M",
    edad: 35,
    idiomas: ["EN"],
    verEdad: function(){
       console.log("La edad de "+this.nombre+" es "+this.edad);
    }
  },{
    nombre: "Elena",
    sexo: "F",
    edad: 2,
    idiomas: ["EN"],
    verEdad: function(){
       console.log("La edad de "+this.nombre+" es "+this.edad);
    }
  }]; 
  
  for (var i = 0; i<personas.length; i++){
    var persona = personas[i];
    for (var j = 0; j<persona.idiomas.length; j++){
      if(persona.idiomas[j] === "ES"){
        persona.verEdad();
      }
    }
  }
  


