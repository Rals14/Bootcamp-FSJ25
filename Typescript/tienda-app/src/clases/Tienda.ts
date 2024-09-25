import { Producto } from "./Producto";

export class Tienda{
    private productos: Producto[] = [];

    constructor(){
        const productosLocalStorage = JSON.parse(localStorage.getItem('productos') || '[]');
        //Reconvertir los datos que tenemos en el local storage a objetos de tipo Producto
        this.productos= productosLocalStorage.map((producto: Producto) => 
            new Producto(producto.id, producto.nombre, producto.precio, producto.cantidad)
        )

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

    listarProductos(){
        return this.productos;
    }
}