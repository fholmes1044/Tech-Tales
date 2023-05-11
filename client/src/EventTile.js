import React from "react";

function EventTile({event}){
   const {title, event_description, price, reviews} = event
   

   const allReviewsMap = reviews.map((review) =>{
    return(
        <li key={review.id}>{review.summary}</li>
    )
   })


    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        <p> Cost: ${price}</p>
        <h4>Reviews</h4>
        {reviews.length > 0 ? allReviewsMap : "No reviews yet" }
        <hr/>
       </> 
    )
    
}

export default EventTile