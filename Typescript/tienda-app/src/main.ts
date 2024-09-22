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
  </div>
`
//Inicializamos la tienda para poder agregar productos
const tienda = new Tienda();

// document.querySelector<HTMLElement>('#parrafo')!.innerText = 'Texto desde el p'

const form = document.getElementById('formProducto') as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  const formData = new FormData(form);
  const id = Date.now();

  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
  const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);

  console.log(nombre, precio, cantidad);

  let productito = new Producto(id, nombre, precio, cantidad);
  console.log(productito);
  tienda.agregarProducto(productito);

});

