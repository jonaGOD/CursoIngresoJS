function mostrar()
{
    var clave = prompt("ingrese el número clave.");
    var contador;

    contador = 0

    while (clave != "utn750") {
        contador++
        if (contador == 3) {
            break;
        }

        alert("Error. Vuelva a veficar");
        clave = prompt("ingrese el número clave");        
    }
}//FIN DE LA FUNCIÓN