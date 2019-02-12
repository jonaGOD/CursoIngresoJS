/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;
var ancho;
var radio;
var alambre;
var cemento;
var cal;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    alambre = 2*(parseInt(largo)+parseInt(ancho))*3;
    alert(alambre);
}
function Circulo () 
{
	radio = document.getElementById("Radio").value;
    alambre = 2 * Math.PI * radio;
    alert(alambre);
}
function Materiales () 
{
	largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    cemento = (parseInt(largo)*parseInt(ancho))*2;
    cal = (parseInt(largo)*parseInt(ancho))*3;
    alert("Se necestian "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}