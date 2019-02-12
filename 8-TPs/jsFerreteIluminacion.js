/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var cantLamparitas
var precioLamparitas
var marca
var impuesto
var precioFinal

function CalcularPrecio () 
{
    marca = document.getElementById("Marca").value;
    cantLamparitas = document.getElementById("Cantidad").value;

    if (cantLamparitas >= 6) {
        precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.5);
        document.getElementById("precioDescuento").value = precioLamparitas;
        
    } else {

        if (cantLamparitas==5 && marca=="ArgentinaLuz") {
            precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.4);
            document.getElementById("precioDescuento").value = precioLamparitas;
        
        } else {

            if (cantLamparitas==5 && marca!="ArgentinaLuz") {
                precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.3);
                document.getElementById("precioDescuento").value = precioLamparitas;
            
            } else {

                if ((cantLamparitas==4 && marca=="ArgentinaLuz") || (cantLamparitas==4 && marca=="FelipeLamparas")) {
                    precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.25);
                    document.getElementById("precioDescuento").value = precioLamparitas;
                
                } else {

                    if ((cantLamparitas==4 && marca!="ArgentinaLuz") || (cantLamparitas==4 && marca!="FelipeLamparas")) {
                        precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.20);
                        document.getElementById("precioDescuento").value = precioLamparitas;

                    } else {

                        if (cantLamparitas==3 && marca=="ArgentinaLuz") {
                            precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.15);
                            document.getElementById("precioDescuento").value = precioLamparitas;

                        } else {

                            if(cantLamparitas==3 && marca=="FelipeLamparas") {
                                precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.10);
                                document.getElementById("precioDescuento").value = precioLamparitas;

                            } else {

                                if((cantLamparitas==3 && marca!="ArgentinaLuz") || (cantLamparitas==3 && marca!="FelipeLamparas")) {
                                    precioLamparitas = (35 * parseInt(cantLamparitas)) - ((35 * parseInt(cantLamparitas)) * 0.05);
                                    document.getElementById("precioDescuento").value = precioLamparitas;

                                } else {
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
 if (precioLamparitas >= 120) {
    impuesto = (parseInt(precioLamparitas * 0.1));
    alert("IIBB Usted pago "+ impuesto)
}
}