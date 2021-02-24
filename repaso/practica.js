"use strict";

let año = parseInt( prompt('ingrese un año' ) );
if (año% 4==0 || año% 400==0 || año% 100!=0) {
    console.log('es biciesto');
}
if (año%100!==0) {
    
}{
    console.log('no es biciesto')
}