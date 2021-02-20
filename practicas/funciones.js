const mostrarTresVeces = (cadena,cantidad) => {

	for (let i  = 0; i  < cantidad; i ++) {
		document.write(cadena  + '<br>')
	}
}


const promedio = (n, m) => {

	let resultado = (n + m) / 2

};


const valorAbsoluto = (numero) =>{
	if (numero > 0) {
		return numero;

	}else{
		return numero * -1;
	}
}


const exclamar = (unaCadena)=>{
	return `¡${unaCadena}!`;
}

const gritar = (unaCadena)=> {
	return exclamar(exclamar(exclamar(unaCadena)));
}

const elValorAlCubo = (base, exponente)=> {
	let multiplicador=1
	for (let i = 0; i < exponente; i++) {
		multiplicador *= base;
	}
	return multiplicador;
}

const cantidadDivisores = (numero)=>{
	let cantDivisores = 0
	for (let i = 1; i <= numero; i++) {
		if(numero%i==0)
			cantDivisores++
	}
	return cantDivisores;
}

const esPrimo = (n) => {
	if(cantidadDivisores(n)===2)
		return true;
	return false;
}

const esPrimovdos = (n) => {
	let cantDivisores = 0
	if(n===1){
		return true
	}

	for (let i = 1; i <= numero; i++) {
		if(numero%i==0)
			cantDivisores++
	}
	if(cantDivisores === 2)
		return true
	return false
}

const dameElMayor = (numero1, numero2) => {
	if(numero1 > numero2){
		return numero1
	}else {
		return numero2
	}
}

const sumaDeDivisores = (numero)=>{
	let	sumaDeDivi=0
	for (let i = 1; i <= numero; i++) {
		if(numero%i == 0 ){
			sumaDeDivi+=i
		}
	}
	return sumaDeDivi;
}


const esPerfecto = (numero)=>{
	let	sumaDeDivi=0
	for (let i = 1; i < numero; i++) {
		if(numero%i == 0 ){
			sumaDeDivi+=i
		}
	}
	if(sumaDeDivi===numero)
		return true
	return false
}

const esPerfectov2 = (numero)=>{
	if(sumaDeDivisores(numero)-numero===numero){
		return true
	}
	return false
}


const dameElMasGrande = (n1,n2) => {
	if(n1 > n2){
		return n1
	}
	 else{
		return n2
	}

}

const ElMayor = (n1,n2,n3) => {
	let mayor = Math.max(n1,n2,n3)
	return mayor
}

const potencia1 = (a,b) => {
	potencia= Math.pow(a,b);
	return potencia;
}

const sumaDivi = (numero) => {
	let sumaDivisor = 0
	for (let i = 0; i < numero; i++) {
		if (numero%i==0) {
		sumaDivisor+=i
}
}
	return sumaDivisor
}


const numeroAbundante = (n) => {
	let suma = 0
	for (let i = 0; i < n; i++) {
		if (n % i == 0){
		suma+=i
		}
	}
	if (suma > n) {
		return true
	}
	return false
}

const numeroAbundanteVdos = n => sumaDivi(n) > n

const numeroPrimoMayor =  (numero) => {

	let futuroPrimo = numero + 1;

	while(!esPrimo(futuroPrimo)){
		futuroPrimo++;
	}

	return futuroPrimo;
}


const esDivisorDeCinco = (numero) => {
	if (numero % 5 === 0){
		return true
	}
	return false
}

const siguienteNumeroDivisilePorCinco = n => {
	let proximoDivisible =  n;
	while(!esDivisorDeCinco(proximoDivisible)){
		proximoDivisible++
	}
	return proximoDivisible
}

const recuadrar = (cadena) => {
	console.log(`**${'*'.repeat(cadena.length)}**
* ${cadena} *
**${'*'.repeat(cadena.length)}**`)
}

const vecesQueApareceLetra = (cadena, letra) => {
	let cantidadDeLetra = 0
	for(let i = 0; i < cadena.length; i++) {
		if(cadena[i] === letra){
			cantidadDeLetra++
		}
	} return cantidadDeLetra
}

const tieneRepetida = (cadena) => {

	for (let i = 0; i < cadena.length; i++) {
		if(vecesQueApareceLetra(cadena, cadena[i]) > 1)
			return true
	}
	return false;
}


const esDivisor = (numero,numero2) => {
	if (numero % numero2 === 0){
		return true
	}
	return false
}



const tienePoderoso = n => {
	for (let i = 2; i < n; i++) {
		if (esDivisor(n,i) && esPrimo(i) && esDivisor(n,Math.pow(i,2))) {
			return true
		}
	}
	return false
}



const aparece = (cadena,letra)=> {
	if(vecesQueApareceLetra(cadena,letra) === 0)
		return false
	return true
}



const dameRepetida = (cadena) => {
	for (let i = 0; i < cadena.length; i++) {
		if (vecesQueApareceLetra(cadena,cadena[i]) >=2) {
			return cadena[i]
		}
	}
	return 'no tiene repetidos'
}




//////////////////////////////////// PROBAR FUNCIONES //////////////////////////////////////////////////////

const cadena = (prompt('ingrese una cadena'));
console.log(dameRepetida(cadena));