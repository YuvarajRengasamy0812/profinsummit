import React from "react";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="about-section py-5 position-relative mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-6">
            <div className="about-text mb-4 mb-lg-0">
              <p className="small pink mb-2">ABOUT PROFIN BLOCKCHAIN SUMMIT</p>
              <h2 className="mb-3">
                Fueling <span className="pink">India's Decentralized Dream</span>
              </h2>
              <p className="text-dark mb-3">
                The definitive hub where <strong>25-30% of ProFin Expo's 50,000 sqm floor</strong> ignites with Web3 fire.
              </p>
              <p className="text-dark mb-4">
                March 28-29, 2026 – same roof as FinTech giants, but your dedicated portal to blockchain's edge.
              </p>

              <a
                href="/assets/brochure/profin-blockchain-brochure.pdf"
                target="_blank"
                className="btn btn-download d-inline-flex align-items-center px-4 py-2 rounded-pill"
              >
                <FileText size={20} className="me-2" />
                Download Event Brochure
              </a>
            </div>
          </div>

          {/* Right Visual / Illustration */}
          <div className="col-lg-6">
            <div className="about-image text-center">
              <img
                src="assets/images/resources/blockchain-hero.jpg"
                alt="Blockchain Illustration"
                className="img-fluid rounded shadow-sm animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
