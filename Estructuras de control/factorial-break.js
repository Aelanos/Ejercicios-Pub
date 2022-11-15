// ejercicio 5

let factorial = 1
let numero = 1

while ( numero < 10) {
    factorial *= numero
    numero++
    if (numero === 10)
        break;
}
console.log(factorial)

