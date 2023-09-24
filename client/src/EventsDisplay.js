import React from "react";
import { Stack } from "@fluentui/react";
import EventTile from "./EventTile";


function EventsDisplay({allEvents}){
    const allEventsMap = allEvents.map((event) =>(
        <EventTile key={event.id} event={event} allEvents={allEvents} />
    ))

return(  
    <Stack horizontal horizontalAlign="center" wrap tokens={{ childrenGap: 20 }}>
      {allEventsMap}
    </Stack>
)
}

export default EventsDisplay;