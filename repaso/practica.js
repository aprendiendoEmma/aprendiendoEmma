"use strict";
try{  


let numero= 10;
   if (isNaN(numero)) {
    throw new Error('numero no es un numero');
   
    console.log(numero*numero);
  }
}
catch(error){
console.log(`hubo un error en ${error}`)
}