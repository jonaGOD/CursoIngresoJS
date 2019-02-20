  function mostrar()
{

  var contador=0;
  var numero;
  var numeroPositivo=0;
  var sumaPositivo
  var numeroNegativo=0;
  var sumaNegativo
  var cantidadPositivos=0;
  var cantidadNegativos=0;
  var cantidadCeros=0;
  var cantidadPares;
  var promedioPositivo;
  var promedioNegativo;
  var diferenciaPosNeg;

	//declarar contadores y variables

	var respuesta="si";

	while(respuesta!="no") {
    numero = prompt("Ingrese un numero");

    if (numero < 0) {
      numeroNegativo = numero;
      sumaNegativo = parseInt(numero) + parseInt(numeroNegativo);
      cantidadNegativos = ++cantidadNegativos;
    } else {
      if (numero > 0) {
        numeroPositivo = numero;
        cantidadPositivos = ++cantidadPositivos;
      } else {
        if (numero == 0) {
          cantidadCeros = ++cantidadCeros;
        }
      }
    }
    respuesta = prompt("¿Desea ingresar otro numero?");
	}
  alert(sumaNegativo+" y "+numeroPositivo);
  alert(cantidadNegativos+" y "+cantidadPositivos);
  alert(cantidadCeros);

}//FIN DE LA FUNCIÓN
