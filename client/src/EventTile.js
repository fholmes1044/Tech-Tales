import React from "react";



function EventTile({event}){
    
   const {title, event_description, price} = event
 


    return(
        <>
        <h3>{title}</h3>
        <p>Description: {event_description}</p>
        <p> Cost: ${price}</p>
        <hr/>
       </> 
    )
    
}

export default EventTile