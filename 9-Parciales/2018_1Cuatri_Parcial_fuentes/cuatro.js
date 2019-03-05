function mostrar()
{
    var num1;
    var num2;
    var numSuma;

    num1 = prompt("Ingrese el primer numero");
    num2 = prompt("Ingrese el segundo numero");

    if (num1 == num2) {
        alert(num1+num2);
    } else {
        if (num1 > num2) {
            num1 = parseInt(num1) - parseInt(num2);
            alert(num1);
        } else {
            if (num1 < num2) {
                numSuma = parseInt(num1) + parseInt(num2);
                alert(numSuma);
            }
        }
    }
    if (numSuma > 10) {
        alert("La suma es "+numSuma+" y supero el 10");
    }
}