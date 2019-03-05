function mostrar()
{
    var precio
    var descuento
    var precioFinal

    precio = prompt("Ingreso el precio del producto");
    descuento = prompt("Ingrese el descuento obtenido");

    precioFinal = parseInt(precio) - (parseInt(precio) * parseInt(descuento) / 100);
    document.getElementById("elPrecioFinal").value = precioFinal;
}