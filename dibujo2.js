var d = document.getElementById("dibujo_tecnico");
var lienzo = d.getContext("2d");

for (var i = 0; i <= 499; i+=10) {
  dibujarLinea("red", 0, 0+i, 0+i, 499);
  dibujarLinea("blue", 499, 0+i, 499-i, 499);
  dibujarLinea("#666666", 0+i, 0, 0, 499-i);
  dibujarLinea("green", 0+i, 0, 499, 0+i);
}
dibujarMarco(499);

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
