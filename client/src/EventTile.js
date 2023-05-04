import React, {useState} from "react";

function EventTile({event}){
   const {title, event_description, price, reviews} = event
   const [allReviews, setAllReviews] = useState([])

   const allReviewsMap = reviews.map((review) =>{
    return(
        <li key={review.id}>{review.summary}</li>
    )
   })
//     const allReviewsMap = () => {
//         setAllReviews(reviews.map((review) => review));
//   }

console.log("R",reviews)

   console.log("ALL", allReviews)
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        <p> Cost: ${price}</p>
        <h4>Reviews</h4>
        {allReviewsMap}
        <hr/>
       </> 
    )
    
}

export default EventTile