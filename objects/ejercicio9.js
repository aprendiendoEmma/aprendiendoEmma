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
    this.telefonos.splice(this.contactos.indexOf(contacto),1);

    }
    
    pertenece(persona){
         let estaEnlaAgenda = null;
         this.contactos.forEach(contacto => {
             if (contacto === persona) {
                 estaEnlaAgenda = persona
             }
         });
         if (estaEnlaAgenda) {
             return true
         }
         return false
         
    }


<<<<<<< HEAD
     dameTelefono(persona) {
        if (this.pertenece(persona)) {
            return this.telefonos[this.contactos.indexOf(persona)]
            
        }
         throw new Error('persona inexistente en la base de datos')
        
        
=======
    dameTelefono(contacto){
        this.contactos[this.telefonos.indexOf(contacto)]
>>>>>>> 1aa223808dd64d5b36c1df78d869c6e6edc456cf
    }

}
let persona1 = new Persona(23, 'emma');
let persona2 = new Persona(24, 'marcos');
let persona3 = new Persona(24 , 'cristian');
let persona4 = new Persona(24 ,'estefania');
let agenda = new Agenda();
agenda.guardar(persona1,'495997' );
agenda.guardar(persona2,'493927' );
agenda.guardar(persona3,'44444' );
agenda.mostrar()
<<<<<<< HEAD
console.log(agenda.pertenece(persona1))
console.log(agenda.dameTelefono(persona4))


=======
console.log(agenda.pertenece(persona2))
console.log(dameTelefono(persona1))


>>>>>>> 1aa223808dd64d5b36c1df78d869c6e6edc456cf
