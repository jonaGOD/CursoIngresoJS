function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    if (edad<13) {
        alert("La persona es un niño");
        } else {
                if (edad>=18) {
                alert("La persona es mayor de edad");
                } else {
                alert("La persona es adolescente");
                }
                }
}//FIN DE LA FUNCIÓN