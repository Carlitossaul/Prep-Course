function EstudianteHenry(nombre, apellido) {
this.nome = nombre || "nombre no enviado"
this.sobrenome = apellido
this.esEstudiante = true
this.materias = ["html","css", "git", "github" ]
}
var estudiante1 = new EstudianteHenry('Carlos', 'Lovey');
var estudiante2 = new EstudianteHenry('Mariel', 'Aranda');


EstudianteHenry.prototype.despedida = function (idioma){
    if(idioma === 'en') return 'bye ' + this.nome
    else return "Adios " + this.nome 
}

console.log(estudiante2.despedida('en'))
