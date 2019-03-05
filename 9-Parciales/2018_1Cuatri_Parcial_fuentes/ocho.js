function mostrar()
{
    var numero;
    var letra;
    var continuar;
    var numerosPares;
    var numerosImpares;
    var cantCeros;
    var promedioPos;
    var sumaNeg;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    var contador;

    contador = 0;
    promedioPos = 0;
    sumaNeg = 0;
    numeroMax = -100;
    numeroMin = 100;
    continuar = true;
    numerosPares = 0;
    numerosImpares = 0;
    cantCeros = 0;

    while (continuar != false) {
        numero = prompt("Ingrese un numero.");
        numero = parseInt(numero);

        if (numero > 100 || numero < -100) {
            alert("Numero invalido");
            continue;
        }

        letra = prompt("Ingrese una letra.");
        
        if (numero > -100 && numero < 100) {
            if (numero % 2 == 0) {
                numerosPares = numerosPares + 1;
            } else {
                if (numero % 2 != 0) {
                    numerosImpares = numerosImpares + 1;
                }
            }

            if (numero == 0) {
                cantCeros = cantCeros + 1
            }

            if (numero > 0) {
                promedioPos = parseInt(numero) + parseInt(promedioPos);
            }

            if (numero < 0) {
                sumaNeg = parseInt(sumaNeg) + parseInt(numero);
            }

            if (numero > numeroMax) {
                letraMax = letra;
                numeroMax = numero
            }

            if (numero < numeroMin) {
                    letraMin = letra;
                    numeroMin = numero;
            }
        }
        contador++;
        continuar = confirm("¿Desea continuar?");
    }
    promedioPos = parseInt(promedioPos) / contador

    alert("a) La cantidad de numeros pares es "+numerosPares);
    alert("b) La cantidad de numeros impares es "+numerosImpares);
    alert("c) La cantidad de ceros es "+cantCeros);
    alert("d) El promedio de los positivos es "+promedioPos);
    alert("e) La suma de todos los negativos es "+sumaNeg);
    alert("f) El numero maximo es "+numeroMax+" y la letra "+letraMax);
    alert("f) El numero minimo es "+numeroMin+" y la letra "+letraMin);
}