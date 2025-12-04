import React from "react";

const DirectionSection = () => {
  return (
    <>
      <section className="direction">
        <div className="container">
          <div className="section-title text-center pb-2 w-lg-60 m-auto">
            <p className="mb-1  pink">REACH US</p>
            <h2 className="mb-1">
              GET DIRECTION TO THE <span className="pink">PROFIN BLOCKCHAIN SUMMIT 2025</span>
            </h2>
            <p className="mb-0">
              Reach out to us for any queries or assistance. We're here to help!
            </p>
          </div>
          <div className="direction-content">
            <div className="direction-info">
              <div className="row">
                <div className="col-lg-5 col-md-5 px-1">
                  <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                    <div className="justify-content-center align-self-center ms-6">
                      <h5 className="text-white pb-2">EVENT VENUE:</h5>
                      <p className="pb-5 m-0">Yashobhoomi, New Delhi</p>
                      <h5 className="text-white pb-2">ADDRESS:</h5>
                      <p className="pb-5 m-0">
                        Yashobhoomi Convention Centre <br/> Sector 25 Dwarka,
                        Bharthal, Delhi, 110077, India
                      </p>
                      <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                      <p className="pb-5 m-0">Booking: <a className="social-url" href="tel:+919629896298">(+91) 96 2989 6298</a></p>
                      <a className="btn border" href="https://maps.app.goo.gl/YGxfKar8MsD4bLpr8">Get Directions</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 px-1 py-2">
                  <iframe
                    height="400"
                    className="rounded w-100"
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Yashobhoomi%20Convention%20Centre%20Sector%2025%20Dwarka%20Delhi%20110077%20India&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectionSection;
