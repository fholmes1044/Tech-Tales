import React,{ useContext} from "react";
import { UserContext } from "./context/user";
import ReviewTile from "./ReviewTile";
import { Stack } from "@fluentui/react";

function ReviewsDisplay({ handleDeletedReview, handleEditClick}){
    const {user} = useContext(UserContext)
   
   
    return(
        <Stack horizontal horizontalAlign="center" wrap tokens={{ childrenGap: 20 }}>
       { user.events?
        user.events.length > 0 ? user.events.map((event) => (
       <ReviewTile key={event.id} event={event} handleDeletedReview={handleDeletedReview} handleEditClick={handleEditClick} />
   )) : <p>You have not created any event summaries yet. </p> 
   : <h1>loading</h1>}
   </Stack>
  )
}

export default ReviewsDisplay;

