function mostrar()
{
   var nota;
   var sexo;
   var alumnos;
   var promedioNotas;
   var varones;
   var notaMenor;
   var sexoMenor;

   alumnos = 0;
   notaMenor = 11
   varones = 0;
   promedioNotas = 0;

   while (alumnos < 5) {
      nota = prompt("Ingrese la nota");
      if (nota > 11 || nota < 0) {
         alert("La nota no es valida");
      }
      sexo = prompt("Ingrese su sexo");
      switch (sexo) {
         case "m":
         if (nota >= 6) {
            varones = varones + 1;
         }
         if (nota < notaMenor) {
            notaMenor = nota;
            sexoMenor = sexo 
         }
         break;
         case "f":
         if (nota < notaMenor) {
            notaMenor = nota;
            sexoMenor = sexo;
         }
         break;
         default:
         alert("El sexo debe ser m o f.");
         continue;
      }
      promedioNotas = parseInt(nota) + parseInt (promedioNotas)

      alumnos = alumnos + 1;
   }
   promedioNotas = parseInt(promedioNotas) / alumnos;
      alert("El promedio de notas es "+promedioNotas);
      alert("La nota mas baja es "+notaMenor+" y el sexo es "+sexoMenor);
      alert("La cantidad de varones con nota 6 o mas es "+varones);
}