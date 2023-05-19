import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom"

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
     console.log(user)

    useEffect(() => {
            fetch("/me")
            .then(res => res.json())
            .then((data) =>{
                setUser(data)
                // data.errors ? setLoggedIn(false) : setLoggedIn(true)
                setLoggedIn(true)
                // data ? setLoggedIn(true) : setLoggedIn(false)
            })
        }, [])

    const login = (userobj) => {
        setLoggedIn(!loggedIn)
        setUser(userobj)
        // console.log("login", userobj)
        
        // console.log("loggedstatus for login,", loggedIn)
    }


    const logout = () => {
        setUser({})
        // console.log(user, "user inside logout function")
        setLoggedIn(false)
        // console.log(loggedIn, "loggedin status inside logoutfunction")
        // history.push("/")  
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    return (
        <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, setLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};