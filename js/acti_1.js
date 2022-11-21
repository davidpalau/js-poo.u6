/**
 * We want to create objects that represent points, from them we need:
Have 2 properties: x and y. They will serve to represent coordinates of the point.
The construction of the points will use a constructor function to which 2 numbers are passed. If what
you receive in each coordinate is not a number, it is set to zero.
A method called change to which we pass 2 numbers and allows us to modify the coordinates of the
number.
A method called copy that returns a copy of the object
An object called equals that receives a second point and tells us if both points are equal.
A method called addition that receives a second point and returns a third point resulting from
adding the coordinates of the previous 2
A method called getDistance that also receives a second point and returns the distance between
both points, for this operation, take into account:

Tiene 2 propiedades: x e y. Servirán para representar las coordenadas del punto.
La construcción de los puntos utilizará una función constructora a la que se le pasan 2 números. Si que
que recibe en cada coordenada no es un número, se establece en cero.
Un método llamado cambio al que le pasamos 2 números y nos permite modificar las coordenadas del
número.
Un método llamado copia que devuelve una copia del objeto.
Un objeto llamado igual que recibe un segundo punto y nos dice si ambos puntos son iguales.
Un método llamado suma que recibe un segundo punto y devuelve un tercer punto resultante de
sumando las coordenadas de los 2 anteriores
Un método llamado getDistance que también recibe un segundo punto y devuelve la distancia entre
ambos puntos, para esta operación tener en cuenta:

 */
//@ts-check

function Punto(x, y) {

    this.x = x;
    this.y = y;

    this.cambiar = (x, y) => {
        this.x = x;
        this.y = y;

    }


    this.copia = () => (new Punto(x = this.x, y = this.y));

    this.iguales = (punto_3) => {
        if (this.x === punto_3.x && this.y === punto_3.y) {
            return true;
        } else {
            return false;
        }
    }

    this.suma = (punto_4) => (new Punto((this.x + punto_4.x),(punto_4.y + this.y)));

    this.obtenerDistancia = (punto_5)=>{
      return  Math.sqrt((this.x**2 + punto_5.x**2) + (this.y**2+punto_5.y**2));
    }


    this.toString = () => "x = "+this.x +" y = "+this.y+".";


}




let punto_1 = new Punto(1, 2);
let punto_2 = new Punto(1, 2);
console.log(punto_1.iguales(punto_2));
console.log(punto_1.suma(punto_2));

let punto_3 = new Punto(5, 5);
console.log(punto_1.obtenerDistancia(punto_3));
console.log(punto_1.toString());