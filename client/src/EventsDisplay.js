import React from "react";
import EventTile from "./EventTile";


function EventsDisplay({allEvents}){
    const allEventsMap = allEvents.map((event) =>(
        <EventTile key={event.id} event={event} allEvents={allEvents} />
    ))

return(
    <div className="EventsDisplay" >
    {allEventsMap}
    </div>
)
}

export default EventsDisplay;