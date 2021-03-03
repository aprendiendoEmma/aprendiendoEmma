'use strict';

class Persona {
    constructor(edad, nombre) {
        this.edad = edad;
        this.nombre = nombre;
    }
    
    masJovenQue(otro) {
        if (this.edad < otro.edad) {
            return true;
        }
        return false;
    }

    gritarMiNombre() {
        console.log(`HOLA ESTOY RE LOCO MI NOMBRE ES ${this.nombre}`)
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

class Agenda{
    constructor(){
        this.contactos =[];
        this.telefonos = [];
    }
    guardar(contacto, telefono){
        this.contactos.push(contacto);
        this.telefonos.push(telefono)
    }

    mostrar(){
        console.log(this.contactos);
        console.log(this.telefonos);

    }

    eliminar(contacto){
    this.contactos.splice(this.contactos.indexOf(contacto),1);
   
    }
}
let persona1 = new Persona(23, 'emma')
let persona2 = new Persona(24, 'marcos')
let agenda = new Agenda();
agenda.guardar(persona1,'12312' );
agenda.mostrar()
agenda.eliminar(persona1)