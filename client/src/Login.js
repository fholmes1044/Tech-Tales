import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";

function Login(){
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {login} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()

            }
            
    return(
        
        <div>
            <h2>Hey login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input
                    type="text"
                    id="name"
                    value={userName}
                    onChange= {(e) => setUsername(e.target.value)}
                    /><br/>
                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                /><br/>
                <input type="submit"/>
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </div> 
    )
}

export default Login;