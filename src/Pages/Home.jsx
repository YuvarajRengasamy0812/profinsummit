import CountUpBox from "../Components/CountUpBox";
import TestimonialSlider from "../Components/TestimonialSlider ";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";
import Countdown from "../Components/Countdown";
import EventSwitcher from "../Components/EventSwitcher";
import EventFeatures from "../Components/EventFeatures";
import RoleTabs from "../Components/RoleTabs";
import LivePulse from "../Components/LivePulse";
import DirectionSection from "../Components/DirectionSection";
import FaqSection from "../Components/FaqSection";
import SchedulesSection from "../Components/SchedulesSection";
import TicketSection from "../Components/TicketSection";
import LetsDoIt from "../Components/LetsDoIt";
import BlogSection from "../Components/BlogSection";
function Home() {
  return (
    <div style={{overflowX:"hidden"}}>
      {/*!-- Bannner section starts --*/}
      <section className="banner position-relative pb-0">
        <div className="overlay"></div>
        <div className="container">
          <div className="inner-banner position-relative text-white ">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 z-1">
                <div className="banner-left text-center pb-lg-5 p-md-0">
                  <div className="banner-image"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    <img
                      src="assets/images/team/4.png"
                      alt="banner-image"
                      className="w-50 shake"
                    />
                    <br />
                  </div>
                  <div className="countdown"
                    data-aos="fade-up"
                    data-aos-delay="400">
                    <div
                      id="countdown"
                      className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2"
                    >
                      <div className="d-flex flex-column">
                        <Countdown />
                        <EventSwitcher />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div className="banner-right ms-2 text-center text-lg-start pb-8">
                  {/* Updated Title */}
                  <div className="banner-title pb-3"
                    data-aos="fade-left"
                    data-aos-delay="300">
                    <a href="https://www.guinnessworldrecords.com/world-records/774828-most-participants-in-a-trading-competition"><img className="w-50 img-fluid mb-3" src="assets/images//resources/guiness.png" alt="guiness" /></a>
                    <h4 className="text-white pb-3">
                      PROFIN <span className="pink">BLOCKCHAIN SUMMIT</span>{" "}
                      2026 – INDIA
                    </h4>
                    <h1 className="text-white">
                      UNLOCK INDIA’S{" "}
                      <span className="pink">WEB3 REVOLUTION</span>
                    </h1>
                  </div>

                  {/* Updated Date & Venue */}
                  <div className="banner-event-info pb-3"
                    data-aos="fade-left"
                    data-aos-delay="450">
                    <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled">
                      <li className="pe-2 border-end border-1 border-lightgrey">
                        <i className="fa fa-calendar-o pe-1"></i> MARCH 28–29,
                        2026
                      </li>
                      <li className="ps-2">
                        <i className="fa fa-map-marker pe-1"></i> YASHOBHOOMI,
                        NEW DELHI, INDIA
                      </li>
                    </ul>
                  </div>

                  {/* Updated Description */}
                  <div className="event-discription"
                    data-aos="fade-left"
                    data-aos-delay="600">
                    <p className="pb-4 m-0">
                      The PROFIN Blockchain Summit 2026 is India’s premier Web3,
                      DeFi, NFTs & Digital Assets conference — co-located with
                      PROFIN Expo. Be part of India’s decentralized future.
                    </p>

                    <div className="banner-button">
                      <div className="row">
                        {/* CTA Buttons Updated */}
                        <div className="col-lg-6 col-md-6"
                          data-aos="fade-up">
                          <Link to="/Booknow" className="btn me-3 my-1 w-100">
                            SECURE EARLY BIRD TICKETS
                          </Link>
                        </div>
                        {/* <div className="col-lg-6 col-md-6"
                          data-aos="fade-up"
                          data-aos-delay="850">
                          <Link
                            to="/Eventlists"
                            className="btn btn2 my-1 w-100"
                          >
                            WATCH THE THEME VIDEO
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wave overflow-hidden position-absolute w-100 z-0"
          data-aos="fade-up"
          data-aos-delay="1000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="d-block position-relative"
          >
            <path
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
      </section>
      {/*--Banner Section end--*/}

      {/*--Overview Section start--*/}
      <section className="overview pb-0">
        <div className="container">
          <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
            <div className="row">
              {/* Left Text Content */}
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink" data-aos="fade-up" data-aos-delay="800">OVERVIEW</p>
                    <h2 className="mb-2" data-aos="fade-right" data-aos-delay="900">
                      GET THE LATEST INFO ABOUT{" "}
                      <span className="pink" data-aos="fade-right" data-aos-delay="1000">
                        PROFIN BLOCKCHAIN SUMMIT 2026
                      </span>
                    </h2>
                    <p data-aos="fade-right" data-aos-delay="1100">
                      Join India's premier Web3 & blockchain event, bringing
                      together 100+ speakers and 5,000+ innovators. Explore
                      DeFi, NFTs, tokenization, and cutting-edge digital asset
                      strategies.
                    </p>
                    <p className="mb-2" data-aos="fade-right" data-aos-delay="1200">
                      Experience live demos, hands-on labs, and decode RBI/SEBI
                      rules with real pilots. Discover the future of
                      decentralized finance and enterprise blockchain solutions.
                    </p>
                  </div>

                  {/* Event Info Boxes */}
                  <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                    <div className="row justify-content-around">
                      {/* Where */}
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2" data-aos="fade-right" data-aos-delay="1300">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-map-marker text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="location-info">
                              <Link to="/Contact">
                                <h5 className="mb-1">WHERE</h5>
                                <small className="pink">
                                  Yashobhoomi, New Delhi, India
                                </small>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* When */}
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2" data-aos="fade-left" data-aos-delay="1400">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-calendar-o text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="time-info">
                              <Link to="/Contact">
                                <h5 className="mb-1">WHEN</h5>
                                <small className="pink">
                                  Saturday & Sunday <br /> March 28-29, 2026
                                </small>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Images */}
              <div className="col-lg-6">
                <div className="overview-img">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="container-img-left mb-2">
                        <div className="img-left-1 float-end w-lg-80" data-aos="zoom-in" data-aos-delay="1000">
                          <img
                            className="mb-2 w-100 rounded"
                            src="assets/images/group/1.jpg"
                            alt="blockchain-session"
                          />
                        </div>
                        <div className="img-left-2" data-aos="zoom-in" data-aos-delay="1200">
                          <img
                            src="assets/images/group/2.jpg"
                            alt="networking"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-delay="1400">
                      <div className="container-img-right w-lg-75">
                        <img
                          src="assets/images/group/3.jpg"
                          alt="expo-floor"
                          className="w-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Overview Section end--*/}

      <EventFeatures />

      <LivePulse />

      <RoleTabs />


      {/*--Partners Section start--*/}
      {/* <section className="partners">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-6 w-lg-60 m-auto">
              <p className="mb-1 pink">OUR PARTNERS</p>
              <h2 className="mb-1">
                RECENT SPONSERS AND <span className="pink">PARTNERS</span>
              </h2>
              <p className="m-0">
                We are grateful for the support of our sponsors and partners.
              </p>
            </div>
            <div className="partner-img pb-6">
              <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5 ">
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/1.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src="assets/images/icon/2.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/3.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/4.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/5.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/3.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/4.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src="assets/images/icon/5.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src="assets/images/icon/1.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
                <div className="col p-0 border-top border-0 border-sm-0">
                  <div className="p-2 partner-img-box text-center border-sm-0">
                    <img
                      src="assets/images/icon/2.png"
                      alt="partner-img"
                      className="opacity-75 w-lg-75 w-md-100 w-40"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="partner-button text-center">
              <Link to="/Sponsers" className="btn">
                VIEW MORE SPONSERS
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Partners Section end--*/}

      {/*--Features Section start--*/}
      <section className="feature text-white position-relative z-0 start-0">
        <div className="overlay z-n1"></div>
        <div className="container">
          <div className="feature-inner">
            <div className="counter text-center border-bottom border-white border-opacity-25">
              <div className="inner-counter mb-7">
                <div className="row">
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={100} label="Speakers" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={5000} label="Innovators" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={150} label="Awards" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-opacity-25">
                      <CountUpBox end={10000} label="Visitors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-lists pt-8">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded text bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-address-book-o text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info ">
                        <h5 className="text-white mb-2">LIVE STREAMING</h5>
                        <small>
                          Access real-time sessions on DeFi trends and NFT
                          innovations from anywhere. Stream keynotes with
                          Polygon experts and RBI insights, ensuring you never
                          miss a breakthrough.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded  bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-comments text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">FIRESIDE CHATS</h5>
                        <small>
                          Intimate discussions with Web3 pioneers like WazirX
                          CEOs on crypto regulations. Gain unfiltered advice on
                          tokenization and DAOs in relaxed, interactive formats.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-desktop text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">NETWORKING</h5>
                        <small>
                          Connect with 5,000+ blockchain pros, VCs, and devs in
                          dedicated lounges. Forge partnerships via app-matched
                          meetups, blending ProFin Expo's fintech crowd for
                          hybrid opportunities.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-cogs text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">HIGH VALUE LEARNING</h5>
                        <small>
                          Deep-dive workshops on smart contracts and zk-proofs
                          with certifications. Unlock actionable strategies for
                          India's $10B digital assets market from 100+ global
                          speakers.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-gift text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">EXICITING GIVEAWAYS</h5>
                        <small>
                          Win NFTs, hardware wallets, and crypto vouchers in
                          live draws. Participate in competitions for exclusive
                          Web3 swag, boosting your summit experience with
                          tangible rewards.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-graduation-cap text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">1-ON-1 SESSIONS</h5>
                        <small>
                          Personalized meetings with investors and regulators
                          for tailored advice. Pitch your blockchain startup or
                          discuss compliance in private slots, accelerating
                          your Web3 journey
                        </small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Features Section end--*/}

      {/*--Speakers Section Start--*/}
      {/* <section className="speakers">
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-title text-center p-2">
              <div className="row align-items-center ">
                <div className="col-lg-6">
                  <div className="title-content  text-lg-start mb-2">
                    <p className="mb-1 pink">
                      PROFIN BLOCKCHAIN SUMMIT 2026 SPEAKERS
                    </p>
                    <h2 className="mb-1">
                      MEET OUR{" "}
                      <span className="pink">
                        {" "}
                        Speakers: 100+ Trailblazers Redefining Web3
                      </span>
                    </h2>
                    <p className="m-0">
                      Curated from India's startups to global labs – devs, VCs,
                      regulators. Filter, connect, collaborate.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Speakerlist" className="btn my-2">
                      VIEW MORE SPEAKERS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="sepaker-list text-center text-white">
              <div className="row">
                <div className=" col-lg-3 col-md-6 p-2">
                  <div className="speaker-box  position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/1.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/2.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/3.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/4.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <LetsDoIt />
      {/*--Ticketbook Section end--*/}

      {/*--Schedules Section start--*/}
      <SchedulesSection />
      {/*--Schedules Section end--*/}

      {/*--Pricing Section start--*/}
      <TicketSection />
      {/*--Pricing Section end--*/}

      {/*--Gallery Section end--*/}
      <section className="gallery">
        <div className="container">
          <div className="galler-inner">
            <div className="section-title text-center mb-5">
              <div className="row align-items-center ">
                <div className="col-lg-6 pb-2">
                  <div className="title-content  text-lg-start">
                    <p className="mb-1 pink">OUR RECENT EVENT GALLERY</p>
                    <h2 className="mb-1">
                      WAS AN AMAGING <span className="pink">GALLERY</span>
                    </h2>
                    <p className="m-0">
                      Our expo in dubai named: ProFX Expo Dubai 2025, where we had an official Guinness World Record!
                      Top traders battled it out for a share of the $25,000 prize pool. A truly unforgettable milestone!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Ourgallery" className="btn">
                      VIEW MORE SHOTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Gallery limit={6} />
          </div>
        </div>
      </section>
      {/*--Gallery Section end--*/}

      {/*--Testimonials Section start--*/}
      <section className="testimonial bg-lightgrey">
        <div className="container">
          <div className="section-title w-lg-60 m-auto text-center pb-5">
            <p className="mb-1  pink">OUR TESTIMONIALS</p>
            <h2 className="mb-1">
              WHAT PEOPLES'S SAYS ABOUT{" "}
              <span className="pink">PROFIN BLOCKCHAIN SUMMIT</span>
            </h2>
            <p className="m-0">
              Powerful Testimonials From Our Delegates And Speakers
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*--Testimonials Section end--*/}

      {/*--FAQ Section start--*/}
      <FaqSection />
      {/*--FAQ Section end--*/}

      {/*--Direction Section start--*/}
      <DirectionSection />
      {/*--Direction Section end--*/}

      {/*--Blog Section start--*/}
      <BlogSection />
      {/*--Blog Section end--*/}
    </div>
  );
}

export default Home;
