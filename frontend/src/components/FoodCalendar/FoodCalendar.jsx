import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const FoodCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Enter your meal name");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleEventDrop = ({ event, start, end }) => {
    const updated = events.map((existingEvent) =>
      existingEvent.title === event.title
        ? { ...event, start, end }
        : existingEvent
    );
    setEvents(updated);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        📅 Weekly Meal Planner
      </h2>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week", "day"]}
        selectable
        resizable
        style={{ height: 500, marginTop: "2rem" }}
        step={30}
        onSelectSlot={handleSelectSlot}
        onEventDrop={handleEventDrop}
        draggableAccessor={() => true}
      />
    </div>
  );
};

export default FoodCalendar;
