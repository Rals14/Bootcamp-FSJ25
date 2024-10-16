import { useState } from "react"
import { Despedida } from "./Despedida"
// Declaración de un componente siempre con mayúscula
export const Saludo = () => {
    // Primer hook
    // Hook es una función que nos permite modificar el estado de un componente
    // UseState es el valor inicial del estado
    const [nombre, cambiarNombre] = useState('Raúl')
    return (
        <>
            <h3>Yo en realidad estoy en el compente saludo</h3>
            <h2>Hola {nombre}, como estas?</h2>
            <button onClick={() => {cambiarNombre("Antonio")}}>MAGIA</button>
            <Despedida nombreUsuario={nombre}/>
        </>
    )
}
