import React,{ useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile"

function ReviewsDisplay({allEvents, handleDeletedReview, handleEditClick}){
    // console.log("RDE", allEvents)
    
    const {user} = useContext(UserContext)
     console.log("RU", user)

    const filteredEvents = allEvents.filter((event) => {
        return event.users.some((eventuser) => eventuser.id === user.id);
      });
      
      
    
    return(
        allEvents.length > 0 ? filteredEvents.map((event) => (
       <ReviewTile key={event.id} event={event} handleDeletedReview={handleDeletedReview} handleEditClick={handleEditClick}/>
   )) : <p>There are no events </p> 
   
   )
}

export default ReviewsDisplay;