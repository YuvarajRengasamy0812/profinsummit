import React from 'react'

const BoothSpectrum = () => {
  return (
    <>
         {/* -- Booth Spectrum Section Start -- */}
        <section className="booth-spectrum py-10 py-md-14 bg-lightgrey">
          <div className="container">
            <div className="col-lg-6 mx-auto">
              <div className="title-content text-lg-center mb-4">
                <p className="mb-1 pink">
                  PROFIN BLOCKCHAIN SUMMIT 2026 SPEAKERS
                </p>
                <h2 className="mb-1">
                  Booth Spectrum{" "}
                  <span className="pink">
                    {" "}
                    Gallery Cards with Pricing Badges
                  </span>
                </h2>
                <p className="m-0">
                  Choose from a range of booth options to fit your brand's needs
                  and budget. Each package is designed to maximize your presence
                  at the summit.
                </p>
              </div>
            </div>
            <div className="row g-4 mt-3">
              {/* 3x3 Booth Card */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="ticket-box-inner bg-white position-relative rounded-bottom-5"
                  style={{ height: "100%" }}
                >
                  <img
                    src="assets/images/pattern/1.png"
                    alt="pattern"
                    className="w-100 pattern position-absolute rounded-top"
                  />

                  <div className="ticket-title py-6 bg-pink text-white text-center">
                    <h4 className="mb-1 text-white">VISITOR PASS</h4>
                    <p>
                      <b>Best For:</b> Trend Explorers{" "}
                    </p>
                  </div>
                  <div className="booth-card border-lightgrey p-4 rounded shadow-sm">
                    <h5 className="mb-2">
                      Startup Pod{" "}
                      <span className="badge bg-pink ms-2">₹50,000</span>
                    </h5>
                    <p className="text-grey mb-2">
                      Startup Pod | 3x3m | Ideal for MVP Demos (e.g., Wallet
                      App)
                    </p>
                    <ul className="mb-3">
                      <li>WiFi/Power Included</li>
                      <li>App Lead Capture</li>
                      <li>1 Rep Pass</li>
                    </ul>
                    <a href="/Booknow" className="btn w-100">
                      Book – 50% Deposit
                    </a>
                  </div>
                </div>
              </div>

              {/* 4x4 Booth Card */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="ticket-box-inner bg-white position-relative rounded-bottom-5"
                  style={{ height: "100%" }}
                >
                  <img
                    src="assets/images/pattern/2.png"
                    alt="pattern"
                    className="w-100 pattern position-absolute rounded-top"
                  />

                  <div className="ticket-title py-6 bg-elite text-white text-center">
                    <h4 className="mb-1 text-white">ELITE PASS</h4>
                    <p>
                      <b>Best For:</b> Skill Builders{" "}
                    </p>
                  </div>
                  <div className="booth-card border-lightgrey p-4 rounded shadow-sm">
                    <h5 className="mb-2">
                      Pavilion Pro{" "}
                      <span className="badge bg-elite ms-2">₹1,20,000</span>
                    </h5>
                    <p className="text-grey mb-2">
                      Pavilion Pro | 4x4m | High-Traffic for Exchanges (Live
                      Trade Screens)
                    </p>
                    <ul className="mb-3">
                      <li>Airdrop Zone</li>
                      <li>2 Rep Passes</li>
                      <li>Custom Branding</li>
                    </ul>
                    <a
                      href="/Booknow"
                      className="btn w-100"
                      style={{ background: "#ae4b84" }}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>

              {/* Exclusive Island Booth */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="ticket-box-inner bg-white position-relative rounded-bottom-5"
                  style={{ height: "100%" }}
                >
                  <img
                    src="assets/images/pattern/5.png"
                    alt="pattern"
                    className="w-100 pattern position-absolute rounded-top"
                  />

                  <div className="ticket-title py-6 bg-business text-white text-center">
                    <h4 className="mb-1 text-white">BUSINESS PASS</h4>
                    <p>
                      <b>Best For:</b> Networkers{" "}
                    </p>
                  </div>
                  <div className="booth-card border-lightgrey p-4 rounded shadow-sm">
                    <h5 className="mb-2">
                      Exclusive Island{" "}
                      <span className="badge bg-business ms-2">₹2,50,000</span>
                    </h5>
                    <p className="text-grey mb-2">
                      Premium Space | 6x6m | Lounge & VR Experience
                    </p>
                    <ul className="mb-3">
                      <li>Custom Branding</li>
                      <li>VR Demo Zone</li>
                      <li>3 Rep Passes</li>
                    </ul>
                    <a
                      href="/Booknow"
                      className="btn w-100"
                      style={{ background: "#393182" }}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>

              {/* VIP Mega Booth */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="ticket-box-inner bg-white position-relative rounded-bottom-5"
                  style={{ height: "100%" }}
                >
                  <img
                    src="assets/images/pattern/4.png"
                    alt="pattern"
                    className="w-100 pattern position-absolute rounded-top"
                  />

                  <div className="ticket-title py-6 bg-vip text-white text-center">
                    <h4 className="text-white mb-1">VIP PASS</h4>
                    <p>
                      <b>Best For:</b> Deal-Closers{" "}
                    </p>
                  </div>
                  <div className="booth-card border-lightgrey p-4 rounded shadow-sm">
                    <h5 className="mb-2">
                      VIP Mega{" "}
                      <span className="badge bg-vip ms-2">₹4,00,000</span>
                    </h5>
                    <p className="text-grey mb-2">
                      Elite Experience | 8x8m | Speaker Slot & Add-Ons
                    </p>
                    <ul className="mb-3">
                      <li>VR / AR Demo Zone</li>
                      <li>5 Rep Passes</li>
                      <li>Priority Branding</li>
                    </ul>
                    <a
                      href="/Booknow"
                      className="btn w-100"
                      style={{ background: "#d7b56b" }}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* -- Booth Spectrum Section End -- */}
    </>
  )
}

export default BoothSpectrum