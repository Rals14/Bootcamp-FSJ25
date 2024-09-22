import { Producto } from "./Producto";

export class Tienda{
    private productos: Producto[] = [];

    constructor(){
        this.productos = JSON.parse(localStorage.getItem('productos') || '[]');
    }

    agregarProducto(producto: Producto){
        this.productos.push(producto);
        this.refreshLocalStorage();
    }


    /*Guardamos todos los productos de this.productos dentro del local storage Key "productos" */
    refreshLocalStorage(){
        //Actualizamos el local storage
        localStorage.setItem('productos', JSON.stringify(this.productos));
    }
}