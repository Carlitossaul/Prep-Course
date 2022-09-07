var numero = "123" 
  var num = ""
  var nam = ""
  for(var i = numero.length-1; i >= 0; i--){
    num = num + numero[i]
  }for(var j = 0; j < numero.length; j ++){
    nam = nam + numero[j]
    if(num === nam){
      console.log("Es capicua")
    } else {
      console.log("No es capicua")
    }
  }


