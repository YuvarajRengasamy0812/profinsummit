import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";

function Sponsers() {
  return (
    <div>
      <Pagehelmet pageTitle="Our Sponsers" />
      <Breadcrumb title="Our Sponsers" />

      {/* -- Sponsor Hero Section Start -- */}
      <section className="sponsor-hero py-10 py-md-14">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Content */}
            <div className="col-lg-7">
              <h2 className="sponsor-title mb-3">
                Sponsor:{" "}
                <span className="gradient-text">
                  Amplify Your Web3 Presence
                </span>
              </h2>

              <p className="text-grey fs-5 mb-4">
                Align with India's blockchain surge – from stage wraps to VIP
                dinners. Slots filling fast: <strong>70% Booked.</strong>
              </p>

              <a href="#" className="btn primary-btn px-4 py-3">
                Download Sponsor Kit – ROI Calculator Included
              </a>
            </div>

            {/* Image / placeholder */}
            <div className="col-lg-5">
              <img
                src="assets/images/resources/sponsor-hero.jpg"
                alt="Sponsor"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* -- Sponsor Hero Section End -- */}

      {/* -- Sponsor Tiers Section Start -- */}
      <section className="sponsor-tiers py-10 py-md-14 bg-lightgrey">
        <div className="container">
          <div className="col-lg-6 mx-auto">
            <div className="title-content text-lg-center mb-4">
              <p className="mb-1 pink">
                PROFIN BLOCKCHAIN SUMMIT 2026 SPEAKERS
              </p>
              <h2 className="mb-1">
                Tiered <span className="pink"> Impact</span>
              </h2>
              <p className="m-0">
                Choose your sponsorship level to maximize your brand's impact on
                the event.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Summit Partners */}
            <div className="col-md-6 col-lg-3">
              <div className="tier-card vip-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title vip mb-1">Summit Partner</h4>
                <p className="tier-price mb-3">₹20 Lakhs</p>

                <p className="text-grey mb-3">
                  Lead the Narrative: Name the flagship hall or stage
                  (e.g., "YourBrand Conference Hall 1") for ultimate
                  association with India’s Web3 future. Ideal for protocol
                  giants like layer-1/2 networks.
                </p>

                <ul className="tier-list mb-4">
                  <li>• Logo on all screens, app, badges (100K+ impressions)</li>
                  <li>• Opening keynote slot + 10-min dedicated talk</li>
                  <li>• 10 VIP tickets + exclusive hall access</li>
                  <li>• Custom activation in Activity Zone (e.g., AR demo booth)</li>
                </ul>

                <a
                  href="/Contact"
                  className="btn w-100 mt-auto"
                  style={{ background: "#d4af37" }}
                >
                  2 Slots Left
                </a>
              </div>
            </div>


            {/* Track Sponsor */}
            <div className="col-md-6 col-lg-3">
              <div className="tier-card elite-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title elite mb-1">Track Sponsor</h4>
                <p className="tier-price mb-3">₹12 Lakhs</p>

                <p className="text-grey mb-3">
                  Zone Mastery: Brand a full track or lounge
                  (e.g., "YourBrand Networking Lounge") with immersive
                  tie-ins like live polls during sessions. Suited for
                  DeFi/oracle innovators.
                </p>

                <ul className="tier-list mb-4">
                  <li>• Hosting rights for Networking Lounge + lead scans</li>
                  <li>• 5 tickets + app banner (50K views)</li>
                  <li>• 7-min demo on Speaker Stage</li>
                  <li>• Branded session recaps in post-event report</li>
                </ul>

                <a
                  href="/Contact"
                  className="btn w-100 mt-auto"
                  style={{ background: "#ae4b84" }}
                >
                  Inquire
                </a>
              </div>
            </div>


            {/* Session Ally */}
            <div className="col-md-6 col-lg-3">
              <div className="tier-card business-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title business mb-1">Session Ally</h4>
                <p className="tier-price mb-3">₹7 Lakhs</p>

                <p className="text-grey mb-3">
                  Content Catalyst: Sponsor 2–3 sessions
                  (e.g., "YourBrand zk-Proofs Panel" in Conference Hall 2)
                  to spotlight your expertise among devs and regulators.
                  Great for exchanges and VCs.
                </p>

                <ul className="tier-list mb-4">
                  <li>• Mentions in 3 sessions + moderator intros</li>
                  <li>• 3 tickets + investor lounge priority</li>
                  <li>• Branded coffee breaks in Cafe Lounge</li>
                  <li>• Feature in agenda app & email series (20K reach)</li>
                </ul>

                <a
                  href="/Contact"
                  className="btn w-100 mt-auto"
                  style={{ background: "#393182" }}
                >
                  Inquire
                </a>
              </div>
            </div>


            {/* Content Collaborator */}
            <div className="col-md-6 col-lg-3">
              <div className="tier-card pink-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title pink mb-1">Content Collaborator</h4>
                <p className="tier-price mb-3">₹5 Lakhs</p>

                <p className="text-grey mb-3">
                  Amplification Architect: Co-create media moments
                  (e.g., press panel in Registration Area) for viral Web3 coverage.
                  Perfect for outlets or influencers.
                </p>

                <ul className="tier-list mb-4">
                  <li>• Seat on press panel + exclusive briefings</li>
                  <li>• 2-min video reel on hall screens</li>
                  <li>• 2 tickets + content co-hosting (e.g., live X Spaces)</li>
                  <li>• Logo in virtual streams & press kits</li>
                </ul>

                <a
                  href="/Contact"
                  className="btn w-100 mt-auto"
                  style={{ background: "#e91e63" }}
                >
                  Inquire
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* -- Sponsor Tiers Section End -- */}

      {/* --Partner Perks Deep Dive (Premium Edition)-- */}
      <section
        className="partner-perks py-12"
        style={{
          background: "linear-gradient(135deg, #fdfdfd, #faf4ff)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft gradient glows */}
        <div className="glow-1"></div>
        <div className="glow-2"></div>

        <div className="container position-relative">
          {/* Title */}
          <div className="text-center mb-8">
            <p className="pink mb-1 fw-bold">ELEVATE YOUR BRAND</p>

            <h2 className="display-5 fw-bold mb-3">
              PARTNER PERKS
              <span className="pink"> — DEEP DIVE</span>
            </h2>

            <p className="text-grey w-lg-60 mx-auto fs-5">
              Premium visibility, precision engagement, and measurable ROI
              designed for high-growth Web3 brands aiming to dominate India’s
              blockchain landscape.
            </p>
          </div>

          {/* Premium Perks Cards */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img src="assets/images/resources/reach.png" className="img-fluid" alt="reach" />
                </div>

                <h4 className="black fw-bold mb-2">Reach</h4>
                <p className="text-grey fs-6 mb-3">
                  5,000 Attendees + 10,000 Cross-Promo Visibility.
                </p>
                <p className="m-0">
                  Tap into India’s fastest-expanding Web3 ecosystem with
                  full-spectrum amplification.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img src="assets/images/resources/engage.png" className="img-fluid" alt="engage" />
                </div>

                <h4 className="black fw-bold mb-2">Engage</h4>
                <p className="text-grey fs-6 mb-3">
                  Branded lounges, app banners, VIP zones & spotlight campaigns.
                </p>
                <p className="m-0">
                  Build unforgettable touchpoints with decision-makers &
                  industry leaders.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img src="assets/images/resources/measure.png" className="img-fluid" alt="measure" />
                </div>

                <h4 className="black fw-bold mb-2">Measure</h4>
                <p className="text-grey fs-6 mb-3">
                  Real-time dashboard tracking scans, meetings & conversions.
                </p>
                <p className="m-0">
                  Transparent metrics to validate ROI and optimize future
                  activations.
                </p>
              </div>
            </div>
          </div>

          {/* Story Block */}
          <div className="story-premium mt-10 p-5 rounded-4 text-center mx-auto">
            <p className="fw-bold black mb-2">Success Story</p>

            <h4 className="pink fw-bold mb-3 fs-3">
              “Polygon’s Title Sponsorship Last Year Generated 200+
              Partnerships.”
            </h4>

            <p className="text-grey fs-6 mb-0">
              Strategic positioning + high-intent audience = exponential network
              expansion.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <p className="fw-bold pink fs-5 mb-3">Ready to Partner?</p>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a
                href="/Contact"
                className="btn btn-primary px-5 py-3 rounded-pill fw-bold"
                style={{
                  background: "linear-gradient(90deg, #c40f4c, #8220e5)",
                  border: "none",
                  fontSize: "1.1rem",
                }}
              >
                Share Your Goals
              </a>

              <a
                href="tel:+919629896298"
                className="btn px-5 py-3  fw-bold"
                style={{ fontSize: "1.1rem" }}
              >
                Call +91 96298 96298
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* --Partner Perks Deep Dive (Premium Edition)-- */}

      {/*--Partners Section start--*/}
      {/* <section className="partners">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-6 w-lg-60 m-auto">
              <h2 className="mb-1">
                <span className="pink">Gold</span> Sponsers
              </h2>
              <p className="m-0">
                Align with India's PROFIN Blockchain Summit surge – from stage wraps to VIP
                sponsor. Slots filling fast: 70% Booked.
              </p>
            </div>
            <div className="partner-img pb-6">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4">
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/1.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src="assets/images/icon/2.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/3.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/4.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/5.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/3.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/4.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src="assets/images/icon/5.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Partners Section end--*/}

      {/*--Partners Section start--*/}
      {/* <section className="partners prenium-sponsers bg-lightgrey">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-6 w-lg-60 m-auto">
              <h2 className="mb-1">
                <span className="pink">Platinum</span> Sponsers
              </h2>
              <p className="m-0">
                Align with India's PROFIN Blockchain Summit surge – from stage wraps to Platium
                sponsors. Slots filling fast: 70% Booked.
              </p>
            </div>
            <div className="partner-img pb-6">
              <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5">
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/1.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src="assets/images/icon/2.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/3.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/4.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
                <div className="col p-0 border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src="assets/images/icon/5.png"
                      alt="partner-img"
                      className="opacity-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Partners Section end--*/}

      {/*--Next Sponser Section start--*/}
      <section className="next-sponser position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="next-sponser-inner w-lg-60 w-md-75 mx-auto text-center position-relative text-white">
            <div className="next-sponser-title">
              <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
              <h1 className="text-white mb-2">
                Intrested in becoming our
                <span className="pink">Next Sponsers</span>
              </h1>
            </div>
            <div className="next-sponser-info">
              <p>
                Join hands with ProFin Blockchain Summit 2026 to elevate your
                brand in the dynamic world of Web3. Explore tailored sponsorship
                packages designed to maximize your visibility and engagement at
                India's premier blockchain event.
              </p>
              <div className="next-sponser-button">
                <Link to="/Booknow" className="btn btn1">
                  Become a Sponser
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Next Sponser Section end--*/}
    </div>
  );
}

export default Sponsers;
