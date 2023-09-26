import React, { useState, useEffect } from "react";
import { Stack } from "@fluentui/react";
import EventTile from "./EventTile";
import EventsSearch from "./EventsSearch";

function EventsDisplay({ allEvents }) {
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      const filtered = allEvents.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(allEvents);
    }
  };

  const allEventsMap = filteredEvents.map((event) => (
    <EventTile key={event.id} event={event} allEvents={allEvents} />
  ));

  useEffect(() => {
    setFilteredEvents(allEvents);
  }, [allEvents]);

  return (
    <>
      <EventsSearch allEvents={allEvents} onSearch={handleSearch} />
      <Stack
        horizontal
        horizontalAlign="center"
        wrap
        tokens={{ childrenGap: 20 }}
      >
        {allEventsMap.length > 0 ? allEventsMap : <p>No events found</p>}
      </Stack>
    </>
  );
}

export default EventsDisplay;
