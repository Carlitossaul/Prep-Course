function saludar (usuario){
    return "hola " + usuario + "!";
}

function crearsaludo(usuario, c){
    return c(usuario)
}

console.log(crearsaludo('charlie', saludr))