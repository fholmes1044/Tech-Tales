import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";

function Login(){
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {login} = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/login",{
            method: "POST",
            headers: { "Content-Type" : 'application/json'},
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })
        .then(res => res.json())
        .then((user) => {
            login(user)
            history.push("/")
        })
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