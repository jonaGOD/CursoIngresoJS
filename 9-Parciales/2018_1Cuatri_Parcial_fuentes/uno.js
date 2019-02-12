
function mostrar()
{
var ancho;
var largo;
var perimetro;
    ancho = prompt("Ingrese el ancho del rectangulo");
    largo = prompt("Ingrese el largo del rectangulo");
    perimetro = parseInt(ancho)*2 + parseInt(largo)*2;
    alert(perimetro);
}