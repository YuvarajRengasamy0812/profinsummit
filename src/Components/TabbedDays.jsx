import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Clock, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TabbedDays = () => {
  const [activeTab, setActiveTab] = useState("day1");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const day1 = [
    {
      id: 1,
      time: "10:00 AM",
      title: "Doors Open • Welcome Mixer",
      badge: "All Tickets",
    },
    {
      id: 2,
      time: "10:30 AM",
      title: 'Keynote – "Legalizing the Future"',
      badge: "RBI Guest",
    },
    {
      id: 3,
      time: "1:00 PM",
      title: "Workshop – Smart Contract Coding",
      badge: "Elite+",
    },
    {
      id: 4,
      time: "3:30 PM",
      title: "Fireside Chat – NFTs: Art, Utility or Hype?",
      badge: "Visitor+",
    },
    {
      id: 5,
      time: "6:00 PM",
      title: "Networking Gala – Fusion with ProFin Expo",
      badge: "Business+",
    },
  ];

  const day2 = [
    {
      id: 1,
      time: "10:30 AM",
      title: "Panel – DeFi Compliance",
      badge: "All",
    },
    {
      id: 2,
      time: "1:00 PM",
      title: "Web3 Pitch Competition",
      badge: "Business+",
    },
    {
      id: 3,
      time: "3:30 PM",
      title: "Masterclass – ZK-Proofs",
      badge: "Elite+",
    },
  ];

  return (
    <section className="ag-day-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="ag-pink fw-semibold mb-1">Full Breakdown</p>
          <h2 className="ag-black fw-bold">
            48-Hour <span className="ag-pink">Web3 Agenda</span>
          </h2>
          <p className="ag-text-grey mt-2">
            Explore curated tracks designed for innovators, founders & developers.
          </p>
        </div>

        {/* Tabs */}
        <div className="ag-tabs d-flex justify-content-center gap-3 mb-4">
          <button
            onClick={() => setActiveTab("day1")}
            className={`ag-tab-btn ${activeTab === "day1" ? "active" : ""}`}
          >
            Day 1 – Launchpad (Mar 28)
          </button>

          <button
            onClick={() => setActiveTab("day2")}
            className={`ag-tab-btn ${activeTab === "day2" ? "active" : ""}`}
          >
            Day 2 – Scale-Up (Mar 29)
          </button>
        </div>

        {/* Content */}
        <div className="ag-accordion-wrapper">

          {(activeTab === "day1" ? day1 : day2).map((item) => (
            <div
              key={item.id}
              className={`ag-accordion-item ${openItem === item.id ? "open" : ""}`}
            >
              <div
                className="ag-accordion-header"
                onClick={() => toggleItem(item.id)}
              >
                <div className="d-flex align-items-center gap-3">
                  <Clock size={18} className="ag-pink" />
                  <span className="ag-time">{item.time}</span>
                  <span className="ag-title">{item.title}</span>
                  <span className="ag-badge">{item.badge}</span>
                </div>

                <ChevronDown
                  size={22}
                  className={`ag-chevron ${openItem === item.id ? "rotated" : ""}`}
                />
              </div>

              <div className="ag-accordion-body">
                <p className="ag-text-grey">
                  Detailed description for <strong>{item.title}</strong>
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TabbedDays;
