function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
    switch (mesDelAño) {
        case "Enero":
            alert("que comiencies bien el año!!!");
            break;
        case "Marzo":
            alert("a las clases!!!");
            break;
        case "Julio":
            alert("se vienen las vacaciones!!!");
            break;
        case "Diciembre":
            alert("Felices fiestas!!!")
            break;
        default:
            break;
}
}//FIN DE LA FUNCIÓN