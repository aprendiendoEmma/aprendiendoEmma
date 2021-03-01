"use strict";

let numero = parseInt(prompt('ingrese un numero del 1 al 10'));
    if(numero === 7){
    console.log('adivinaste');
    }
    if (numero> 7) {
    console.log('te pasaste');
    }
    else{
        console.log('te quedaste corto');
    }