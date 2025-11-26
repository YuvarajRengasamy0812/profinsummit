import React from "react";
import CountUp from "react-countup";
import { Users, Calendar, Briefcase, DollarSign } from "lucide-react";

const LivePulse = () => {
  const stats = [
    { icon: <Users size={28} />, number: 100, suffix: "+", label: "Speakers Locked" },
    { icon: <Calendar size={28} />, number: 2000, suffix: "+", label: "Tickets Claimed" },
    { icon: <Briefcase size={28} />, number: 50, suffix: "+", label: "Booths Sold" },
    // { icon: <DollarSign size={28} />, number: 10, suffix: "M+", label: "Investments Pitched Last Year" },
  ];

  return (
    <section className="live-pulse py-5 mt-5">
      <div className="container text-center">
        <h2 className="black fw-bold mb-5" data-aos="fade-up" data-aos-delay="500">What's <span className="pink">Buzzing</span></h2>
        <div className="row justify-content-center g-4">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="600" key={index}>
              <div className="pulse-card p-4 rounded-4 shadow-sm">
                <div className="pulse-icon mb-3 bg-lightgrey rounded-circle p-3">{stat.icon}</div>
                <h3 className="pink mb-2">
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix ? stat.suffix : ""}
                  />
                </h3>
                <p className="text-grey mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivePulse;
