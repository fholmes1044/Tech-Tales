import React from "react";
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
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`/events).then((r) => {
  //     if (r.ok) {
  //       r.json().then((event) =>
  //         setEvents(event)
  //       );
  //     } else {
  //       r.json().then((err) =>
  //         setEvents(...events)
  //       );
  //     }
  //   });
  // }, [id]);



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
          <NewEventForm />
          <EventsDisplay/>
        </Route>
        <Route exact path ="/reviews">
          <ReviewsDisplay/>
          <NewReviewForm/>
        </Route>
      </Switch> 
      </UserProvider>
    </div>
  );
}

export default App;
