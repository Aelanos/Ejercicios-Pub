// Ejercicio arrays
// Lista Compra
const listaCompra = ["pan", "huevos", "arroz", "leche", "carne"]
console.log(listaCompra);

listaCompra.push("aceite de girasol")

console.log(listaCompra);
// Películas 
const peliculasFav = [
    { titulo: "harry Potter y la piedra Filosofal", director: "J. K. Rowling", fecha: new Date("November 29 2001") },
    { titulo: "Happy Feet", director: "George Miller", fecha: new Date("December 1 2006") },
    { titulo: "School of Rock", director: "Richard Linklater", fecha: new Date("February 13 2004") }
]

const fechaPost = peliculasFav.filter(peliculasFav => peliculasFav.Fecha > new Date("january 1 2010"))
console.log(fechaPost);

// Concatenación 
const directores = peliculasFav.map(peliculasFav => {
    return peliculasFav.director
})
const peliculas = peliculasFav.map(peliculasFav => {
    return peliculasFav.titulo
})

console.log(directores);
console.log(peliculas);

const dirTit_Concat = directores.concat(peliculas)
console.log(dirTit_Concat);


const dirTit_prop = [...directores, ...peliculas]
console.log(dirTit_prop);

