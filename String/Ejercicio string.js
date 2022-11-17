/// ejercicio 3

let nombre = "José Manuel"
let apellido = "Agar Novoa"

let estudiante = (nombre.concat(" ").concat(apellido))
console.log(estudiante)

let estudianteMayus = (estudiante.toUpperCase())
let estudianteMinus = (estudiante.toLowerCase())

console.log(estudianteMayus)
console.log(estudianteMinus)

console.log(estudiante.length)
let variable = (estudiante.length)
console.log(variable)

let variable2 = (nombre.charAt(0))

console.log(variable2)

let variable3 = (apellido.charAt(9))
console.log(variable3)

let sinEspacios = (estudiante.replace(/ /g, ""))
console.log(sinEspacios)

let booleana = (estudiante.includes(nombre))
console.log(booleana)



