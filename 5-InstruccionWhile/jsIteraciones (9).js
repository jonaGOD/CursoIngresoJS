function mostrar()
{

  var contador=0;
  var numeroIngresado;
  var numeroMinimo;
  var numeroMaximo;
  var primero;
	// declarar variables

  var respuesta='si';
  primero = true;

	while(respuesta!='no') {
    numeroIngresado = prompt("Ingrese el numero");

    if (primero) {
      numeroMaximo = numeroIngresado;
      numeroMinimo = numeroIngresado;
      primero = false;

      } else {
        if (numeroIngresado >= numeroMaximo) {
          numeroMaximo = numeroIngresado;

          } else {
            if (numeroIngresado <= numeroMinimo) {
              numeroMinimo = numeroIngresado;

              }
          }
      }
		respuesta = prompt("¿Desea ingresar otro numero?");
	}

  document.getElementById("maximo").value = numeroMaximo;
  document.getElementById("minimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN
