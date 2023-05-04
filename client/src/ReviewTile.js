import React, {useState} from "react";

function ReviewTile({review}){
   const {title, event_description} = review
    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        </>
    )
    
}

export default ReviewTile