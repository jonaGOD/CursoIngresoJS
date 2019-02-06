function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = Math.floor(Math.random() * (10 - 1) + 1)
	alert(numero);
	if (numero>=9) {
		alert("EXCELETE");
	} else if (numero>4 && numero<9) {
		alert("APROBÓ")
	} else {
		alert("Vamos la próxima se puede")
	}
}//FIN DE LA FUNCIÓN