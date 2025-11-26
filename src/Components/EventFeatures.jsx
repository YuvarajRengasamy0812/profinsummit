import React from "react";

const EventFeatures = () => {
  return (
    <>
      {/*!-- Theme Spotlight Section Start --*/}
      <section className="event-feature py-8">
        <div className="container">
          <div className="row justify-content-center text-center pb-5">
            <div className="col-lg-8">
                <p className="mb-1 pink" 
                data-aos="fade-up"
                data-aos-delay="200">Features</p>
              <h2 className="black fw-bold pb-3" 
                data-aos="fade-up"
                data-aos-delay="300">Why This <span className="pink">Summit Matters</span></h2>
              <p className="text-grey" data-aos="fade-up" >
                Discover how India’s Web3, digital assets, and blockchain
                adoption is reshaping global innovation.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-right" >
              <div className="feature-box p-4 bg-lightgrey rounded-4 h-100 text-center">
                <div className="feature-icon mb-3">
                  <img
                    src="assets/images/resources/blockchain.png"
                    alt="icon"
                    className="w-25"
                  />
                </div>
                <h4 className="black fw-bold pb-2">India Blockchain Growth</h4>
                <h6 className="pink fw-semibold pb-2">
                  India’s Legal Leap: From Ban to Boom
                </h6>
                <p className="text-grey">
                  Post-2025 legalization, 100M+ users are tokenizing
                  everything—from real estate to remittances. Our summit decodes
                  SEBI/RBI rules through live pilots, empowering you to build
                  compliant blockchain innovation.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" >
              <div className="feature-box p-4 bg-lightgrey rounded-4 h-100 text-center">
                <div className="feature-icon mb-3">
                  <img
                    src="assets/images/resources/metaverse.png"
                    alt="icon"
                    className="w-25"
                  />
                </div>
                <h4 className="black fw-bold pb-2">Web3 Interconnect</h4>
                <h6 className="pink fw-semibold pb-2">
                  Web3 Unleashed: Connect, Create, Conquer
                </h6>
                <p className="text-grey">
                  Dive into DAOs, metaverses, and cross-chain bridges.
                  Experience hands-on labs where visitors create their first
                  NFT, while exhibitors showcase enterprise blockchain solutions
                  for global supply chains.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-left" >
              <div className="feature-box p-4 bg-lightgrey rounded-4 h-100 text-center">
                <div className="feature-icon mb-3">
                  <img
                    src="assets/images/resources/crypto.png"
                    alt="icon"
                    className="w-25"
                  />
                </div>
                <h4 className="black fw-bold pb-2">Crypto Tokens</h4>
                <h6 className="pink fw-semibold pb-2">
                  Digital Assets Domination
                </h6>
                <p className="text-grey">
                  Explore stablecoins, yield farming, and tokenized RWAs. Hear
                  insights from WazirX and Polygon leaders on scaling portfolios
                  and solutions in India’s growing $100B digital assets economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*!-- Theme Spotlight Section End --*/}
    </>
  );
};

export default EventFeatures;
