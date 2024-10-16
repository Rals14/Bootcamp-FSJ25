import { Session } from './pages/session/Session'
import { Home } from './pages/home/Home'
import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MyProvider } from './context/UserDataContext'

function App() {


  return (
    <>
      <MyProvider>

        {/*Activar BrowserRouterDom en la app*/}
        <BrowserRouter>
          {/*Activar la funcionalidad para crear rutas de la app*/}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/session' element={<Session />} />
          </Routes>
        </BrowserRouter>

      </MyProvider>

    </>
  )
}

export default App
