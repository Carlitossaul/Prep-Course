function decirHolaAlUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function crearSaludo(usuario, cb) {
  return cb(usuario);
}

console.log(crearSaludo("Carlos", decirHolaAlUsuario));
