import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory()
    

    useEffect(() => {
            fetch("/me")
            .then(res => res.json())
            .then((data) =>{
                setUser(data)
                // data.errors ? setLoggedIn(false) : setLoggedIn(true)
                setLoggedIn(true)
                // setIsLoading(false);
                // data ? setLoggedIn(true) : setLoggedIn(false)
            })
        }, [])

    const login = (userobj) => {
        // setLoggedIn(true)
        setUser(userobj)
    }


    const logout = () => {
        setUser(null)
        // setLoggedIn(false)  
        history.push("/")
    }

    const signup = (user) => {
        setUser(user)
        // setLoggedIn(true)
    }

    
    return (
        <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, setLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};