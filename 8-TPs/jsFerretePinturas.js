/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var centigrados;
var fahrenheit;

function FahrenheitCentigrados () 
{
    fahrenheit = document.getElementById("Temperatura").value;
    centigrados = (parseInt(fahrenheit) - 32) / 1,8;
    alert(fahrenheit+"° Fahrenheit son "+centigrados+"° Centigrados.");
}

function CentigradosFahrenheit () 
{
    centigrados = document.getElementById("Temperatura").value;
    fahrenheit = (parseInt(centigrados) * (9/5)) + 32;
    alert(centigrados+"° Centirgrados son "+fahrenheit+"° Fahrenheit.");
}