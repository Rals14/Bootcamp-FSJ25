import { createContext, useState } from "react";



//Crear mi contexto
export const UserContext = createContext(null);

//Crear mi provider Distribuye información (el valor que le demos)

export const MyProvider = ({children}) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    )
}

