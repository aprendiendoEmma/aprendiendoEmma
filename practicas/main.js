let n = parseInt(prompt('ingrese un numero'));
let c = parseInt(prompt('ingrese un numero'));
let divisores = 0
for (let i = 1; i <= n; i++) {
    if (n%i==0 && divisores < c) {
        divisores++
        console.log(i)
    }
    
}