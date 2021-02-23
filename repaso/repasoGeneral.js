"use strict";

const sonFactores = (n, lista ) => {
    for (let i = 0; i < lista.length; i++) {
        if(n% lista[i] !==0) {
            return false    
        }
    }
    return true  
}

let lista = [1,2,3,4,5];
let n = 3
console.log(sonFactores(n, lista));