'use strict';

class Persona {
    constructor(edad, nombre) {
        this.edad = edad;
        this.nombre = nombre;
        this.info = `hola soy ${this.nombre} y tengo ${this.edad} anios`;
    }
    
    masJovenQue(otro) {
        if (this.edad < otro.edad) {
            return true;
        }
        return false;
    }

    static cualEsMasJoven(persona, persona2){
        if(persona.edad < persona2.edad){
            return persona;
        }
        else{
            return persona2;
        }
    }
}

const otro = new Persona(23, 'emma'); 

const persona = new Persona(2 , 'Marcos');
console.log(persona.masJovenQue(otro));

console.log(Persona.cualEsMasJoven(otro, persona));