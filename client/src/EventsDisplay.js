import React, {useContext} from "react";
import EventTile from "./EventTile";
import { UserContext } from "./context/user";

function EventsDisplay(){
    const {user} = useContext(UserContext)
    console.log("U", user)      
     
return(
    
    user.events && user.events.length > 0 ? user.events.map((event) => (
        <EventTile key={event.id} event={event} />
    )) : <p>There are no events </p> 
    
    
)
}

export default EventsDisplay;