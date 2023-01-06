class Estudiante {
    nombre = "Jose"
    asignaturas = ["Javascript", "HTML", "CSS"]
    obtenDatos() {
        return { nombre: this.nombre, asugnatura: this.asignaturas }
    }

}

const estudiante = new Estudiante()
console.log(estudiante.obtenDatos());