const divisores = (numero) => {
    let divisores = [];
    for (let i = 0; i <= numero; i++) {
        if(numero%i===0){
            divisores.push(i)   
        }   
    }
    return divisores
}


const laMasCorta = (array1,array2) => { 
    if (array1.length > array2.length) {
        return array2
    }
    else {
        return array1
    } 
}

const sonFactores = (n, lista) => {
    for (let i = 0; i < lista.length; i++) {
        if (n%lista[i]!==0){
            return false
        }
    }
    return true
}


   

const tieneRepetido = (lista) => {
  for (let i = 0; i < lista.length; i++) {
      for (let j = i+1; j < lista.length; j++) {
          if (lista[i]===lista[j]) {
              return true
          }  
      }      
   }
   return false
}

const dondeAparece = (lista,blanco) => {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]===blanco)
          return i 
    }
    return -1
}


const devuelvePromedio = (lista) => {
        let suma=0
    for (let i = 0; i < lista.length; i++) {
        suma+=lista[i]
    }
    let promedio = suma / lista.length
    return promedio

}

const maximo = (lista) => {
    let maximo = Math.max.apply(null,lista)
    return maximo 
}

const maximoIndice = (lista) => {
    let maximo = 0
    for (let i = 0; i < lista.length; i++) {
        if(lista[maximo] < lista[i]){
            maximo = i
        }
    }
    return maximo
} 

const maximoEntre = (lista,a,b) => {
    let maximo = a
    for (let i = a; i <= b; i++) {
        if (lista[maximo] < lista[i]) {
            maximo = i      
        }
    }
    return maximo;
    
}

const intercalar = (lista,a,b) => {
    let aux = lista[a]
    lista[a]= lista[b]
    lista[b] = aux
    return lista   
}

const frecuencia = (lista,n) => {
    let aparece = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]===n) {
            aparece++
        }
    }
    return aparece
}

const interseccion = (lista1,lista2) => {
    let lista3 = []
    for (let i = 0; i < lista1.length; i++) {
        for (let j = 0; j < lista2.length; j++) {
            if (lista1[i]===lista2[j]) {
                lista3.push(lista1[i])
                
            }
        }
    }
    return lista3
}

const union = (lista1,lista2) => { 
    for (let i = 0; i < lista1.length; i++) {
        if (!lista2.includes(lista1[i])) {
            lista2.push(lista1[i])
        }         
    }
    return lista2.sort()
}


let lista1 = [1,2,3,4];
let lista2 = [5,6,7,8];
console.log(union(lista1,lista2));