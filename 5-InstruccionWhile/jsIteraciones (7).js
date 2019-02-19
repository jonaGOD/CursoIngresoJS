function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	respuesta = prompt("¿Desea ingresar un número?");

	while (respuesta == 'si') {
		++contador
		if (contador == 1) {
			acumulador = prompt("Ingrese un número")
			acumulador = parseInt(acumulador);
		} else {
			if (contador > 1) {
				numero = prompt("Ingrese un número");
				acumulador = parseInt(numero) + parseInt(acumulador);
			}
		}
		respuesta = prompt("¿Desea ingresar un número?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN