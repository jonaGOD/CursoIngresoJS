function mostrar()
{
    var planeta;

    planeta = prompt("Ingrese el planeta");

    switch (planeta) {
        case "tierra":
        alert("Aca vivimos.");
        break;
        case "mercurio":
        case "venus":
        alert("Aca hace mas calor.");
        break;
        case "marte":
        case "ceres":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        alert("Aca hace mas frio.");
        break;
        default:
        alert("No es un planeta valido.");
        break;
    }
}
