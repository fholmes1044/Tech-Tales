import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom"

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory()

    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then((data) =>{
            setUser(data)
            data.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    const login = () => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        console.log(user, "inside logout function")
        
        setUser({})
        setLoggedIn(false)
        history.push("/")  
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};