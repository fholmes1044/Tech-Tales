import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({events:[]})
    const [loggedIn, setLoggedIn] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    

    useEffect(() => {
            fetch("/me")
            .then(res => res.json())
            .then((data) =>{
                setUser(data)
                // if(data.errors){
                //     setErrors(data.errors)
                // }else{
                // data.errors ? setLoggedIn(false) : setLoggedIn(true)
                setLoggedIn(true)
            })
        }, [])

    const login = (userobj) => {
        setUser(userobj)
    }


    const logout = () => {
        history.push("/")
        setUser(null)  
        setErrors([])
    }

    const signup = (user) => {
        setUser(user)
    }

    
    return (
        <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, setLoggedIn, errors, setErrors}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};