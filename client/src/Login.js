import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";
import {Stack, Text, TextField, PrimaryButton } from "@fluentui/react";
import "./styling/Login.css"

function Login(){
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {errors, setErrors} = useContext(UserContext)
    const {login} = useContext(UserContext)
    const history = useHistory()

    const textStyles = {
        root: {
          marginBottom: 20,
        },
      };
    
      const buttonStyles = {
        root: {
          backgroundColor: "#419a9c",
          color: "white",
        },
      };

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
        <div id="login-form">
        <Stack
            verticalAlign="center"
            horizontalAlign="center"
      styles={{
        root: {
          height: "100vh",
          justifyContent: "center",
        },
      }}
    >
      <Text variant="xxLarge" styles={textStyles}>
        Time to Sign In,
        <br/>
         Glad You are Here!
      </Text>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          styles={textStyles}
          value={userName}
          onChange={(e, newValue) => setUsername(newValue)}
        />
        <TextField
          label="Password"
          type="password"
          styles={textStyles}
          value={password}
          onChange={(e, newValue) => setPassword(newValue)}
        />
        <PrimaryButton text="Login" styles={buttonStyles} type="submit" />
      </form>
      <ul>{errors}</ul>
    </Stack>
    </div>
  );
        
}

export default Login;