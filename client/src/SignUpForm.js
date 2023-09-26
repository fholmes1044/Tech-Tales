import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useHistory } from "react-router-dom";
import { Stack, Text, PrimaryButton, TextField } from "@fluentui/react";
import "./styling/SignUpForm.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fullName, setFullName] = useState(" ");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const { signup } = useContext(UserContext);
  const history = useHistory();
  const textStyles = {
    root: {
      marginBottom: 20,
    },
  };

  const buttonStyles = {
    root: {
      backgroundColor: "#419a9c",
      color: "white",
      marginTop: "16px",
    },
  };

  function handleSubmit(e) {
    e.preventDefault();

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
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          history.push("/");
        } else {
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
          setFullName("");
          setAge("");
          setEmail("");
          const errorLis = user.errors.map((error) => <li>{error}</li>);
          setErrorsList(errorLis);
        }
      });
  }

  return (
    <div id="signup-form">
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
          Time to Sign Up
          <br />
          Your Tech Tale Begins Here!
        </Text>

        <form onSubmit={handleSubmit} className="sign-in-form">
          <TextField
            label="Username"
            type="text"
            id="username"
            className="signup-input"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            id="password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <TextField
            label="Password Confirmation"
            type="password"
            id="password_confirmation"
            className="signup-input"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <TextField
            label="Full Name"
            type="text"
            id="fullname"
            className="signup-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            label="Age"
            type="text"
            id="age"
            className="signup-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            label="Email"
            type="text"
            id="email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PrimaryButton text="Login" styles={buttonStyles} type="submit" />
        </form>
        <ul>{errorsList}</ul>
      </Stack>
    </div>
  );
};

export default SignUpForm;
