"use strict";

const sonFactores = (n, lista ) => {
    for (let i = 0; i < lista.length; i++) {
        if(n% lista[i] !==0) {
            return false    
        }
    }
    return true  
}


const maximo = (lista) => {
    let maximo = lista[0]
    for (let i = 0; i < lista.length; i++) {
      if(maximo< lista[i])
      maximo=lista[i]
    }
    return maximo
}



const maximoConForEach = (lista) => {
    let maximo = lista[0]
    
    lista.forEach(e =>{
        if (maximo < e) {
            maximo = e
        }
    })
    return maximo
}


const maximoIndice = (lista) => {
    let maximo = lista[0];

    lista.forEach(e => {
        if (maximo< e) {
            maximo= e
            
        }
    })
    return lista.indexOf(maximo);
}



const suma = (lista) => { 
    let suma = 0
    lista.forEach( e => suma+=e)
    return suma 

} 
const promedio = (lista) => {
    let suma = 0
    lista.forEach(e => { 
        suma+=e
    })
    return suma / lista.length
}


const tryCatch = (n,n2) =>{
    try {
        if (n < 0 || n2 < 0) {
        throw new Error('alguno de los numeros ingresados es negativo');
        } 
        return n + n2
    
    } catch (error) {
        console.log(error)
    
    } 
    console.log("me ejecute")
}


let n = -4
let n2 = 5
console.log(tryCatch(n,n2))