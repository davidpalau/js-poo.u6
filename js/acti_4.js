/**
 * ACTIVIDAD 4 – Herencia
− Crear un tipo de objeto para representar computadoras
− Sus propiedades son:
o Marca, al texto
o Modelo, al texto
o Memoria RAM, un número que indica GB de capacidad
o Capacidad del disco duro, un número que indica GB de capacidad
o Pulgadas de pantalla, un número que indica Pulgadas
−Métodos informáticos
o toString, se usa para obtener como texto los detalles de la computadora
− A la hora de crear un ordenador se pueden indicar todos los valores, pero por defecto (sin estar obligado a
indicarlos) se toman como valores 17 pulgadas, 512 GB de disco duro y 4 GB de RAM. la marca y
Los modelos son necesarios.
− Crear otro tipo de objeto que represente las laptops, que heredan todo de las computadoras pero
agregue una propiedad llamada autonomía, que es un número que expresa horas. Este objeto está construido como
ordenadores, pero se le puede añadir autonomía (por defecto, 4 horas). Por defecto en portátiles las pulgadas son 12
y el disco duro 256 GB.
 */
//@ts-check
function Computadoras(marca, modelo, ram=4, disco=512, pulgadas= 17){
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.marca = marca;
    this.disco = disco;
    this.pulgadas = pulgadas;

    this.toString= function(){return"Marca: "+this.marca+ ", modelo: "+ this.modelo +
    ", RAM: " +this.ram+", disco: "+this.disco +", pulgadas: "+this.pulgadas};

}

function Portatil(marca, modelo, ram=4, disco=256,pulgadas = 13 , autonomia=4){
this.__proto__=new Computadoras(marca,modelo,ram,disco, pulgadas);
    this.autonomia = autonomia;
    this.toString=function(){
        return this.__proto__.toString()+
        " autonomía: " +this.autonomia+" horas.\n";
    }
}
let ordenador_1 = new  Computadoras("Acer","torre");
console.log(ordenador_1.toString());
let ordenador_2 = new Computadoras("Asus", "predator");
console.log(ordenador_2.toString());
let portatil_1 = new Portatil("Acer","Swift");
console.log(portatil_1.toString());