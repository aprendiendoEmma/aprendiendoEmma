            EJERCICIO 1 
let edad= parseInt(prompt('¿que edad tiene?'));
let distancia= parseInt(prompt('a cuantos km vive'));

if(edad > 18 && edad < 70 && distancia < 500){
    document.write('¡ustded debe ir a votar!')
} else{
    document.write('usted esta exento de votar')
}

               AJERCICIO 3
               let edad= parseInt(prompt('¿que edad tiene?'));
               let distancia= parseInt(prompt('a cuantos km vive'));
               
               if(edad > 18 && edad < 70 && distancia < 500){
                   document.write('¡ustded debe ir a votar!')
               } else{
                   document.write('usted esta exento de votar')
               
          

let numero=parseInt(prompt('ingrese un numero del 1 al 10'));

if(numero ==  7){
  alert('advinaste')
 
    document.write('adivinaste foro')
}else{
   alert('perdiste') 

    document.write('perdiste kakai')
}




let numero= parseInt(prompt('en que numero estoy pensando del 1 al 10'));

if(numero == 7){
   document.write('felicidades adivinaste')
}else if(numero > 7){
   document.write('lo siento te pasaste')
}else{
   document.write('te quedaste corto')
}



let numero= parseInt(prompt('en que numero estoy pensando del 1 al 10'));

if(numero == 7){
   console.log('felicidades adivinaste')
}else if(numero > 7){
   console.log('lo siento te pasaste')
 }else{
   console.log('te quedaste corto')
}






                       EJERCICIO4
let a = parseInt(prompt('ingrese un numero'));
if(a == 1){
    document.write('hola')
}else{
    document.write('hasta luego')
}

                       EJERCICIO 5
let nota= parseInt(prompt('ingrese su nota'));
if(nota< 4){
    document.write('ustded debe recuperar el examen')
} else{
    document.write ('aprobo, puede irse')
}

                      EJERCICIO 6
let numero=parseInt(prompt('ingrese un numero'));
let numero2= parseInt(prompt('ingrese un segundo numero'));

if(numero>numero2){
    document.write(numero)
}else{
    document.write(numero2)
}

                        EJERCICIO7
let number = parseFloat(prompt('Ingrese una nota'));
let number2 = parseFloat(prompt('Ingrese otra nota'));
let promedio = (number + number2) / 2 

if(promedio >= 7){
    document.write('aprobado')
}else{
    document.write('desaprobado')
}

                     EJERCICIO8
let number = parseInt(prompt('ingrese un numero'));

if(number >=1 && number <=9){
    document.write('ustded ingreso un numero de una sola cifra')
}else{
    document.write('ingreso un numero de dos cifras')
}


                  EJERCICIO9
let dni= parseInt(prompt('ingrese su DNI'));

   if(   dni   ===    30612453 ||    dni ===      23763290 || dni===21448503 || dni ===34582048 || dni===15364857){
// Si(el dni es igual 30612453 Ó  el dni es igual 23763290
        document.write('Este DNI ya fue ingresado')
    }else{
      document.write(' su DNI es ' + dni )
    } 

                      EJERCICIO 10
Ejercicio 10
Un programa que calcule el importe que se le facturará a un
cliente por consumo de electricidad sabiendo que la compañía que se la provee cobra una tarifa
fija de 480 pesos que incluye los primeros 200 KW consumidos y los KW excedentes se los cobra
a 25,5 pesos el KW, además se agregan $78 de impuestos. Se leen los valores del medidor al
comienzo y al fin del período.

calcular importe => output
consumo de electricidad => input
tarifa  $480 los primeros 200 Kw, los excedentes se los cobra $25,5 el kw +$78


let consumoDeElectricidad = parseInt(prompt('ingrese su consumo'));
let tarifaFija = 480;
let precioPorExcedente = 25.5;
let impuesto = 78;
let importeFinal = tarifaFija;

if(consumoDeElectricidad > 200){
    let excedentes = consumoDeElectricidad - 200;
    importeFinal += impuesto;
    importeFinal += (precioPorExcedente * excedentes)
}
document.write('El importe final es: ' + importeFinal);
              
               EJERCICIO11
let number=parseInt(prompt('ingrese un numero'))
let number2=parseInt(prompt('ingrese un segundo numero'))
let number3=parseInt(prompt('ingrese un tercer numero'))

if(number > number2 && number > number3){
    document.write(number)
}

else if(number2 > number && number2 > number3){
    document.write(number2)
}

else if(number3 > number && number3 > number2){
    document.write(number3)
}

parte A        EJERCICIO 12
let nota= parseFloat(prompt('ingrese su nota'));
if(nota>=0  && nota<=3 )
document.write('reprobado')
if(nota >= 4 && nota <= 6){
    document.write('debe ir a examen final')
}if(nota>= 7 && nota <= 10){
   document.write('eximido')
}
 
//parte B
let nota1=parseFloat(prompt('ingrese su nota del primer trimestre'));
let nota2=parseFloat(prompt('ingrese su nota del segundo trimestre'));
let nota3=parseFloat(prompt('ingrese su nota del tercer trimestre'));
let notaFinal=nota1+ nota2+ nota3;
notaFinal= notaFinal / 3 ;
promedioDeNota=notaFinal

if(promedioDeNota >=4 && promedioDeNota <= 6 ){
    document.write(' "lo siento"  te llevas la materia tu promedio es ' + promedioDeNota);
}if(promedioDeNota>=7 && promedioDeNota <= 8){
    document.write('aprobaste la materia tu promedio es ' + promedioDeNota)
}if(promedioDeNota >=9 && promedioDeNota <= 10){
    document.write('aprobaste con honores genio su promedio es ' + promedioDeNota)
}else{
    document.write('si lees esto signica que tu nota es menor a 4, sos alto burro compa, tu promedio es ' + promedioDeNota) 
}



                EJERCICIO 13
let number1= parseInt(prompt(' ingrese su primer numero'));
let numberDos= parseInt(prompt('ingrese su segundo numero'));
if(number1 > numberDos)
    document.write('el primero es mayor ') 

if( numberDos> number1)
    document.write ('el segundo es mayor ')

if(number1 == numberDos )
    document.write('ingreso dos numeros iguales')


            EJERCICIO 14
let numero = parseInt(prompt('ingrese un numero'));
let numero2 = parseInt(prompt('ingrese un  segundo numero'));
let aux = null;
   if(numero< numero2){     
         aux= numero
         numero= numero2
         numero2= aux
   } 
   document.write(`${numero} - ${numero2} `)


            EJERCICIO 15

let numberA= parseInt(prompt('ingrese un primer numero'));
let numberB= parseInt(prompt('ingrese un segundo numero'));
let numberC= parseInt(prompt('ingrese un tercer numero'));
let aux=null
if(numberA < numberB){
     

}



                EJERCICIO 16
let anio= parseInt(prompt('ingre un anio'));
if(anio % 4 ==0 || anio% 400== 0 || anio % 100!= 0)
 document.write('es biciesto')
if(anio % 100 !=0)
 document.write(' no es biciesto') 