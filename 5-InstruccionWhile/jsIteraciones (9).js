function mostrar()
{

  var contador=0;
  var numeroIngresado;
  var numeroMinimo;
  var numeroMaximo;
	// declarar variables

  var respuesta='si';

  numeroMinimo = 0
  numeroMaximo = 0

	while(respuesta!='no') {
    numeroIngresado = prompt("Ingrese el numero");

    if (numeroIngresado >= numeroMaximo) {
      numeroMaximo = numeroIngresado;

      } else {
        if (numeroIngresado <= numeroMinimo) {
          numeroMinimo = numeroIngresado;
        }
      }
		respuesta = prompt("¿Desea ingresar otro numero?");
	}

  document.getElementById("maximo").value = numeroMaximo;
  document.getElementById("minimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN
