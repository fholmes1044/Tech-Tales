import React,{ useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile"

function ReviewsDisplay({allEvents, handleDeletedReview, handleEditClick, handleUpdatedReview }){
    const {user} = useContext(UserContext)
    

    // const filteredEvents = allEvents.filter((event) => {
    //     return event.reviews.some((eventreview) => eventreview.user_id === user.id);
    //   });
      
      
    
  //   return(
  //       allEvents.length > 0 ? filteredEvents.map((event) => (
  //      <ReviewTile key={event.id} event={event} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview} handleEditClick={handleEditClick} />
  //  )) : <p>There are no events </p> 
   
  //  )
   
    return(
        allEvents.length > 0 ? user.events.map((event) => (
       <ReviewTile key={event.id} event={event} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview} handleEditClick={handleEditClick} />
   )) : <p>There are no events </p> 
   
  )
}

export default ReviewsDisplay;

//take reviews off of the reviewed events so that only events 
  //mapping user.events
//iif review is written by user add edit and delete button 