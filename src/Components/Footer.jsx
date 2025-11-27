import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAllSocial } from '../api/socialmedia';

import BackToTop from "../Components/Backtotop";
import SubscribeForm from "./SubscribeForm";
import { getAllLog } from '../api/style';

function Footer() {


  const [social, setSocial] = useState([]);
  const [logo, setLogo] = useState([]);
        useEffect(() => {
          getSocialList();
            getLogo();
         
      }, [])
  
       const getSocialList = () => {
          getAllSocial()
              .then((res) => {
                console.log(res,"yuvi")
                  setSocial(res?.data);
              })
              .catch((err) => {
                  console.log(err);
              });
      };
        const getLogo = () => {
                  getAllLog()
                      .then((res) => {
                      console.log("logos")
                          setLogo(res?.data?.details);
                      })
                      .catch((err) => {
                          console.log(err);
                      });
              };
  return (
    <div>
      {/*--Subscribe Section start--*/}
      <section className="subscribe py-4">
        <div className="container">
          <div className="subscribe-content">
            <div className="row">
              <div className="col-lg-6 align-self-center ">
                <div className="sub-left text-center text-lg-start py-2">
                  <h4 className="text-white ">
                    DON'T MISS OUR FUTURE UPDATES! GET SUBSCRIBED TODAY!
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sub-right py-2">
                  <p className="text-white mb-4 text-center text-lg-start">
                    {" "}
                    PROFIN BLOCKCHAIN SUMMIT 2026 News & Updates
                  </p>
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Subscribe Section end--*/}

      {/*--Footer Section start--*/}
      <footer className="pt-9 text-center text-white position-relative z-1">
        <div className="overlay z-n1 start-0"></div>
        <div className="container">
          <div className="footer-content w-lg-50 m-auto">
            <div className="footer-logo mb-4 pt-1">
              <Link to="/">
                <img
                  src={logo.logo}
                  className="w-50"
                  alt="footer-logo"
                />
              </Link>
            </div>
            <div className="footer-disciption border-bottom border-white border-opacity-25 m-auto mb-6">
              <p className=" mb-6">
                The PROFIN Blockchain Summit 2026 is India’s premier Web3, DeFi,
                NFTs & Digital Assets conference — co-located with PROFIN Expo.
                Be part of India’s decentralized future.
              </p>
              <div className="footer-socials pb-6">
                {/* <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                  {[
                    "facebook",
                    "twitter",
                    "google",
                    "instagram",
                    "youtube-play",
                  ].map((icon, i) => (
                    <li key={i} className="d-inline">
                      <a
                        href="#"
                        className="d-inline-block rounded-circle bg-white  bg-opacity-25"
                      >
                        <i className={`fa fa-${icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul> */}
                <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                  {[
                    {
                      icon: "facebook",
                     url: social.facebook || "#",
                    },
                    {
                      icon: "twitter",
                      url: social.twitter || "#",
                    },
                    {
                      icon: "instagram",
                      url:social.instagram || "#",
                    },
                    {
                      icon: "youtube",
                      url: social.youtube || "#",
                    },
                    {
                      icon: "linkedin",
                      url:social.linkedin || "#",
                    },
                  ].map((item, i) => (
                    <li key={i} className="d-inline">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-block rounded-circle bg-white  bg-opacity-25"
                      >
                        <i className={`fa fa-${item.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            <div className="footer-menu pb-9">
              <ul className="p-0 m-0">
                <li className="d-inline mx-2">
                  <Link to="/About">
                    <small>About Event</small>
                  </Link>
                </li>
                {/* <li className="d-inline mx-2">
                  <Link to="/Speakerlists">
                    <small>Speakers</small>
                  </Link>
                </li> */}
                <li className="d-inline mx-2">
                  <Link to="/Eventlists">
                    <small>Schedule</small>
                  </Link>
                </li>
                <li className="d-inline mx-2">
                  <Link to="/Pricing">
                    <small>Ticket Pricing</small>
                  </Link>
                </li>
                <li className="d-inline mx-2">
                  <Link to="/Contact">
                    <small>Contact Us</small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright pb-6 pt-1">
            <small>
              © All Rights Reserved By <a href="http://profinsummit.com/">PROFIN BLOCKCHAIN SUMMIT</a> {new Date().getFullYear()}.
            </small>
          </div>
        </div>
      </footer>
      {/*--Footer Section end--*/}

      {/*--Bacl-to-top Button start--*/}
      <BackToTop />
      {/*--Bacl-to-top Button end--*/}
    </div>
  );
}

export default Footer;
