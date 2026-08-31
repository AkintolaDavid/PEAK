import { React } from "react";
import { useEffect } from "react";
import top2 from "../Header/TOP.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contactme.css";
export const Contactme = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);
  const facebookUrl = "https://web.facebook.com/Ritan360/?_rdc=1&_rdr";
  const twitterUrl = "https://x.com/Ritan360/";
  return (
    <div id="contact" className="Contactme_main_container">
      <div className="contact_top">
        <div className="nigeria_office">
          <h2>Quick Links</h2>
          <div className="contactlinks">
            <span>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Home
              </Link>
            </span>
            <span>
              <Link
                to="/aboutus"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About Us
              </Link>
            </span>
            <span>
              <Link
                to="/services"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Services
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/ports"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Ports
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/clients"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Clients
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/policy"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Privacy Policy{" "}
              </Link>
            </span>
          </div>
        </div>
        <div className="nigeria_office">
          <h2>Nigeria Office</h2>
          <div>
            <span>Peak House, 11B North Avenue,</span>
            <span>off Tamandu Barracks, Apapa GRA, Lagos.</span>
            <span>
              {" "}
              <IoMdMail style={{ marginRight: "10px", fontSize: "19px" }} />
              Info@peakshippingnigeria.com
            </span>
            <span>
              {" "}
              <FaPhoneAlt style={{ marginRight: "10px", fontSize: "19px" }} />
              08023206975
            </span>
          </div>
        </div>
        <div className="contacttopfirst">
          <div>
            <img src={top2} alt="logo" className="contact_logo" />
          </div>
          <div className="social">
            <div className="social_icons">
              <div className="social_icons_fb">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <FaFacebook />{" "}
                </a>
              </div>
              <div className="social_icons_tw">
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <FaXTwitter />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Peak Shipping Agency Limited. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
