function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while ((sexo != "f") && (sexo != "m")) {
    alert("Ingrese f ó m");
    sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN