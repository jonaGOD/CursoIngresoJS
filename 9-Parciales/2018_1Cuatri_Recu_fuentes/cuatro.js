function mostrar()
{
    var libros
    var precioLibros
    var pagaTarjeta
    var totalDesc
    var totalPaga

    libros = prompt("¿Cuantos libros va a llevar?");
    precioLibros = prompt("Ingrese el valor total de los libros");
    pagaTarjeta = prompt("¿Abona con tarjeta? Si o No");

    switch (pagaTarjeta) {
        case "si":
        if (libros > 2 && precioLibros > 2000) {
            totalDesc = parseInt(precioLibros) - (parseInt(precioLibros) * 0.1);
            totalPaga = parseInt(totalDesc) - (parseInt(totalDesc) * 0.15);
            totalPaga = parseInt(totalPaga) + (parseInt(totalPaga) * 0.1);
            alert("Debe abonar $"+totalPaga);
            
            } else {
                if (libros > 2) {
                    totalPaga = parseInt(precioLibros) + (parseInt(precioLibros) * 0.1);
                    alert("Debe abonar $"+totalPaga);
                
                } else {
                    if (libros < 2) {
                        totalPaga = parseInt(precioLibros) + (parseInt(precioLibros) * 0.1);
                        alert("Debe abonar $"+totalPaga);                        
                    }
                }
            }
        break;
        default:
        if (libros > 2 && precioLibros > 2000) {
            totalDesc = parseInt(precioLibros) - (parseInt(precioLibros) * 0.1);
            totalPaga = parseInt(totalDesc) - (parseInt(totalDesc) * 0.15);
            alert("Debe abonar $"+totalPaga);

            } else {
                if (libros > 2) {
                    totalPaga = parseInt(precioLibros) - (parseInt(precioLibros) * 0.1);
                    alert("Debe abonar $"+totalPaga);

                    } else {
                        if (libros < 2) {
                        alert("Debe abonar $"+precioLibros);      
                        }
                    }
                }
        break;
    }
}