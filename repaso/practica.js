"use strict";
const text = (cadena) => {
    let cadenaInvertida = "" 
    for (let i = cadena.length ; i >= 0; i--) {
    cadenaInvertida+= cadena[i]    
    }
    return cadenaInvertida
}
console.log(text('hola'));