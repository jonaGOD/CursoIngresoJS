/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado;
	sueldo = document.getElementById("importe").value;
    resultado = parseInt(sueldo) * 1.1;
    document.getElementById("resultado").value = resultado;
}