import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";



function ReviewTile({event}){
   const {title, event_description} = event
   const {user} = useContext(UserContext)
//    console.log("R", review)

   const allReviewsMap = event.reviews.map((review) =>{
    if(review.user_id === user.id)
    return(
        <li key={review.id}>{review.summary}</li>
    )
   })

   const handleEditClick = () => {
    console.log("edit me")
   }

   const handleDeleteClick = () => {
    console.log("delete me")
   }
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        {/* {user.reviews.length > 0 ? {allReviewsMap} : "No reviews yet" } */}
        <h5>Reviews</h5>
        {allReviewsMap}
        <button onClick = {handleEditClick}>Edit Review</button>
        <br/>
        <button onClick = {handleDeleteClick}>Remove Review</button>
        </>
    )
    
}

export default ReviewTile