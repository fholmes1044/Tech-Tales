
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
// import { useParams } from "react-router";
import EventsDisplay from "./EventsDisplay";
import ReviewsDisplay from "./ReviewsDisplay";


function App() {
  const [allEvents, setAllEvents] = useState([])
  
useEffect(() =>{
  fetch("/events")
  .then((r) => {
      try {
          return r.json();
      } catch (e) {
          console.error('Error parsing response data: ', e);
          return {};
      }
  })
  .then((event) => {
      setAllEvents(event);
  })
  .catch((err) => {
      console.error('Error making request: ', err);
  });
}, []);
    // useEffect(() =>{
    //     fetch("/events")
    //     .then((r) => r.json())
    //     .then((event) =>{
    //         setAllEvents(event)
    //     })
    // }, []
    // )

    const addNewReview = (newReview) => {
      // const updatedReviews = allEvents.map((event) =>{
      //   if(event.id === newReview.event_id){
      //       return {...event,reviews:[...event.reviews, newReview]}
      //   } else {
      //     return event
      //   }
      // })
  
      // setAllEvents(updatedReviews)
    }

    const addNewEvent = (newEvent) => {
      console.log("APPNEWEVENT", newEvent)
      setAllEvents([...allEvents, newEvent])
    }
console.log("Events", allEvents)

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
          <NewEventForm addNewEvent={addNewEvent} />
          <EventsDisplay allEvents={allEvents}/>
        </Route>
        <Route exact path ="/reviews">
          <ReviewsDisplay/>
          <NewReviewForm allEvents={allEvents} addNewReview={addNewReview}/>
        </Route>
      </Switch> 
      </UserProvider>
    </div>
  );
}

export default App;
