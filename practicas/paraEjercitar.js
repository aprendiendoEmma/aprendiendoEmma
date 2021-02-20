// ///////////////////////////////////////////////////Ejercicio 1////////////////////////////////////////////////////////////

// let numeroUser = parseInt(prompt('Elija cualquier numero positivo'));

// for (let i = 1; i <= numero; i++) {
//     document.write(i + '<br>')
// }

// let numero = 1;

// while (numero <= numeroUser) {
//     document.write(numero + '<br>')
//     numero++;
// }

// ///////////////////////////////////////////////////Ejercicio 2////////////////////////////////////////////////////////////

// for (let i = 4; i < 8; i++) {
//     document.write(i + '<br>')
// }

// let m = parseInt(prompt('Elija un m'));
// let n = parseInt(prompt('Elija un n'));

// if(m <= n){
//     while (m <= n) {
//         document.write(m + '<br>')
//         m++;
//     }
// }else{
//     while (n <= m) {
//         document.write(n + '<br>')
//         n++;
//     }
// }

// ///////////////////////////////////////////////////Ejercicio 3////////////////////////////////////////////////////////////
// A)
// let numero = 10;

// while (numero <= 15) {
//     document.write(numero + '<br>')
//     numero++
// }

// for (let i = 10; i <= 15; i++) {
//     document.write(i + '<br>')
// }

// B)

// let numero = parseInt(prompt('Tira un numero'));
// let aux = numero+5

// while (numero <= aux) {
//     document.write(numero + '<br>')
//     numero++;
// }

// for (let i = numero; i <= aux ; i++) {
//     document.write(i + '<br>')
    
// }

// let n = parseInt(prompt('Tira un n'));
// let c = parseInt(prompt('Tira un c'));

// while (n <= c) {
//     document.write(n + '<br>');
//     n++;
// }

// for (let i = n; i < c+1; i++) {
//     document.write(i + '<br>');
// }


// ///////////////////////////////////////////////////Ejercicio 4////////////////////////////////////////////////////////////

// a))))
// let numero = 5;

// while (numero <= 11) {
//     document.write(numero + '<br>');
//     numero += 2;
// }

// for (let i = 5; i <= 11; i+=2) {
//     document.write(i + '<br>');
// }
// }
// HACER LOS OTROS LA CONCHA DE TU MADRE

// B)
// let n=  parseInt(prompt('ingrese un n'));
// let m=  parseInt(prompt('ingrese un M'));

// for ( let i = n; i <= m ; i+=3 ) {
//     document.write( i + '<br>')
// }


// let n=  parseInt(prompt('ingrese un n'));
// let m=  parseInt(prompt('ingrese un M'));

// while(n<= m){
//     document.write(n + '<br>')
//     n+=3
// }
// C)

// let n= parseInt(prompt('ingrese un n'))
// let m=parseInt(prompt('ingrese un m')) 
// let p= parseInt(prompt('ingrese un p'))

// for (let i = n; i <= m ; i+= p ) {
//  document.write(i + '<br>');
    
// }


// let n = 8   
// let m = 3


// for(let i = n ; i >= m ; i --){
//     document.write(i + '<br>')

// }

// while(n >= m){
//     document.write(n + '<br>');
//     n--
// }


// ////////////////////////////////////////////////ejercicio 6///////////////////////////////////////////////////////////
// let n = 15
// let m = 6
// while(n >= m){
//     document.write(n + '<br>')
//     n-=3

// };

// let n = 15
// let m = 6
 
// for (let i = n ; i >= m ; i-=3) {
    
//     document.write(i + '<br>' )
    
// }






// ///////////////////////////////////////////////////Ejercicio 8////////////////////////////////////////////////////////////

// A)
// let numero = parseInt(prompt('ingrese un numero')); //20
// let i = 0;

// while (Math.pow(2, i) < numero) {
//     document.write(Math.pow(2, i) + '<br>');
//     i++;
// }

// b

// let numero = parseInt(prompt('ingrese un numero')); //20
// let i = 0;

// while (i < numero) {
//     document.write(Math.pow(2, i) + '<br>');
//     i++;
// }  

// C)

// let numero = parseInt(prompt('ingrese un numero'));
// let i = 1;

// while (i <= numero) {
//     document.write(Math.pow(i,i) + '<br>');
//     i++;
// }


// ///////////////////////////////////////////////////Ejercicio 9 ////////////////////////////////////////////////////////////

// a)
// let numero = prompt("Escribe un número");

// for (let i = 1; i <= numero; i++) {
//     if(numero%i === 0)
//         document.write(i + '<br>');
// }

// b)
// let numero = prompt("Escribe un número");

// for (let i = 1; i <= numero; i++) {
//     if(numero%i === 0 && i%2 === 0)
//         document.write(i + '<br>');
// }

// 1 ,2 ,3 ,4
// f  t  f  t

// c)
// let numero = prompt("Escribe un número");
// let cantidadDivisores = 0;

// for (let i = 1; i <= numero; i++) {
//     if(numero%i === 0){
//         cantidadDivisores++;
//     }
// }

// document.write(cantidadDivisores)

// 1,2,4 = 7

// d)

// let numero = prompt("Escribe un número");
// let sumaDivisores = 0;

// for (let i = 1; i <= numero; i++) {
//     if(numero%i === 0){
//         sumaDivisores = sumaDivisores + i
//     }
// }

// document.write(sumaDivisores)

// 1,2,4 = 7
// E




// F



// ////////////////////////////////////EJERCICIO 10/////////////////////////////////////////////////

// let numero = prompt("Escribe un número");
// let multiplicaDivisores=1

// for (let i = 1; i <= numero; i++) {
//         multiplicaDivisores = multiplicaDivisores *i
//     }
// document.write(multiplicaDivisores)


// ///////////////////////////////////////////cadenas 23///////////////////////////////////////////


// let numero = 8

// for (let i = 0; i <= numero; i++) {
//     document.write('*')
// }

// let numero = 8
// for (let i = 0; i <= numero; i++) {
//     document.write('*'.repeat(i) +'<br>')
// }

// let numero = 5;
// let anterior = 0

// for (let i = 1; i <= numero; i++) {
// 	document.write('*'.repeat(i + anterior) +'<br>')
// 	anterior = i
// }


// let palabra = '';

// let resultado = `**${'*'.repeat(palabra.length)}**
// * ${palabra} *
// **${'*'.repeat(palabra.length)}**`;

// console.log(resultado)


// let palabra = prompt('ingrese una palabra');
// let letra = prompt('ingrese una letra');
// let contador = 0

// for (let i = 0; i < palabra.length; i++) {

// 	if (palabra[i]===letra) {
// 		contador++
// 	}
// }

// document.write(contador)