import React, {useContext} from "react";
import { UserContext } from "./context/user";


function EventTile({event, allEvents}){
    
   const {title, event_description, price, reviews} = event
   const {user} = useContext(UserContext)
//    console.log("e",event)
//    console.log("eventreviews", reviews)

const allReviewsMap = () => {
    // if (reviews && reviews.length > 0) {
    //   return reviews.map((review) => {
    //     const findUserReviews = user.reviews.find(
    //       (currentUserReview) => currentUserReview.id === review.id
    //     );
    //     return (
    //       <li key={review.id}>
    //         {review.summary}
    //         {findUserReviews && (
    //           <>
    //             <button>Edit</button>
    //             <button>Delete</button>
    //           </>
    //         )}
    //       </li>
    //     );
    //     });
    // } else {
    // return <li>No reviews yet</li>;
    // }
     };
  

    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        <p> Cost: ${price}</p>
        {/* <h4>Reviews</h4> */}
        {/* {allReviewsMap } */}
        {/* <ul>{allReviewsMap()}</ul> */}
        <hr/>
       </> 
    )
    
}

export default EventTile