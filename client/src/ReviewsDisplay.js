import React,{useState, useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile"

function ReviewsDisplay(){
    const {user} = useContext(UserContext)
    return(
         user.events && user.events.length > 0 ? user.events.map((review) => (
        <ReviewTile key={review.id} review={review} />
    )) : <p>There are no events </p> 
    
        // <div>
        //     <form>

        //     </form>
        // </div>
    )
}

export default ReviewsDisplay;