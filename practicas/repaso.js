const valorAbsoluto = (numero) =>{
    if (numero > 0) {
        return numero   
    }else{
        return numero*-1
    }
}

let numero = 5
console.log(valorAbsoluto(numero))