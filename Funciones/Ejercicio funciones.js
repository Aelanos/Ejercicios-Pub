//ejercicio funciones


function imprimeTrue() {
    const i = ("true")
    console.log(i);
};

imprimeTrue();


const promise = promesa();
async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
};


function* idsPares() {
    let id = 0
    while (true) {
        yield id += 2
    }
};

const pares = idsPares();

console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());
console.log(pares.next());