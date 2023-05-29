
import React, {useState, useEffect} from "react";
import './App.css';
import SignUpForm from "./SignUpForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Login from "./Login";
import { UserProvider } from "./context/user";
import { Switch, Route } from "react-router-dom";
import NewEventForm from "./NewEventForm";
import NewReviewForm from "./NewReviewForm";
import EventsDisplay from "./EventsDisplay";
import ReviewsDisplay from "./ReviewsDisplay";


function App() {
  const [allEvents, setAllEvents] = useState([])
useEffect(() =>{
  fetch("/events")
  .then((r) => r.json())
  .then((event) => setAllEvents(event))
  .catch((err) => {
      console.error('Error making request: ', err);
  });
}, []);


    const addNewEvent = (newEvent) => {
      setAllEvents([...allEvents, newEvent])
    }

    const handleEditClick = (id, summary) => {
      console.log("i was clicked",id ,"summary", summary )
    }  
    
    
  return (
    <>
          
      <UserProvider>
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
          <NewEventForm addNewEvent={addNewEvent} />
          <EventsDisplay allEvents={allEvents}/>
        </Route>
        <Route exact path ="/reviews">
          <NewReviewForm allEvents={allEvents} />
          <ReviewsDisplay allEvents={allEvents}  handleEditClick={handleEditClick}  />
          
        </Route>
      </Switch> 
      </UserProvider>
    </>
  );
}

export default App;

