function mostrar()
{
    var numero1
    var numero2
    var numero3

    numero1 = prompt("Ingresa el primer numero");
    numero2 = prompt("Ingrese el segundo numero");
    
    if (numero1 == numero2) {
        alert(numero1 + numero2);
    } 
    else {
        if (numero1 > numero2) {
        numero3 = parseInt(numero1) - parseInt(numero2);
        alert(numero3);
        } else {
            numero3 = parseInt(numero1) + parseInt(numero2);
            if (numero3 > 10)
                alert("La suma es "+numero3+" y supero el 10");
        } 
    } 
}