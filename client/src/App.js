import React,{ useState, useEffect} from "react";
import './App.css';
import SignUpForm from "./SignUpForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Login from "./Login";
import { UserProvider } from "./context/user";
import { Switch, Route } from "react-router-dom";
import NewEventForm from "./NewEventForm";

function App() {
  const [allEvents, setAllEvents] = useState([])

  useEffect(()=>{
    fetch("/events")
     .then((data)=> data.json())
     .then((events) => {
      console.log("EE",events)
     })
  }, [])

  return (
    <div className="App">
          
      <UserProvider>
        Learn React
      <NavBar/>
       <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path ="/signup">
          <SignUpForm/>
        </Route>
        <Route exact path ="/login">
          <Login/>
        </Route>
        <Route exact path ="/events">
          <NewEventForm/>
        </Route>
      </Switch> 
      </UserProvider>
    </div>
  );
}

export default App;
