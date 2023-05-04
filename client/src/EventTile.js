import React, {useState} from "react";

function EventTile({event}){
   const {title, event_description, price, reviews} = event
   const [allReviews, setAllReviews] = useState([])

//    const allReviewsMap = reviews.map((review) =>{
//     setAllReviews(review)
//    })
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        <p> Cost: ${price}</p>
        {/* {allReviewsMap} */}
       </> 
    )
    
}

export default EventTile