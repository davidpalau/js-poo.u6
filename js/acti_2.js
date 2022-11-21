/**
 * ACTIVITY 2 – Add arithmetic mean calculation method to arrays 
− Array objects (in short, arrays) have numerous methods that are very useful 
− We find it interesting to add a method to all arrays for calculating the arithmetic mean of their 
elements. 
− Modify the prototype of the arrays to add this method. 
Hint: Use the reduce method of Arrays
ACTIVIDAD 2: agregue el método de cálculo de la media aritmética a las matrices
− Los objetos de matriz (en resumen, matrices) tienen numerosos métodos que son muy útiles
− Nos parece interesante añadir un método a todos los arrays para calcular la media aritmética de sus
elementos.
− Modificar el prototipo de los arreglos para agregar este método.
Sugerencia: use el método de reducción de Arrays
 * 
 */
const myArray = [1,2,3,4];
const otroArray = [10, 5, 6,4]

    Array.prototype.media = function(){
      let suma = this.reduce((num_1, num_2) => (num_1 + num_2));
      let media = suma / this.length;
      return media;
    }

    console.log(myArray.media());
    console.log(otroArray.media());
