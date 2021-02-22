'use strict';

class Fraccion {

    constructor(numerador, denominador){

        this.numerador = numerador;
        this.denominador = denominador;
    }

    imprimir() {
        console.log(`${this.numerador}/${this.denominador}`)
    }

    invertirSigno() {
        this.numerador = -1*this.numerador
    }

    invertir() {
        let aux = this.numerador;
        this.numerador = this.denominador;
        this.denominador = aux
    }
}



//////////

const fraccion = new Fraccion(4,5);

fraccion.invertir();

fraccion.imprimir();