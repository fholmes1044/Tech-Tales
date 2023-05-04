import React, {useContext, useEffect, useState} from "react";
import EventTile from "./EventTile";
import { UserContext } from "./context/user";

function EventsDisplay(){
    const {user} = useContext(UserContext)
    // console.log("U", user)      
     const [allEvents, setAllEvents] = useState([])
    useEffect(() =>{
        fetch("/events")
        .then((r) => r.json())
        .then((event) =>{
            setAllEvents(event)
        })
    }, []
    )
    console.log("All", allEvents)
    // const displayEvents = allevents.map((event) =>(
    //     <EventTile key={event.id} event={event}/>
    // ))
return(
    // {displayEvents}
    user.events && user.events.length > 0 ? allEvents.map((event) => (
        <EventTile key={event.id} event={event} />
    )) : <p>There are no events </p> 
    
    
)
}

export default EventsDisplay;