function saludar (usuario){
    return "hola " + usuario + "!";
}

function crearsaludo(usuario, cb){
    return cb(usuario)
}

console.log(crearsaludo('charlie', saludar))