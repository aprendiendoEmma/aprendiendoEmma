const imrprimirSuma = (n1,n2) => n1+n2;

const imprimirPromedio = (n1,n2) => imrprimirSuma(n1,n2) / 2

const ponerNota = (n , m) => {
    let promedio = imprimirPromedio(n,m);
    if (promedio >= 7) {
        return 'promocionado'
    }
    if (promedio >= 4 && promedio < 7) {
        return 'aprobado'
    }
    if (promedio < 4) {
        return 'debe recuperar' 
    }
}

const imprimirFecha = (dia,mes,anio) =>{
    switch (mes) {
        case 1:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Enero de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 2:
            if (dia >= 1 && dia <=28) {
                return `${dia} de Febrero de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 3:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Marzo de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 4:
            if (dia >= 1 && dia <=30) {
                return `${dia} de Abril de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 5:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Mayo de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 6:
            if (dia >= 1 && dia <=30) {
                return `${dia} de junio de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 7:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Julio de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 8:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Agosto de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 9:
        if (dia >= 1 && dia <=30) {
            return `${dia} de Septiembre de ${anio}`
        } else{
            return ` El ${dia} no existe en el calendario`
        }
        break;
        case 10:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Octubre de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 11:
            if (dia >= 1 && dia <=30) {
                return `${dia} de Noviembre de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
        case 12:
            if (dia >= 1 && dia <=31) {
                return `${dia} de Diciembre de ${anio}`
            } else{
                return ` El ${dia} no existe en el calendario`
            }
            break;
                
        default: return mes+ 'no existe'
            break;
    }
}
 const imprimirFechaVDos = (dia,mes,anio) => {
     let fecha = new Date(anio,mes,dia)
     return fecha 

 }

 const sumaToriaDePares = (entero) => {
     let suma = 0
     for (let i = 1; i <= entero; i++) {
        if(i%2==0)
        suma+=i
      }
      return suma
 }
 
 const potencia = (x,a) => {
     let resultado = 1
    for (let i = 0; i < a; i++) {
        resultado*=x
    }
        return resultado
 }

const esDivisible = (n,m) =>{
    if (n%m==0) {
        return true
    }
    else{
        return false
    }
}

const esDivisibleVdos = (n,m) => n%m === 0;

const cadenaInvertida = (texto) => {
    return texto.split('').reverse()
    
}

const cadenaInvertidaDos = (texto) => {
    let invertida = ''
     for (let i = texto.length-1;i>=0 ; i--) {
         invertida+=texto[i]
      
     }return invertida
}

const cantidadDeApariciones = (cadena,letra) =>{
        let aparece = 0
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]===letra) {
            aparece++
        }
    }
    return aparece
}

const cantidadDeVocales = (cadena) => {
     let cantidad = 0
     for (let i = 0; i < cadena.length; i++) {
         if (cadena[i]=== 'a' || cadena[i]=== 'e' || cadena[i]=== 'i' || cadena[i]=== 'o'||cadena[i]=== 'u') {
            cantidad++            
         }
     }
     return cantidad
}

const maximoIndice= (lista)  => {
    let maximo= 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[maximo] < lista[i]) {
            maximo = lista[i]
        }
    }
    return maximo
}

const sumaDeEnteros = (lista) =>{
    let suma = 0
    for (let i = 0; i < lista.length; i++) {
      suma+=lista[i]
    }
  return suma
}  

const promedio = (lista) => {
    let suma = 0
    for (let i = 0; i < lista.length; i++) {
        suma+=lista[i] / lista.length
   }
   return suma  
}

const cantidadDeCifras = (numero) => {
    let cantidadDeCifrass = 0;
    while(numero > 1){
        numero /= 10
        cantidadDeCifrass++;
    }
    return cantidadDeCifrass;
}

const abecedaria = (palabra) => {
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] > palabra[i+1]) {
            return false
        }
    }
    return true
}

const cantidadDeRepetida = (cadena, letra) => {
    let contador = 0
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra){
            contador++
        }
    }
    return contador
}

const esSinRepetidos = (cadena) => {
  for (let i = 0; i < cadena.length; i++) {
    for (let j = i+1; j < cadena.length; j++) {
        if (cadena[i]===cadena[j]) {
            return false
        }
    }
   }    
    return true
}

const estaOrdenado = (arreglo) => {
    for (let i = 0; i < arreglo.length-1; i++) {
        if (arreglo[i]>arreglo[i+1]) {
            return false;
        }
    }
    return true;
}

const esCapicua = (cadena) => {
    const invertida = cadenaInvertidaDos(cadena);
    console.log(invertida)
    if(cadena === invertida)
        return true;
    return false;
}

const sinRepetidos = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
        if(cantidadDeRepetida(cadena, cadena[i]) > 1){
            cadena.slice(cadena[i]);
        }
    }
    return cadena;
}

const esCapicuaVDos = (cadena) => cadenaInvertidaDos(cadena) === cadena

let numeros = [1,2,3,12,5];
console.log(sinRepetidos('neuquen'));