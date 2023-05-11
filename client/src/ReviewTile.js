import React, { useContext, useState} from "react";
import { UserContext } from "./context/user";
import UpdateReviewForm from "./UpdateReviewForm";



function ReviewTile({event, handleDeletedReview, handleEditClick}){

   const {title, event_description} = event
   const {user} = useContext(UserContext)
   const [showEditForm, setShowEditForm] = useState(false)

 

   
   const allReviewsMap = event.reviews.map((review) =>{
    if(review.user_id === user.id)
    return(
        <>
        <li key={review.id}>
            {review.summary} 
         </li>   
            <br/>
            {showEditForm ? <UpdateReviewForm/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>} 
            {/* <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button> */}
            <button onClick= {() => handleDeletedReview(review.id)}>Delete me</button>
        </>
    )
   })

   
  
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        
        <h5>Reviews</h5>
        {allReviewsMap}
        {/* {showEditForm ? <UpdateReviewForm/> : <button onClick = {() => handleEditClick(review.id, review.summary)}> Edit me</button>}  */}
        <hr/>
        </>
    )
    
}

export default ReviewTile