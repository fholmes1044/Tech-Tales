import React, {useContext} from "react";
import EventTile from "./EventTile";
import { UserContext } from "./context/user";

function EventsDisplay({allEvents}){
    const {user} = useContext(UserContext)

    const allEventsMap = allEvents.map((event) =>(
        <EventTile key={event.id} event={event} />
    ))

return(
    <>
    {allEventsMap}
    </>
)
}

export default EventsDisplay;