import React from "react";



function EventTile({event}){
   const {title, event_description, price, organizer, date, location} = event
 
    return(
        <div className="EventTile">
        <h3>{title}</h3>
        <p><strong>Description:</strong> {event_description}</p>
        <p><strong>Cost:</strong> ${price}</p>
        <p><strong>Organizer:</strong> {organizer}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Location:</strong> {location}</p>
        <hr/>
       </div> 
    )
    
}

export default EventTile