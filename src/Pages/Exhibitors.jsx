import React, { useState } from "react";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { ArrowRight, Briefcase, Mail, Phone, User, X } from "lucide-react";
import BoothSpectrum from "../Components/BoothSpectrum";
import TicketSection from "../Components/TicketSection";
import FloorPlan from "../Components/FloorPlan";

const Exhibitors = () => {
  const [showBoothModal, setShowBoothModal] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const closeBoothModal = () => {
    setShowBoothModal(false);
    setStep(1);
  };
  return (
    <>
      <div>
        <PageHelmet pageTitle="Exhibitors" />
        <Breadcrumb title="Exhibitors" />
        {/* -- Floor Plan Section Start -- */}
        <section className="exhibitors-floorplan py-10 py-md-14">
          <div className="container">
            <div className="row align-items-center g-4">
              {/* Text Block */}
              <div className="col-lg-6">
                <h2 className="section-title mb-3">
                  Exhibit:{" "}
                  <span className="highlight">Turn Footfall into Funding</span>
                </h2>

                <p className="section-desc mb-4">
                  Claim your spot in the <strong>25–30% Blockchain Zone</strong>{" "}
                  — get access to <strong>3,000+ targeted leads</strong> from
                  developers, founders, and investors. Easy setup, massive ROI.
                </p>

                <div className="btn-group d-flex flex-wrap gap-3">
                  <a href="#" className="btn primary-btn">
                    View Interactive Floor Plan
                  </a>
                  <a href="/Booknow" className="btn outline-btn">
                    Click to Book
                  </a>
                </div>
              </div>

              {/* Floor Plan Visual */}
              <div className="col-lg-6">
                <div className="floorplan-box">
                  {/* Replace with iframe or image later */}
                  <img
                    src="assets/images/resources/floorplan.jpg"
                    alt="3D Floor Plan"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* -- Floor Plan Section End -- */}

        {/* <FloorPlan /> */}

        {/* <BoothSpectrum /> */}
        <TicketSection />
        
        {/* -- Exhibitor Success Path Section Start -- */}
        <section className="exhibitor-success py-10 py-md-14">
          <div className="container">
            <div className="col-lg-6 mx-auto">
              <div className="title-content text-lg-center mb-4">
                <p className="mb-1 pink">
                  PROFIN BLOCKCHAIN SUMMIT 2026 SPEAKERS
                </p>
                <h2 className="mb-1">
                  Exhibitor <span className="pink"> Success Path</span>
                </h2>
                <p className="m-0">
                  Your roadmap to maximizing ROI at ProFin Summit. From booth
                  selection to successful networking, we've got you covered
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Step 1 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step p-4 rounded shadow-sm">
                  <div className="step-icon mb-3 bg-pink text-white rounded-circle d-flex align-items-center justify-content-center">
                    1
                  </div>
                  <h5 className="mb-2">Choose & Book</h5>
                  <p className="text-grey">
                    Match booth to theme (e.g., DeFi Demo Wall). Online –
                    Instant Confirmation.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step p-4 rounded shadow-sm">
                  <div className="step-icon mb-3 bg-blue text-white rounded-circle d-flex align-items-center justify-content-center">
                    2
                  </div>
                  <h5 className="mb-2">Prep Perks</h5>
                  <p className="text-grey">
                    Free design consult, lead gen tools, pre-event promo in
                    newsletter (Reach 20K).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step p-4 rounded shadow-sm">
                  <div className="step-icon mb-3 bg-elite text-white rounded-circle d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <h5 className="mb-2">On-Site Magic</h5>
                  <p className="text-grey">
                    Traffic routing to your spot; post-event reports with 500+
                    contacts.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step p-4 rounded shadow-sm">
                  <div className="step-icon mb-3 bg-vip text-white rounded-circle d-flex align-items-center justify-content-center">
                    4
                  </div>
                  <h5 className="mb-2">ROI Boost</h5>
                  <p className="text-grey">
                    70% exhibitors report deals closed – from last ProFin, avg
                    $50K per booth.
                  </p>
                </div>
              </div>
            </div>

            {/* Tailored CTA */}
            <div className="text-center mt-6">
              <p className="mb-3 text-grey">
                Tailored for You: Startups? Low-entry pods. Enterprises? Island
                with lounge.
              </p>
              <a
                href="#"
                className="btn primary-btn me-3"
                onClick={() => setShowBoothModal(true)}
              >
                Inquiry Form
              </a>
              <a href="/Sponsers" className="btn outline-btn">
                Sponsor Bundle
              </a>
            </div>
          </div>
        </section>
        {/* -- Exhibitor Success Path Section End -- */}
      </div>
      {/* -------- Book Booth Modal -------- */}
      {showBoothModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h4 className="pink">Book Booth – Step {step}/3</h4>
              <X
                size={24}
                className="cursor-pointer"
                onClick={closeBoothModal}
              />
            </div>

            <div className="modal-body">
              {/* Step 1 */}
              {step === 1 && (
                <div className="step-content">
                  <label>
                    <User className="icon" /> Name
                  </label>
                  <input type="text" placeholder="Full Name" />
                  <label>
                    <Mail className="icon" /> Email
                  </label>
                  <input type="email" placeholder="Email Address" />
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="step-content">
                  <label>
                    <Phone className="icon" /> Phone
                  </label>
                  <input type="text" placeholder="Phone Number" />
                  <label>
                    <Briefcase className="icon" /> Company
                  </label>
                  <input type="text" placeholder="Company Name" />
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="step-content">
                  <label>Booth Preferences</label>
                  <textarea placeholder="Preferred Booth Details"></textarea>
                  <p className="text-light-grey mt-2">
                    Our team will contact you to finalize the setup.
                  </p>
                </div>
              )}
            </div>

            <div className="modal-footer d-flex justify-content-between">
              {step > 1 ? (
                <button
                  className="btn bg-lightgrey text-grey rounded-pill px-4 py-2"
                  onClick={prevStep}
                >
                  ← Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  className="btn bg-pink text-white rounded-pill px-4 py-2"
                  onClick={nextStep}
                >
                  Next <ArrowRight size={16} className="ms-1" />
                </button>
              ) : (
                <button
                  className="btn bg-pink text-white rounded-pill px-4 py-2"
                  onClick={closeBoothModal}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Exhibitors;
