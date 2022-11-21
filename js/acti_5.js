/**
 * ACTIVITY 5 – Difference between dates 
− Make a page that asks for a date using the notation, day/month/year. 
− If there is a failure on the date it is requested again. The correctness of the date will not be checked, 
but it will have 2 digits for the day, 2 for the month and 2 for the year. 
 A second date will be requested and validated as well. 
− Finally, 2 dates of type Date will be created and the difference in days between it will be shown.
 */


window.addEventListener("load", inicio, true);

function inicio() {
   function validarFecha(fecha) {
      //día de 01 hasta 31, mes de 01 hasta 12, año dos digitos.
      const FECHA_REGEX = /^(0[1-9]|[1-3]\d)\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2,2})$/;
      return FECHA_REGEX.test(fecha);
   }
   let condition = true;
   // Dos bucles en lugar de una funcion porque la frase del prompt es diferente.
   while (condition) {
      var fecha_1 = window.prompt("Introduce primera fecha: ");
      if (validarFecha(fecha_1)) {
         condition = false;
      } else {
         condition = true;
      }
   }

   let condi = true;
   while (condi) {
      var fecha_2 = window.prompt("Introduce otra fecha: ");
      if (validarFecha(fecha_2)) {
         condi = false;
      } else {
         condi = true;
      }
   }

 


   function diferenciaFechas(fecha_1, fecha_2) {

      let fecha = fecha_1.split("/");
      let dia = fecha[0];
      let mes = fecha[1];
      //fuerzo que el año es de este milenio.
      let anyo = 20 + fecha[2];

      let fecha_string = fecha_2.split("/");
      let dia_1 = fecha_string[0];
      let mes_1 = fecha_string[1];
      //fuerzo que el año es de este milenio.
      let anyo_1 = 20 + fecha_string[2];

      let fecha_obj_1 = new Date(anyo, mes, dia);
      let fecha_obj_2 = new Date(anyo_1, mes_1, dia_1);

      return (fecha_obj_2.getTime() - fecha_obj_1.getTime()) / (1000 * 60 * 60 * 24);
   }
   document.write("<h1>Resta entre fechas</h1><p>Hay una diferencia de "
    +diferenciaFechas(fecha_1, fecha_2)+" días.</p>");



}