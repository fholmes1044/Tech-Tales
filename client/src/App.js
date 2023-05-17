
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
  .then((r) => {
      try {
          return r.json();
      } catch (e) {
          console.error('Error', e);
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
       console.log("NR", newReview)
      const updatedEvents = allEvents.map((event) =>{
        if(event.id === newReview.event_id){
          console.log("event", event)
            return {
              ...event,
              reviews:[...event.reviews, newReview],
            };
        } else {
            return event;
        }
      });
      setAllEvents(updatedEvents)

    }

    const addNewEvent = (newEvent) => {
      setAllEvents([...allEvents, newEvent])
    }

    const handleEditClick = (id, summary) => {
      console.log("i was clicked",id ,"summary", summary )
    }

    const handleUpdatedReview = (updatedReview) => {
      const selectEvent = allEvents.find((event) => event.id === updatedReview.event_id)
      const updatedEventReviews = selectEvent.reviews.map((review) =>{
        if(review.id === updatedReview.id){
          return updatedReview
        }
        else{
          return review
        }
      })
      const updatedEvent = allEvents.map((event) =>{
        if(selectEvent.id === event.id){
          return {...event, reviews:[...updatedEventReviews]}
        }
        else {
          return event
        }
      })
      setAllEvents(updatedEvent)
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
          <ReviewsDisplay allEvents={allEvents}  handleDeletedReview= {handleDeletedReview} handleEditClick={handleEditClick} handleUpdatedReview={handleUpdatedReview} />
          <NewReviewForm allEvents={allEvents} addNewReview={addNewReview}/>
        </Route>
      </Switch> 
      </UserProvider>
    </div>
  );
}

export default App;

