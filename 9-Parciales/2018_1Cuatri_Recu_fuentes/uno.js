
function mostrar()
{
    var perro1
    var perro2
    var peso1
    var peso2
    var pesoTotal

    perro1 = prompt("Ingrese el nombre de su primero perro");
    perro2 = prompt("Ingrese el nombre de su segundo perro");
    peso1 = prompt("Ingrese el peso de su primer perro");
    peso2 = prompt("Ingrese el peso de su segudno perro");

    pesoTotal = parseInt(peso1) + parseInt(peso2)

    alert("Tenes dos mascotas "+perro1+" y "+perro2+", que pesan "+peso1+" y "+peso2+" kilos, la suma de los kilos es "+pesoTotal);

}