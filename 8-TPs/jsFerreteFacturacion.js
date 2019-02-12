/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno
var precioDos
var precioTres
var valor

function Sumar () 
{
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;    
    valor = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
    alert(valor);
}
function Promedio () 
{
	precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;    
    valor = (parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)) / 3;
    alert(valor);
}
function PrecioFinal () 
{
	precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;    
    valor = (parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)) * 0.21 + (parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres));
    alert(valor);
}