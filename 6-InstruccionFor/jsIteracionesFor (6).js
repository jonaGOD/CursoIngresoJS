function mostrar()
{
var num2;
var pares=0;

num2 = prompt("Ingrese un numero");

for(var num1=1; num1<=num2 ; num1++ ) {
    if(num1 % 2 == 0) {
        pares++
        document.write(num1);
        }
    }
    alert ("La catidad es pares es "+pares);
}//FIN DE LA FUNCIÓN