import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js";
import Receta from "./receta.js";

class Main{
    constructor(){
        
        this.receta = new Receta("Taco de Sal", "Adrian Prado")
    }

    probarCantidad(){
        console.log("-----Cantidad-----")
        this.cantidad = new Cantidad(2, "kg")
        this.cantidad2 = new Cantidad(2000, "gr")
        console.log(this.cantidad.getDescripcion())
    }
    probarIngrediente(){
        console.log("-----Ingredientes-----")
        this.ingrediente = new Ingrediente(this.cantidad, "Tortilla", 15)
        this.ingrediente2 = new Ingrediente(this.cantidad2, "Sal", 10)
        console.log(this.ingrediente.getDescripcion())
    }

    probarReceta(){
        this.receta.agregarIngrediente(this.ingrediente)
        this.receta.agregarIngrediente(this.ingrediente2)
        console.log("-----Numero Ingredientes-----")
        console.log(this.receta.getNumeroIngredientes())
        console.log("-----Costo-----")
        console.log(this.receta.getCosto())
        console.log("-----Receta-----")
        this.receta.imprimirEnConsola()
    }
}

let app = new Main()
app.probarCantidad()
app.probarIngrediente()
app.probarReceta()