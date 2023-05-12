import React from "react";

function EventTile({event}){
   const {title, event_description, price, reviews} = event
   console.log("eventreviews", reviews)
    
//    const allReviewsMap = reviews.map((review) =>{
//     return(
//         <li key={review.id}>{review.summary}</li>
//     )
//    })
const allReviewsMap = reviews && reviews.length > 0 ? reviews.map((review) =>{
    return(
        <li key={review.id}>{review.summary}</li>
    )
   }) : <li>No reviews yet</li>


    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        <p> Cost: ${price}</p>
        <h4>Reviews</h4>
        {allReviewsMap }
        <hr/>
       </> 
    )
    
}

export default EventTile