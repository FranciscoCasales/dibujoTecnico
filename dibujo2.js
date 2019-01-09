var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("btn_aceptar");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo_tecnico");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMarco(tamanio){
  dibujarLinea("white", 1, 1, tamanio, 1);
  dibujarLinea("white", 1, 1, 1, tamanio);
  dibujarLinea("white", tamanio, 1, tamanio, tamanio);
  dibujarLinea("white", 1, tamanio, tamanio, tamanio);
}

function dibujoPorClick(){
  //lienzo.clearRect();
  dibujarMarco(499);
  console.log(lienzo);
  var numeroDeLineas = parseInt(texto.value);
  for (var i = 0; i <= ancho-1; i+=(ancho/numeroDeLineas)) {
    dibujarLinea("red", 0, 0+i, 0+i, 499);
    dibujarLinea("blue", 499, 0+i, 499-i, 499);
    dibujarLinea("#666666", 0+i, 0, 0, 499-i);
    dibujarLinea("green", 0+i, 0, 499, 0+i);
  }
}
