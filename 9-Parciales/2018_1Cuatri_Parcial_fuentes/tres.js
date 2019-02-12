function mostrar()
{
var precio
var descuento
var precioFinal

precio = prompt("Ingrese el precio");
descuento = prompt("Ingrese el porcentaje de descuento");

precioFinal = parseInt(precio) - [parseInt(precio) * parseInt(descuento) / 100];
document.getElementById("elPrecioFinal").value = precioFinal;
}