function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero

	acumulador = prompt("Ingrese un número");

	while (contador < 4) {
		++contador
		numero = prompt("Ingrese un número");
		acumulador = parseInt(acumulador) + parseInt(numero);
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
