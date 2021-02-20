              OPERADORES RELACIONALES
const a = parseInt(prompt( 'Ingrese un numero' ));
const b = parseInt(prompt( 'Ingrese otro numero' ));
const c = parseInt(prompt( 'Ingrese otro mas numero' ));
console.log( 'Usted ingresó los valores:', a, b, c )
console.log( a, 'es mayor que', b, a > b )
console.log( a,'y', b, 'son iguales', a === b )
console.log( a,'es el mayor de todos', a > b && a > c)
console.log( b,'es el menor de todos', b < a && b < c)
console.log( a,'es mayor que alguno de los otros dos', a > b || a > c) //a=0 b = 5 c = 1
console.log( a,'es menor o igual que alguno de los otros dos', a <= b || a <= c) //a=10 b = 7 c = 10
console.log( 'Los tres numeros son iguales', a==b && a==c && b==c )
console.log( 'Los tres numeros son distintos', a!=b && a!=c && b!=c )
console.log( a, 'es par', a % 2 == 0) //SOLO EL RESTO, 8 / 2 = 4 RESTO 0
console.log( 'alguno es par', a % 2 == 0 || b % 2==0 || c % 2 == 0)
console.log( 'ninguno es par', a % 2 != 0 && b % 2 !=0 && c % 2 != 0 )
console.log( 'todos son pares',  a % 2 == 0 && b % 2 ==0 && c % 2 == 0)
console.log( a, 'es multiplo de 3', a % 3 == 0 )
console.log( a, 'es multiplo de 3 y de 5', a % 3 ==0 && a % 5 == 0 )
console.log( a, 'es multiplo de 3 y par', a % 3 ==0 && a % 2 == 0 )
console.log( a, '-', b, 'da un numero positivo', a - b >= 1)
console.log( a, '-', b, 'da un numero par positivo', a - b >= 1 && a - b % 2 == 0  )

 
                   OPERADORES LOGICOS;
Si quisieramos permitir que la cadena esté escrita completamente en mayúsculas, podríamos
tener una expresión que sea verdadera tanto para la cadena las pupilas o LAS PUPILAS.
Para eso utilizaremos el operador lógico OR. Entonces dicha expresión sería:
x == las pupilas OR x == LAS PUPILAS
De este modo, podemos combinar expresiones lógicas para formar expresiones más complejas utilizando los operadores lógicos: AND, OR y NOT. AND es la conjunción (y), OR es la
disyunción (o), NOT es la negación (no).

      
         OPERADORES DE COMPARACION;
== (es igual a)
!= (es distinto que)
<(menor que)
>(mayor que)
<= (menor o igual que, ≤)
>= (mayor o igual que, ≥) 
 ! (negacion)