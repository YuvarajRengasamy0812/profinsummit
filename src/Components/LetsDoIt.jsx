import React from "react";
import { Link } from "react-router-dom";

const LetsDoIt = () => {
  return (
    <>
      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
              <h1 className="text-white mb-2">
                HAVEN'T BOOKED YOUR SEAT YET?{" "}
                <span className="pink">GET OUR EXPO TICKET NOW!</span>
              </h1>
            </div>
            <div className="ticket-info">
              <p>
                Purchase a suitable ticket to attend the ProFin Blockchain
                Summit 2026 and gain access to insightful sessions, networking
                opportunities, and hands-on workshops. Don't miss out on the
                chance to be part of India's premier Web3 event!
              </p>
              <div className="ticket-button">
                <Link to="/Booknow" className="btn">
                  OUR BLOCKCHAIN SUMMIT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsDoIt;
