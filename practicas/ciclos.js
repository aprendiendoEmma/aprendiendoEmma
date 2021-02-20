
              SENTENCIA "WHILE"                          

let numero= 0
while(numero < 10){ 
    numero++;
    document.write(numero + '<br>')
}




             SENTENCIA "DO WHILE"

let numero= 0;
do{
    document.write(numero)
}while(numero< 6)
 

             SENTENCIA 'BREAK'

let numero = 0;

while(numero< 100){
     numero++
document.write(numero)  
if(numero == 10){
     break;
     }
}


             SENTENCIA 'FOR'

opcion 1
for( let i = 6 ; i >=0; i --){
   document.write(i + "<br>") 
}

opcion 2

let i;

for( i = 6 ; i >=0; i --){
    document.write(i + "<br>") 
 }
 document.write(i + "<br>") 

opcion 3

let i= 6 ;

for(i; i >=0; i --){
    document.write(i + "<br>") 
 }
 document.write(i + "<br>") 


                SENTENCIA "continue" sirve para saltar 


for(let numero= 0; numero< 20; numero+){
    document.write(numero + "<br>")
    if(numero== 5){
        continue; -----> salta lo que pide la condicion del IF

    }
    
}

                   SENTENCIA FOR IN Y FOR ON
//               0        1               2                        

let n =['gato', 'perro' ,'nutria'];
 n.edad=0

for (animal in n) {
document.write(animal + '<br>' )
}


document.write('<br>');


for( animal of n){
    document.write(animal + '<br>')
}
 document.write(n.edad)