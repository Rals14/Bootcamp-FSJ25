import { useEffect } from 'react';
import './App.css'


const BASEurl = 'https://reqres.in/';
function App() {

  const login = async (credentials) => {
    const response = await fetch(BASEurl + 'api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    console.log(data);
    return data.token;
  }

  const token = login({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  })

  
  const getUsers = async (token) => {
    const response = await fetch(BASEurl + 'api/users?page=2', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);
  }

  getUsers(token);

  return (
    <>
      <h1>Practica metodos http fetch</h1>
    </>
  )
}

export default App
