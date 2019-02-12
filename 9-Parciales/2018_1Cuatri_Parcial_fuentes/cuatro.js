function mostrar()
{
    var num1
    var num2
    var num3

    num1 = prompt("Ingrese el primer número.")
    num2 = prompt("Ingrese el segundo número.")

    if (num1 == num2) {
        alert(num1+num2);
    } else {
        if (num1 > num2) {
            num3 = parseInt(num1) - parseInt(num2);
            alert(num3);
        } else {
            num3 = parseInt(num1) + parseInt(num2);
        } if (num3 > 10) {
            alert("La suma es "+num3+" y supera 10.");
        }
    }
}