import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile"

function ReviewsDisplay({allEvents}){
    console.log("RDE", allEvents)
    const {user} = useContext(UserContext)
    // return(
    //      user.events && user.events.length > 0 ? user.events.map((review) => (
    //     <ReviewTile key={review.id} review={review} />
    // )) : <p>There are no events </p> 
    
    // )
    return(
        allEvents.length > 0 ? allEvents.map((event) => (
       <ReviewTile key={event.id} event={event} />
   )) : <p>There are no events </p> 
   
   )
}

export default ReviewsDisplay;