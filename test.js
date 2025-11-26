import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getAllHeader } from './src/api/header';

const CustomNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuLinks, setMenuLinks] = useState([]);
      const [header, setHedaer] = useState([]);


      useEffect(() => {
        getHedaerList()
       
    }, [])


     const getHedaerList = () => {
        getAllHeader()
            .then((res) => {
                setMenuLinks(res?.data?.links);
            })
            .catch((err) => {
                console.log(err);
            });
    };

  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       const res = await axios.get("http://localhost/profinsummit/api/v1/menu/1");
  //       setMenuLinks(res.data.links);
  //     } catch (error) {
  //       console.error("Error fetching menu:", error);
  //     }
  //   };

  //   fetchMenu();
  // }, []);

  return (
    <>
      {/* DESKTOP MENU */}
      <ul className="cust-nav-desktop" style={{ marginBottom: 0 }}>
        {menuLinks.map((link) =>
          link.sub_links_count > 0 ? (
            // Dropdown menu
            <li key={link.id} className="cust-dropdown">
              <button className="cust-dropdown-btn">
                {link.title} <ChevronDown size={16} />
              </button>
              <ul className="cust-dropdown-menu shadow-lg">
                {link.sub_links.map((sub) => (
                  <li key={sub.id}>
                    <Link to={sub.href || "#"}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.id}>
              <Link to={link.href || "#"}>{link.title}</Link>
            </li>
          )
        )}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="cust-mobile-toggle"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={32} />
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="cust-overlay" onClick={() => setMobileOpen(false)}></div>
      )}

      {/* MOBILE PANEL */}
      <div className={`cust-mobile-panel ${mobileOpen ? "cust-open" : ""}`}>
        <div className="cust-mobile-header">
          <button
            onClick={() => setMobileOpen(false)}
            className="cust-close-btn"
          >
            <X size={30} />
          </button>
        </div>

        <div className="cust-mobile-list">
          {menuLinks.map((link) =>
            link.sub_links_count > 0 ? (
              <div key={link.id} className="cust-mobile-dropdown">
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="cust-mobile-dropdown-btn"
                >
                  {link.title} <ChevronDown size={16} className={companyOpen ? "rotate" : ""} />
                </button>
                <div
                  className={`cust-mobile-dropdown-menu ${
                    companyOpen ? "cust-show" : ""
                  }`}
                >
                  {link.sub_links.map((sub) => (
                    <Link
                      key={sub.id}
                      to={sub.href || "#"}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.id}
                to={link.href || "#"}
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;