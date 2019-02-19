function mostrar()
{
    var amigos
    var precioIndividual
    var precioTotal
    var precioIva
    var precioPropina

    amigos = prompt("¿Cuantas personas son?");
    precioTotal = prompt("¿Cuanto es el total a pagar?");

    precioPropina = parseInt(precioTotal) + (parseInt(precioTotal) * 0.1);
    precioIva = precioPropina + (precioPropina * 0.21);

    precioIndividual = (parseInt(precioIva) / parseInt(amigos));

    alert("Cada uno deberá abonar $"+precioIndividual);

}
