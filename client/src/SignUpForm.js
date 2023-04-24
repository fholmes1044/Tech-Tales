import React, { useState, useContext } from "react"
import { UserContext } from "./context/user";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fullName, setFullName] = useState(" ")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [errorsList, setErrorsList] = useState([]);
  const {signup} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="uname">Username:</label><br/>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label><br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="pw confirmation">Password Confirmation:</label><br/>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="fullname">Full Name:</label><br/>
        <input
          type="text"
          id="fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="age">Age:</label><br/>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="email">Email:</label><br/>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit"/>
        
        </form>
    )
}

export default SignUpForm;