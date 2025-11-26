import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CreditCard, Image, Layers, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2024",
    title: "Tokenization Pilot Projects",
    description:
      "UPI evolves into tokenized payments, pilot projects across India implemented.",
    icon: <CreditCard size={24} />,
  },
  {
    year: "2025",
    title: "India's First National NFT Collection",
    description:
      "Startups mint the first official NFT collection, bridging art and finance.",
    icon: <Image size={24} />,
  },
  {
    year: "2026",
    title: "Sovereign DAO & Web3 Labs Launch",
    description:
      "Regulators blueprint a sovereign DAO, creating compliant innovation labs.",
    icon: <Layers size={24} />,
  },
  {
    year: "2027",
    title: "Blockchain Market Hits $10B",
    description:
      "India’s blockchain ecosystem explodes, attracting VCs, devs, and policymakers.",
    icon: <TrendingUp size={24} />,
  },
];

const OurVision = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    timelineRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="our-vision-gsap py-5 bg-lightgrey mt-5">
      <div className="container">
      <div className="row justify-content-center text-center pb-5">
        <div className="col-lg-8" >
          <p className="mb-1 pink">OUR VISION</p>
          <h2 className="black fw-bold pb-3">
            Why This <span className="pink">Summit Matters</span>
          </h2>
          <p className="text-grey">
            Experience India’s blockchain revolution first-hand: from UPI
            tokenization to national NFT collections, sovereign DAOs, and
            compliance-driven innovation. Join VCs, developers, and policymakers
            to co-create India’s $10B blockchain ecosystem by 2027.
          </p>
        </div>
      </div>
        <div className="row align-items-start">
          {/* Left Narrative */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="vision-text">
              <h2 className="mb-3 black">
                Our Vision – <span className="pink">Blockchain’s Roadmap</span>
              </h2>
              <p className="text-dark">
                Imagine: UPI evolves into tokenized payments, startups mint
                India's first national NFT collection, and regulators blueprint
                a sovereign DAO. That's the 2026 we're building at Yashobhoomi.
                As ProFin Expo's blockchain arm, we bridge traditional finance
                with decentralized tech – attracting VCs, devs, and policymakers
                to co-create compliant, scalable solutions. Since legalization,
                India's blockchain market is exploding to $10B by 2027. Join us
                to claim your stake.
              </p>
              {/* Added image below text */}
              <div className="vision-image mt-4 text-center text-lg-start">
                <img
                  src="assets/images/resources/vision-image.jpg"
                  alt="Our Vision"
                  className="img-fluid rounded shadow-sm animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="col-lg-6">
            <div className="timeline-container position-relative">
              {milestones.map((milestone, idx) => (
                <div
                  className="timeline-item d-flex align-items-start mb-5"
                  key={idx}
                  ref={(el) => (timelineRefs.current[idx] = el)}
                >
                  <div className="timeline-icon bg-pink text-white me-3 d-flex align-items-center justify-content-center rounded-circle">
                    {milestone.icon}
                  </div>
                  <div className="timeline-content bg-white p-4 rounded shadow-sm">
                    <h5 className="fw-bold">{milestone.title}</h5>
                    <small className="text-blue">{milestone.year}</small>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line position-absolute bg-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
