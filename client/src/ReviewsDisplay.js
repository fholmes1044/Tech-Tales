import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile"

function ReviewsDisplay({allEvents, handleDeletedReview}){
    console.log("RDE", allEvents)
    
    const {user} = useContext(UserContext)
    console.log("RU", user)

    const filteredEvents = allEvents.filter((event) => {
        return event.users.some((eventuser) => eventuser.id === user.id);
      });
      
      console.log(filteredEvents);


    const findEvents = user.events
    const findReviews = user.reviews
 

    //map through all events 
    // return(
    //      user.events && user.events.length > 0 ? user.events.map((review) => (
    //     <ReviewTile key={review.id} review={review} />
    // )) : <p>There are no events </p> 
    
    // )

    return(
        allEvents.length > 0 ? filteredEvents.map((event) => (
       <ReviewTile key={event.id} event={event} handleDeletedReview={handleDeletedReview} />
   )) : <p>There are no events </p> 
   
   )
}

export default ReviewsDisplay;