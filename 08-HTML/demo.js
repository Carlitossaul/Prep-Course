const numeros = [1,2,3,4,5,6,7,8]
// numeros.forEach(function(ele, index){
//     console.log(ele, index);
// })
numeros.push(9,[1,2,3,4,5,[1,2,3,4,5,6]]);
// console.log(numeros[9][5][5])
function mostrarNumeros (){
    console.log(numeros)
}

const Carlos ={
    nombre : "Carlos",
    apellido: "Lovey",
    edad: 29,
    saludar : function(){
        console.log(`Hola mi nombre es ${this.nombre} 
        ${this.apellido} y tengo ${this.edad} años`);
    }
}
//Carlos.saludar()
// mostrarNumeros()

let nuevaFuncion = function(){
    console.log(Carlos.saludar(), mostrarNumeros())
}
nuevaFuncion()