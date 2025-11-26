import { Podcast } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SchedulesSection = () => {
  return (
    <>
      <section className="schedules">
        <div className="container">
          <div className="schedule-inner">
            <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
              <p className="mb-1 pink">OUR AGENDA</p>
              <h2 className="mb-1">
                FOLLOW <span className="pink">EVENT</span> SCHEDULES
              </h2>
              <p className="m-0">
                Join us at the ProFin Exhibition Summit 2025 to explore
                cutting-edge innovations in blockchain, Web3, NFTs, and DeFi.
                Each day is packed with keynotes, panels, workshops, and
                networking opportunities designed for all attendees—from
                enthusiasts to elite professionals.
              </p>
            </div>
            <div className="schedule-list-outer">
              <div className="schedule-list-top mb-7">
                <div className="row align-items-center align-items-lg-start align-items-md-start">
                  <div className="col-lg-3 col-md-4 mt-lg-5 mt-md-5 pt-lg-3 pt-md-3">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">1ST DAY</h4>
                      <h6 className="mb-2">MARCH 28, 2026</h6>
                      <p>
                        ProFin Exhibition Summit
                        <br />
                        YASHOBHOOMI, NEW DELHI, INDIA
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              DOORS OPEN | WELCOME MIXER
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Coffee • Demos • Icebreakers (All Tickets)
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>10:00 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Main Expo Arena</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>EVENT HOST TEAM</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image ">
                            <img
                              src="assets/images/team/1.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                JESUS HOLLAND
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className=" schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              KEYNOTE – "LEGALIZING THE FUTURE: INDIA'S
                              BLOCKCHAIN BLUEPRINT"
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Featuring RBI Guest Speaker – Open to All
                              Attendees
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>10:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Innovation Stage</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>RBI GUEST SPEAKER</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                NELSON KETY
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className=" schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              WORKSHOP: SMART CONTRACT CODING (ELITE+)
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Hands-On Solidity Session on Polygon (Elite+ Pass
                              Holders Only)
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>1:00 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Developer Lab</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>TECH INSTRUCTOR PANEL</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                NELSON KETY
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className=" schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              FIRESIDE CHAT – "NFTs: ART, UTILITY, OR HYPE?"
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Visitor+ Access • Live Minting Demo Included
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>3:30 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Creative Lounge</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>INDUSTRY EXPERTS</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                NELSON KETY
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className=" schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              NETWORKING GALA – PROFIN EXPO FUSION
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Business+ Access • Cocktails & Deal-Making
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>6:00 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>VIP Networking Hall</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>PROFIN SUMMIT TEAM</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                NELSON KETY
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className=" schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              CLOSE | EVENING WIND-DOWN
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>Relaxing End-of-Day Lounge Session</small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>9:00 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Summit Lounge</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>PROFIN SUMMIT TEAM</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                NELSON KETY
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-title-bottom">
                <div className="row align-items-center align-items-lg-start align-items-md-start">
                  <div className="col-lg-3 col-md-4 mt-lg-5 mt-md-5 pt-lg-3 pt-md-3">
                    <div className="schedule-day text-center position-relative text-sm-start py-6 ps-2 z-1">
                      <h4 className=" pink mb-2">2ND DAY</h4>
                      <h6 className="mb-2">MARCH 29, 2026</h6>
                      <p>
                        ProFin Exhibition Summit
                        <br />
                        YASHOBHOOMI, NEW DELHI, INDIA
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list text-center text-sm-start">
                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              DOORS OPEN | MORNING HUDDLE
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>Quick Wins Recap + Warm-Up Session</small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>10:00 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Main Expo Arena</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>EVENT HOST TEAM</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              PANEL – "DeFi COMPLIANCE: NAVIGATING SEBI WATERS"
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>Live Q&A With Lawyers (Open to All)</small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>10:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Regulation Pavilion</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>LEGAL PANEL</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              PITCH COMPETITION – WEB3 STARTUP BATTLE
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              15 Startups Compete for ₹5L Prizes • Audience
                              Voting (Business+)
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>1:00 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Startup Arena</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>JUDGING PANEL</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              MASTERCLASS – "ZK-PROOFS FOR PRIVACY-FIRST APPS"
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>Elite+ Access • Certificate Included</small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>3:30 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Tech Mastery Room</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>ZK SPECIALIST</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              AWARDS NIGHT – INNOVATOR CELEBRATION
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>VIP Priority Access + Closing Toast</small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>5:30 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Grand Stage</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>PROFIN SUMMIT BOARD</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Booknow" className="black">
                              GRAND CLOSE | AFTERPARTY
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>Post-Event Networking Afterparty</small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>9:00 PM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Sky Lounge</small>
                            </li>
                            <li className="d-inline">
                              <Podcast
                                className="pink mx-2"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <small>EVENT HOST TEAM</small>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Booknow" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div> */}
                      </div>
                      <div className="partner-button mt-6">
                        <Link to="/Eventlists" className="btn">
                          VIEW MORE DETAILS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchedulesSection;
