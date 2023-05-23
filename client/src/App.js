
import React, {useState, useEffect, useContext} from "react";
import './App.css';
import SignUpForm from "./SignUpForm";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Login from "./Login";
import { UserContext, UserProvider } from "./context/user";
import { Switch, Route } from "react-router-dom";
import NewEventForm from "./NewEventForm";
import NewReviewForm from "./NewReviewForm";
import EventsDisplay from "./EventsDisplay";
import ReviewsDisplay from "./ReviewsDisplay";


function App() {
  const [allEvents, setAllEvents] = useState([])
  // const { setUser } = useContext(UserContext);

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


    // const addNewReview = (newReview) => {
    //   //  console.log("NR", newReview)
    //   const findNewReview = user
    //   const updatedEvents = allEvents.map((event) =>{
    //     if(event.id === newReview.event_id){
    //       console.log("event", event)
    //         return {
    //           ...event,
    //           reviews:[...event.reviews, newReview],
    //         };
    //     } else {
    //         return event;
    //     }
    //   });
    //   setAllEvents(updatedEvents)

    // }

    const addNewEvent = (newEvent) => {
      setAllEvents([...allEvents, newEvent])
    }

    const handleEditClick = (id, summary) => {
      console.log("i was clicked",id ,"summary", summary )
    }

    // const handleUpdatedReview = (updatedReview) => {
    //   const selectEvent = allEvents.find((event) => event.id === updatedReview.event_id)
    //   const updatedEventReviews = selectEvent.reviews.map((review) =>{
    //     if(review.id === updatedReview.id){
    //       return updatedReview
    //     }
    //     else{
    //       return review
    //     }
    //   })
    //   const updatedEvent = allEvents.map((event) =>{
    //     if(selectEvent.id === event.id){
    //       return {...event, reviews:[...updatedEventReviews]}
    //     }
    //     else {
    //       return event
    //     }
    //   })
    //   setAllEvents(updatedEvent)
    //  }

    
    
    
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
        
          <ReviewsDisplay allEvents={allEvents}  handleEditClick={handleEditClick}  />
          <NewReviewForm allEvents={allEvents} />
        </Route>
      </Switch> 
      </UserProvider>
    </div>
  );
}

export default App;

