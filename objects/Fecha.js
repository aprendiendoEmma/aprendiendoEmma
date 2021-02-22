'use strict'; 

class Fecha {

    constructor(dia, mes, año){

        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    imprimirFecha(){
        console.log(`${this.dia} de ${this.mes} del año ${this.año}`)
    }

    aumentarDia(){
        this.dia++
    }
};


///////

const newDate = new Fecha(12,2,1998);

console.log(newDate.imprimirFecha())
newDate.aumentarDia();
console.log(newDate.imprimirFecha())