function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero >= 10) {
		alert("Ingrese un número entre 0 y 9");
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	document.getElementById("Numero").value = numero

}//FIN DE LA FUNCIÓN