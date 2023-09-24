import React from "react";
import { Stack, Text,} from "@fluentui/react";

function EventTile({event}){
   const {title, event_description, price, organizer, date, location} = event
 
    return(
        <Stack
        className="EventTile"
        tokens={{ childrenGap: 8 }}
        styles={{
          root: {
            width: 350,
            padding: 16,
            border: "1px solid #ccc",
            borderRadius: 4,
            margin: 20,
          },
        }}
      >
        <Text variant="xxLarge">{title}</Text>
        <Text variant="mediumPlus">
        <strong>Description:</strong> {event_description}
      </Text>
      <Text variant="mediumPlus">
        <strong>Cost:</strong> ${price}
      </Text>
      <Text variant="mediumPlus">
        <strong>Organizer:</strong> {organizer}
      </Text>
      <Text variant="mediumPlus">
        <strong>Date:</strong> {date}
      </Text>
      <Text variant="mediumPlus">
        <strong>Location:</strong> {location}
      </Text>
    </Stack> 
    )
    
}

export default EventTile