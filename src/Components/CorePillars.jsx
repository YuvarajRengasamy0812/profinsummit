import React from "react";
import { Layers, Shield, Bitcoin, Boxes } from "lucide-react";

const pillars = [
  {
    title: "Blockchain Foundations",
    description:
      "From Ethereum basics to Polygon scaling – workshops for newbies, deep dives for pros. Democratizing tech for India's 1.4B digital natives.",
    icon: <Bitcoin size={40} />,
  },
  {
    title: "Web3 Worlds",
    description:
      "Metaverse builds, DAO governance, interoperability. Exhibitors: Demo your play-to-earn game; visitors: Prototype in labs.",
    icon: <Boxes size={40} />,
  },
  {
    title: "Digital Assets Mastery",
    description:
      "NFT marketplaces, DeFi protocols, crypto custody. Sessions unpack tax hacks and yield strategies tailored to Indian regs.",
    icon: <Layers size={40} />,
  },
  {
    title: "Regulation & Reality",
    description:
      "RBI CBDC updates, SEBI guidelines, AML in DeFi. Speakers: Direct Q&A with lawmakers – turn policy into profit.",
    icon: <Shield size={40} />,
  },
];

const CorePillars = () => {
  return (
    <section className="core-pillars py-5 mt-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <p className="pink mb-1">Core Pillars</p>
            <h2 className="black fw-bold">
              Our <span className="pink">Focus Areas</span>
            </h2>
            <p className="text-grey">
              Explore the key pillars powering India’s Web3, blockchain, and digital asset revolution.
            </p>
          </div>
        </div>

        <div className="row g-4 d-flex flex-wrap">
          {pillars.map((pillar, idx) => (
            <div className="col-lg-3 col-md-6 d-flex" key={idx}>
              <div className="pillar-card p-4 rounded shadow-lg text-center bg-white">
                <div className="pillar-icon mb-3">{pillar.icon}</div>
                <h5 className="fw-bold black mb-2">{pillar.title}</h5>
                <p className="text-grey">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
