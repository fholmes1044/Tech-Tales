import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";

function Login(){
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {errors, setErrors} = useContext(UserContext)
    const {login} = useContext(UserContext)
    const history = useHistory()

function handleSubmit (e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: { 
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })
        .then(res => res.json())
        .then(response => {
            if(!response.errors){
                login(response)
                history.push("/")
            }else {
                const errorList = [response].map(error => <li key={error.errors}>{error.errors}</li> )
                setErrors(errorList)
            }
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
                {errors}
            </ul>
        </div> 
    )
}

export default Login;