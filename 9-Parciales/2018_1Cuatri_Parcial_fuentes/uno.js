
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese el ancho del rectangulo");
    largo = prompt("Ingrese el largo del rectangulo");
    perimetro = (parseInt(ancho) + parseInt(largo)) * 2;

    alert("El perimetro es "+perimetro);
}