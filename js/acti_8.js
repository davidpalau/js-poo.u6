/**
 * ACTIVIDAD 8 – Acceso prohibido
− Crear una página web que muestre el texto "Bienvenido" pero si el horario es de 9:00 a 14:00 y es un
día que no es ni sábado ni domingo.
− Si no se cumple esa premisa, entonces se mostrará el texto “Página cerrada”
 */
function mostrarSaludo(){
 
  let fecha = new Date(); 
  let hora = fecha.getHours();
  let dsemana = fecha.getDay();
    
  if( dsemana != 6 && dsemana != 7){
    texto = "Welcome";
  }else{
    texto = "Page closed"
  }
 
  document.getElementById('saludo').innerHTML = texto;
 
}
 window.addEventListener("load", mostrarSaludo,true);