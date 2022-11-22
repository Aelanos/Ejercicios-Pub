// Ejercicio arrays

const listaCompra = ["pan", "huevos", "arroz", "leche", "carne"]
console.log(listaCompra);

listaCompra.push("aceite de girasol")

console.log(listaCompra);

const peliculasFav = [
    { Titulo: "harry Potter y la piedra Filosofal", Director:"J. K. Rowling", Fecha: new Date ("November 29 2001") },
    { Titulo: "Happy Feet", Director:"George Miller", Fecha: new Date ("December 1 2006") },
    { Titulo: "School of Rock" , Director:"Richard Linklater", Fecha: new Date ("February 13 2004")}
]

const Directores = peliculasFav.map(peliculasFav =>{
    return peliculasFav.Director
})
const Peliculas = peliculasFav.map(peliculasFav =>{
    return peliculasFav.Titulo
})

console.log(Directores);
console.log(Peliculas);

const dirTit_Concat = Directores.concat(Peliculas)
console.log(dirTit_Concat);


const dirTit_prop = [...Directores,...Peliculas]
console.log(dirTit_prop);
