const texto =prompt('ingrese un texto');
let tieneVocal= false;
let vocalExistente=[]
let i= 0

while(i< texto.length) {
    if ( texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u' ){
        tieneVocal=true
        vocalExistente.push(texto[i])
    }   
    i++;
}

if (tieneVocal===true) {
    document.write(`si tiene vocal , la vocal es:  <b>${vocalExistente}</b> ` )
}else{
    document.write('no tiene vocal')
}