function mostrar()
{
//tomo la edad  
    var edad
    edad = document.getElementById("edad").value;
    if (edad<=12 || edad>=18) {
        alert("La persona NO es adolescente")
    }
}//FIN DE LA FUNCIÓN