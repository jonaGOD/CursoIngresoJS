function mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

  respuesta = prompt("¿Desea ingresar un numero?");

	while (respuesta == "si") {
    ++contador
    numero = prompt("Ingrese el número");

    if ( numero < 0 && contador == 1) {
      negativo = parseInt(numero);

      } else {
        if ( numero < 0 && contador > 1) {
          negativo = parseInt(numero) * parseInt(negativo);

        } else {

          if (numero > 0 && contador == 1) {
            positivo = parseInt(numero);

            } else {
              if (numero > 0 && contador > 1) {
                positivo = parseInt(numero) + parseInt(positivo);
              }
            }
        }
      }
  respuesta = prompt("¿Desea ingresar otro numero?");
  }

  document.getElementById('suma').value=positivo;
  document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
