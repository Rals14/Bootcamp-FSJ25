import './style.css'
import { Producto } from './clases/Producto';
import { Tienda } from './clases/Tienda';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestión de tiendita</h1>
    <form id="formProducto">
      <section> 
        <label for="username">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto">
      </section>

      <section> 
        <label for="password">Precio</label>
        <input type="text" id="precio" name="precio" placeholder="Ingresa su precio">
      </section>

      <section> 
        <label for="cantidad">Cantidad</label>
        <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa su cantidad">
      </section>

      <button type="submit">Agregra producto</button>
    </form>

    <ul id="producList"></ul>
  </div>
`
//Inicializamos la tienda para poder agregar productos
const tienda = new Tienda();

// document.querySelector<HTMLElement>('#parrafo')!.innerText = 'Texto desde el p'

const form = document.getElementById('formProducto') as HTMLFormElement;
const producList = document.getElementById('producList') as HTMLUListElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();

  const id = Date.now();

  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
  const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);

  console.log(nombre, precio, cantidad);

  let productito = new Producto(id, nombre, precio, cantidad);
  console.log(productito);
  tienda.agregarProducto(productito);
  renderProductos();

});

function renderProductos(){
  producList.innerHTML = '';
  
  console.log(tienda.listarProductos());
  tienda.listarProductos().map((producto :Producto) => { 
    const productoItem = document.createElement('li');

    console.log(Producto);

    productoItem.textContent = `Producto: ${producto.getNombre()} - Stock: ${producto.getCantidad()} - $${producto.getPrecio()}`;
    producList.appendChild(productoItem);
  });
}

renderProductos();