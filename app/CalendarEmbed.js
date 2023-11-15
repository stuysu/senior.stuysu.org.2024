'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "@/data/events.json";

export default function CalendarEmbed() {
  return (
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev', 
          center: 'title',
          end: 'next' 
        }}
        weekends={true}
        events={events}
        eventColor="#e5d6ff"
        eventTextColor="black"
        //eventClick={handleEventClick}
      />
  );
}
