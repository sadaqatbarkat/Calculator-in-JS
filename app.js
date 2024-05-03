function calculator (receive){
document.getElementById("input").value +=  receive
}

function equal (){
  var save = document.getElementById("input")
  save.value = eval(save.value)

}
function ac (){
  document.getElementById("input").value = ""
}

