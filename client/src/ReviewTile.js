import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";



function ReviewTile({review}){
   const {title, event_description} = review
   const {user} = useContext(UserContext)
   console.log("R", review)

   const allReviewsMap = user.reviews.map((review) =>{
    return(
        <li key={review.id}>{review.summary}</li>
    )
   })
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        {/* {user.reviews.length > 0 ? {allReviewsMap} : "No reviews yet" } */}
        <h5>Reviews</h5>
        {allReviewsMap}
        </>
    )
    
}

export default ReviewTile