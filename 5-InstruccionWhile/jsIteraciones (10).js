  function mostrar()
{

  var contador=0;
  var numero;
  var numeroPositivo=0;
  var numeroNegativo=0;
  var cantidadPositivos=0;
  var cantidadNegativos=0;
  var cantidadCeros=0;
  var cantidadPares=0;
  var promedioPositivo=0;
  var promedioNegativo=0  ;
  var diferenciaPosNeg;

	//declarar contadores y variables

	var respuesta=true;

  while(respuesta!=false) {
    numero = prompt("Ingrese un número")
    contador++
    if (numero < 0 && contador == 1) {
      numeroNegativo = numero;
      cantidadNegativos = ++cantidadNegativos
    } else {
      if (numero > 0 && contador == 1) {
        numeroPositivo = numero;
        cantidadPositivos = ++cantidadPositivos
      } else {
        if (numero < 0) {
          numeroNegativo = parseInt(numeroNegativo) + parseInt(numero);
          cantidadNegativos = ++cantidadNegativos
        } else {
          if (numero > 0) {
            numeroPositivo = parseInt(numeroPositivo) + parseInt(numero);
            cantidadPositivos = ++cantidadPositivos;
          } else {
            if (numero == 0) {
              cantidadCeros = ++cantidadCeros;
            }
          }
        }
      }
    }
    if (numero % 2 == 0) {
      cantidadPares = ++cantidadPares
    }
    promedioNegativo = parseInt(numeroNegativo) / parseInt(cantidadNegativos);
    promedioPositivo = parseInt(numeroPositivo) / parseInt(cantidadPositivos);
    diferenciaPosNeg = parseInt(numeroPositivo) - ( parseInt(-numeroNegativo))
    respuesta = confirm("¿Desde ingresar otro numero?")
  }

  alert("Suma de positivos es "+numeroPositivo);
  alert("Suma de negativos es "+numeroNegativo);
  alert("Cantidad de negativos es "+cantidadNegativos);
  alert("Cantidad de positivos es "+cantidadPositivos);
  alert("Cantidad de ceros es "+cantidadCeros);
  alert("La diferencia de positivos y negativos es "+diferenciaPosNeg);
  alert("El promedio de números negativos es "+promedioNegativo);
  alert("El promedio de números positivos es "+promedioPositivo);
  alert("La cantidad de pares es "+cantidadPares);

}//FIN DE LA FUNCIÓN
