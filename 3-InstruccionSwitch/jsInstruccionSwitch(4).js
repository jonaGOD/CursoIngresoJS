function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño) {
    case "Febrero":
    alert("Tiene 28");
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert("Tiene 30");
    break;
    default:
    alert("Tiene 31");
    break;
}
}//FIN DE LA FUNCIÓN