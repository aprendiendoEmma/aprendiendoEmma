'use strict';

class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    }

    masJovenQue(otro) {
        return this.edad < otro.edad;
    }
    
    tocayo(otro) {
        return this.nombre=== otro.nombre;
    }

    mismaPersona(otro) {
         return this.edad === otro.edad && this.nombre === otro.nombre
    }

    static masJoven(grupo){
        let masChico = grupo[0]
        grupo.forEach(persona => {
            if (persona.edad < masChico.edad) {
                 masChico = persona
            }
        });
        return masChico
    }
}



const persona1 = new Persona ('marcos', 45);
const persona2 = new Persona ('emma', 23);
const persona3 = new Persona ('guille', 25);
const persona4 = new Persona ('cristian', 3);
let grupo = [persona1,persona2,persona3,persona4];
/*console.log(persona1.masJovenQue(persona2));
console.log(persona1.tocayo(persona2));
console.log(persona1.mismaPersona2(persona1));*/
console.log(Persona.masJoven(grupo));