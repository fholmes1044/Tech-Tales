
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
    

    const addNewReview = (newReview) => {
      //updatedEvents
      const updatedEvents = allEvents.map((event) =>{
        if(event.id === newReview.event_id){
            return {...event,reviews:[...event.reviews, newReview]}
        } else {
          return event
        }
      })
  
      setAllEvents(updatedEvents)
    }

    const addNewEvent = (newEvent) => {
      // console.log("APPNEWEVENT", newEvent)
      setAllEvents([...allEvents, newEvent])
    }


    const handleDeletedReview = (id) => {
      fetch(`/reviews/${id}`, {
          method: "DELETE"
      }).then((response) => {
          if (response.ok) {
            setAllEvents((events) => {
              const eventToUpdate = events.find((event) => {
                return event.reviews.some((review) => {
                  return review.id === id;
                });
              });
             
              const updatedReviews = eventToUpdate.reviews.filter((review) => {
                return review.id !== id;
              });
              const updatedEvent = { ...eventToUpdate, reviews: updatedReviews };
        
             const updatedEvents = events.map((event) => {
                return event.id === updatedEvent.id ? updatedEvent : event;
              });
             return updatedEvents;
            });
          }
        })
    }
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
          <ReviewsDisplay allEvents={allEvents} handleDeletedReview= {handleDeletedReview}/>
          <NewReviewForm allEvents={allEvents} addNewReview={addNewReview}/>
        </Route>
      </Switch> 
      </UserProvider>
    </div>
  );
}

export default App;
