/**
 * ACTIVIDAD 6 – Validar URLs
− Crear una aplicación web para validar URLs
− Recuerda que una URL está formada por:
✓ Protocolo, seguido de 2 puntos y, según el protocolo, de hasta 3 barras delanteras (/),
pero incluso puede que no haya ninguno.
✓ Puede existir un nombre de usuario (no obligatorio) que constará únicamente de textos, número y/o
guiones Además, puedes separar varias palabras con puntos, escribe gema.morant para
ejemplo)
✓ Después del nombre de usuario (li ho hay) puede haber 2 puntos seguidos de la contraseña. En el
contraseña cualquier serie de caracteres es válida. Cabe señalar que si hay una contraseña
debe haber un nombre de usuario seguido de 2 puntos, pero puede haber un nombre de usuario y debe haber
no habrá contraseña (los 2 puntos tampoco se pondrían).
✓ Si hay un nombre de usuario, se coloca un símbolo de arroba al final de la contraseña. Si no hay
contraseña se coloca detrás del nombre de usuario.
✓ Luego el nombre de la máquina, cuyos caracteres son los mismos que para el nombre de usuario. A
Al menos un nombre de máquina consta de 2 palabras separadas por un punto, pero puede haber más
palabras.
✓ Opcionalmente, puede poner 2 puntos seguidos de un número de puerto. El número de puerto es una serie de
dígitos numéricos.
✓ También opcionalmente puede haber al final de una ruta, que comenzaría con el símbolo de
dividir (/) y luego palabras y símbolos de dividir. Esas palabras pueden tener puntos intermedios.
− Aunque puede haber una cadena de búsqueda al final de todo lo anterior, no nos vamos a complicar
validación adicional. Pero al menos, se permitirá (sin que sea obligatorio) que al final haya
cualquier serie de caracteres si van precedidos del símbolo literal de cierre del signo de interrogación (?).
 */

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

 let urlString = window.prompt("Ingresa url: ");

 if(isValidURL(urlString)){
    alert("La url es valida.")
 }else{
    alert("La url ingresada no es valida.")
 }

