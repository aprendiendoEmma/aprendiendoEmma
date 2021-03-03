'use strict';

let numeros = [1,2,3,];

let [uno, dos, tres,] = numeros
console.log(uno, dos, tres);

let persona = {
    nom: 'emma',
    apell: 'perez'
}

console.log(persona)

let {nom} = persona;
console.log(nom);



 let persona2 ={
    ...persona,
    email: 'emma97perez97',
 }
 console.log(persona2)


 let arr = [1,2,3,4,5];
 let arra2 = [6,7,8,9,];
 let array3 = [...arr, ...arra2];
 console.log(array3)