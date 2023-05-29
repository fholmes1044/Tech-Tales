import React, { useState, useContext } from "react"
import { UserContext } from "./context/user";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fullName, setFullName] = useState(" ")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [errorsList, setErrorsList] = useState([]);
  const {signup} = useContext(UserContext);
  const history = useHistory()

function handleSubmit (e) {
    e.preventDefault()

    fetch("/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        full_name: fullName,
        age: age,
        email: email
      })
    })
    .then(res => res.json())
    .then(user => {
      if (!user.errors){
        signup(user)
        history.push('/')
      }else {
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
        setFullName("")
        setAge("")
        setEmail("")
        const errorLis = user.errors.map(error => <li>{error}</li> )
        setErrorsList(errorLis)
      }
      })
    }

    return(
      <div>
        <h3>Signup</h3>
        <form  onSubmit={handleSubmit} className="sign-in-form">
        <label htmlFor="uname">Username:</label><br/>
        <input
          type="text"
          id="username"
          className="signup-input"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <label htmlFor="password">Password:</label><br/>
        <input
          type="password"
          id="password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        /><br/>
        <label htmlFor="pw confirmation">Password Confirmation:</label><br/>
        <input
          type="password"
          id="password_confirmation"
          className="signup-input"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /><br/>
        <label htmlFor="fullname">Full Name:</label><br/>
        <input
          type="text"
          id="fullname"
          className="signup-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        /><br/>
        <label htmlFor="age">Age:</label><br/>
        <input
          type="text"
          id="age"
          className="signup-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br/>
        <label htmlFor="email">Email:</label><br/>
        <input
          type="text"
          id="email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input type="submit"/>
        </form>
        <ul>
          {errorsList}
        </ul>
        </div>
    )
}

export default SignUpForm;