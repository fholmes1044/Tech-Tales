import React,{ useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile"

function ReviewsDisplay({allEvents, handleDeletedReview, handleEditClick, handleUpdatedReview }){
    // console.log("RDE", allEvents)
    
    const {user} = useContext(UserContext)
    //  console.log("RU", user)

    const filteredEvents = allEvents.filter((event) => {
        return event.reviews.some((eventreview) => eventreview.user_id === user.id);
      });
      
      
    
    return(
        allEvents.length > 0 ? filteredEvents.map((event) => (
       <ReviewTile key={event.id} event={event} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview} handleEditClick={handleEditClick} />
   )) : <p>There are no events </p> 
   
   )
}

export default ReviewsDisplay;