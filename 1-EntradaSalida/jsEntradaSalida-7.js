/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numUno;
var numDos;
var resultado;
    
function sumar()
{	
    
    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resultado = parseInt(numUno) + parseInt(numDos);
    alert("La suma es "+ resultado)
}
function restar()
{
    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resultado = parseInt(numUno) - parseInt(numDos);
    alert("La resta es "+ resultado)
}
function multiplicar()
{ 
    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resultado = parseInt(numUno) * parseInt(numDos);
    alert("La multiplicacion es "+ resultado)
}
function dividir()
{
    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resultado = parseInt(numUno) / parseInt(numDos);
    alert("La division es "+ resultado)
}