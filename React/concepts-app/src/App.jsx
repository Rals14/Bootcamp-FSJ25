import './App.css'
import {Saludo} from './components/Saludo'


function App() {

  return (
    <>
      {/*Así se comenta en JS dentro del return de HTML */}
      <h1>holiwis desde el app</h1>
      <p>FSJ25</p>
      {/* Llamada a un componente */}
      <Saludo />
    </>
  )
}

export default App
