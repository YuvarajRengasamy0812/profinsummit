import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import { gsap } from "gsap";
import { Tooltip } from "bootstrap";

const CalendarSection = () => {

  // Sample event mapping based on your DOCS
  const events = [
    { title: "Welcome Mixer", date: "2026-03-28T10:00:00" },
    { title: "Keynote: Blockchain Blueprint", date: "2026-03-28T10:30:00" },
    { title: "Workshop: Smart Contract Coding", date: "2026-03-28T13:00:00" },
    { title: "NFT Fireside Chat", date: "2026-03-28T15:30:00" },
    { title: "Networking Gala", date: "2026-03-28T18:00:00" },
    { title: "Morning Huddle", date: "2026-03-29T10:00:00" },
    { title: "Panel: DeFi Compliance", date: "2026-03-29T10:30:00" },
    { title: "Pitch Competition", date: "2026-03-29T13:00:00" },
    { title: "Masterclass: ZK-Proofs", date: "2026-03-29T15:30:00" },
    { title: "Awards Night", date: "2026-03-29T17:30:00" },
  ];

  return (
    <section
      className="py-5 calendar-section"
      style={{
        background: "linear-gradient(180deg, #fff, #f7f7f7)",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-2 agenda-title">
          Agenda: <span className="gradient-text">48 Hours of Web3 Acceleration</span>
        </h2>
        <p className="text-muted mb-4">
          Curated tracks for every level – filter by interest and build your path.  
          <strong> Pro Tip:</strong> Sync to app for reminders and live updates.
        </p>

        <button className="btn btn-gradient px-4 py-2 mb-4">
          Launch Agenda Builder Tool
        </button>

        <div className="calendar-wrapper shadow-sm p-3 rounded">
          <FullCalendar
            plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate="2026-03-01"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,listWeek",
            }}
            height="auto"
            events={events}
            eventDisplay="block"
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
