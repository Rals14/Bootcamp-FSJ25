import { set, useForm } from 'react-hook-form'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useEffect, useState } from 'react';

export const Products = () => {

    const { register, handleSubmit, reset, setValue } = useForm();
    const [products, setProducts] = useState([]);
    const [editId, setEditId] = useState(null);

    const getProducts = async () => {
        const productsCollection = await getDocs(collection(db, 'products'))
        const data = productsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        console.log(data)
        setProducts(data)

        // getProducts(collection(db, 'products'))
        // .then((products) => {
        //     console.log(products);
        // }).catch((error) => {
        //     console.log(error);
        // })
    }

    // addProduct -> Agregar producto a la base de datos
    const addProduct = async (data) => {
        console.log(data)

        let response = await addDoc(collection(db, 'products'), {
            name: data.name,
            price: parseFloat(data.price),
            stock: parseInt(data.stock)
        })
        console.log(response)

        reset();
        getProducts()
    }


    // editProduct -> Editar producto de la base de datos
    const editProduct = async (product) => {
        console.log(product);

        setValue('name', product.name);
        setValue('price', product.price);
        setValue('stock', product.stock);

        //Guardamos el id del producto a editar
        setEditId(product.id);

        updateProduct(product)

    }

    // updateProduct -> Actualizar producto en la base de datos
    const updateProduct = async (data) => {
        const docRef = doc(db, 'products', editId)

        await updateDoc(docRef, {
            price: parseFloat(data.price),
            stock: parseInt(data.stock)
        })
        reset();
        setEditId(null);
        getProducts()
    }

    const deleteProduct = async (id) => {
        const docRef = doc(db, 'products', id)
        await deleteDoc(docRef)
        getProducts()
    }



    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <h1>CRUD BASICO firestore</h1>
            <h2>Productos</h2>

            <form onSubmit={editId ? handleSubmit(updateProduct) : handleSubmit(addProduct)}>
                <section>
                    <label>Nombre de producto</label>
                    <input type="text" {...register('name')} required />
                </section>

                <section>
                    <label>Precio</label>
                    <input type="text" {...register('price')} required />
                </section>

                <section>
                    <label>Cantidad</label>
                    <input type="number" {...register('stock')} required />
                </section>
                <button type='submit'>{editId ? 'Editar Producto' : 'Agregar producto'}</button>
            </form>

            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button onClick={() => { editProduct(product) }}>Editar</button>
                                        <button onClick={() => { deleteProduct(product.id) }}>Borrar</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </main>
        </>
    )
}
