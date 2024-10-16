import { LoginFormComponent } from "./components/LoginFormComponent"
import { RegisterFormComponent } from "./components/RegisterFormComponent"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Session = () => {

  const [typeForm, setTypeForm] = useState('login')



  return (
    <>
      <Link to='/'>Go back</Link>
      <h1>Session management</h1>
      <button onClick={()=> {setTypeForm('login')}}>Login</button>
      <button onClick={()=>{setTypeForm('signup')}}>Register</button>
      {/*Renderizado condicional*/}
      {typeForm === 'login' ? <LoginFormComponent/> : <RegisterFormComponent/>}
      
    </>
  )
}
