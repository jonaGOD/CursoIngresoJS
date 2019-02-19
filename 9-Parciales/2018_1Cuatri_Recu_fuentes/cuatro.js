function mostrar()
{
    var libros
    var precioLibros
    var pagaTarjeta
    var totalPaga

    libros = prompt("¿Cuantos libros va a llevar?");
    precioLibros = prompt("Ingrese el valor total de los libros");
    pagaTarjeta = prompt("¿Abona con tarjeta? Si o No");

    if (pagaTarjeta == "no" && (libros < 2 && precioLibros < 2000)) {
        totalPaga = parseInt(precioLibros);
        alert("Debe abonar $"+precioLibros);

    } else {
        if (pagaTarjeta == "si" && (libros < 2 && precioLibros < 2000)) {
            totalPaga = parseInt(precioLibros) + (parseInt(precioLibros) * 0.1);
            alert("Debe abonar $"+totalPaga);

        } else {
            if (pagaTarjeta == "no" && (libros > 2 && precioLibros < 2000)) {
                totalPaga = parseInt(precioLibros) - (parseInt(precioLibros) * 0.1);
                alert("Debe abonar $"+totalPaga);
                
                } else {
                    if (pagaTarjeta == "si" && (libros > 2 && precioLibros < 2000)) {
                        totalPaga = parseInt(precioLibros) - (parseInt(precioLibros) * 0.1);
                        totalPaga = parseInt(totalPaga) + ((parseInt(precioLibros) * 0.1));
                        alert("Debe abonar $"+totalPaga);
                    
                    } else {
                        if ()
                    }
            }
        }
    }
}
