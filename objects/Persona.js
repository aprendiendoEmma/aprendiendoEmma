'use strict';

class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    }

    masJovenQue(otro){
        if (this.edad < otro.edad) {
            return true
        }
        return false
    }
    
}


console.log(Date())



