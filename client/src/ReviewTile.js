import React, { useContext} from "react";
import { UserContext } from "./context/user";



function ReviewTile({event, handleDeletedReview}){

   const {title, event_description} = event
   const {user} = useContext(UserContext)

 const handleEditClick = (key) => {
    // fetch("/reviews")
    console.log("edit me")
   }

   
   const allReviewsMap = event.reviews.map((review) =>{
    if(review.user_id === user.id)
    return(
        <>
        <li key={review.id}>
            {review.summary} 
         </li>   
            <br/>
            <button onClick = {() => handleEditClick(review.id)}> Edit me</button>
            <button onClick= {() => handleDeletedReview(review.id)}>Delete me</button>
        </>
    )
   })

   
  
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        {/* {user.reviews.length > 0 ? {allReviewsMap} : "No reviews yet" } */}
        <h5>Reviews</h5>
        {allReviewsMap}
        
        <hr/>
        </>
    )
    
}

export default ReviewTile