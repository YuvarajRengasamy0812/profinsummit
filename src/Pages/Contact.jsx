import React, { useEffect, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import Contactform from "../Components/Contactform";
import axios from "axios";

function Contact() {
  const [directionLink, setDirectionLink] = useState(""); // store the Google Maps link
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch topic data for map direction
      axios
        .get("https://staging.profinsummit.com/adminpanel/api/v1/topic/126")
        .then((res) => {
          if (res.data.topic && res.data.topic.length) {
            setDirectionLink(res.data.topic[0].details); // get the embed link
          }
        })
        .catch((err) => console.error("Error fetching direction:", err))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) {
      return <p className="text-center py-5">Loading map...</p>;
    }
    
  return (
    <div>
      <Pagehelmet pageTitle="Contact Us" />
      <Breadcrumb title="Contact Us" />

      {/*--Contact Section end--*/}
      <section className="contact">
        <div className="container">
          <div className="contact-inner text-center text-md-start">
            <div className="row g-md-5 gy-5 align-items-center">
              <div className="col-lg-4 col-md-5">
                <div className="contact-event-info p-8 text-white h-100 rounded bg-pink">
                  <div className="event-venue pb-5">
                    <h5 className="text-white pb-2">EVENT VENUE:</h5>
                    <p className="m-0">Yashobhoomi, New Delhi</p>
                  </div>
                  <div className="address pb-5">
                    <h5 className="text-white pb-2">ADDRESS:</h5>
                    <p className="m-0">
                      Yashobhoomi Convention Centre <br/> Sector 25 Dwarka,
                        Bharthal, Delhi, 110077, India
                    </p>
                  </div>
                  {/* <div className="reception-info pb-5">
                    <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                    <p className="pb-5 m-0">Booking: (+91) 04 0355 11061</p>
                  </div> */}
                  <div className="ticket-info pb-5">
                    <h5 className="text-white pb-2">Ticket INFO:</h5>
                      <p className="m-0">Booking: <a className="social-url" href="tel:+919629896298">(+91) 96 2989 6298</a></p>
                    <p className="m-0 mt-2">Email: <a className="social-url" href="mailto:proof@profinsummit.com">info@profinsummit.com</a></p>
                  </div>
                  <div className="direction-link">
                    <a className="btn border" href="https://maps.app.goo.gl/YGxfKar8MsD4bLpr8">Get Directions</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="form-title mb-4">
                    <h2 className="mb-1">
                      Drop a <span className="pink">line</span>
                    </h2>
                    <p>
                      Reach out to us for any queries or assistance. We're here to help!
                    </p>
                  </div>
                  <div className="form">
                    <Contactform />
                  </div>
                </div>
              </div>
            </div>
            <div className="map-direction mt-5">
              {directionLink ? (
                  <iframe
                    height="400"
                    className="rounded w-100"
                    src={directionLink}
                    title="Event Direction Map"
                  ></iframe>
                ) : (
                  <p>Map not available</p>
                )}
            </div>
          </div>
        </div>
      </section>
      {/*--Contact Section end--*/}
    </div>
  );
}

export default Contact;
