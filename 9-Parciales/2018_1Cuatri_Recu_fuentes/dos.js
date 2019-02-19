function mostrar()
{
    var compra
    var descuento
    var compraDesc
    var compraIva

    compra = document.getElementById("elNombre").value;
    descuento = parseInt(compra) * 0.1;
    compraDesc = parseInt(compra) - parseInt(descuento);
    compraIva = compraDesc + (compraDesc * 0.21);

    alert("Tu compra es de $"+compra+" tenes un descuento del 10% queda en $"+compraDesc+", mas el IVA es $"+compraIva);

}