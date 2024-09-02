import React from "react";
import { Link } from "react-router-dom";
import global from "./global.png";
import experience from "./experience.png";
import customer from "./customer.jpg";
import lifeatpeakimg from "./staff2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import "./Aboutus.css";
import { Navbar } from "../Navbar/Navbar";
export const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutuscentriccontainer">
        {" "}
        <div>
          <img src={customer} className="aboutuscentricimg" />
        </div>
        <div className="aboutuscentric">
          <span className="aboutuscentrictheader">
            WE ARE A CLIENT-CENTRIC TEAM.
          </span>
          <span className="aboutuscentricttext">
            Peak Shipping Agency prides itself on providing tailored solutions
            to meet the unique needs of each client. We foster open and
            transparent communication channels to ensure clients are
            well-informed throughout the shipping process. We ensure to always
            deliver exceptional service, exceeding client expectations and
            building long-lasting relationships.
          </span>
        </div>
      </div>

      <div className="aboutusglobalcontainer">
        <div className="aboutusglobal">
          <span className="aboutusglobaltheader">
            WE OFFER GLOBAL REACH AND LOCAL EXPERTISE.
          </span>
          <span className="aboutusglobalttext">
            Peak Shipping Agency has a strong international network, allowing
            them to offer seamless shipping solutions across various global
            markets. Their deep understanding of the Nigerian shipping landscape
            enables them to navigate local regulations and customs efficiently.
            The company provides provide comprehensive and reliable service by
            strategic partnerships with key industry players
          </span>
        </div>
        <div>
          <img src={global} className="aboutusglobalimg" />
        </div>
      </div>

      <div className="aboutusexperiencecontainer">
        <div>
          <img src={experience} className="aboutusexperienceimg" />
        </div>
        <div className="aboutusexperience">
          <span className="aboutusexperiencetheader">
            WE ARE EXPERIENCED AND KNOWLEDGEABLE.
          </span>
          <span className="aboutusexperiencettext">
            Peak Shipping Agency employs a team of highly qualified and
            experienced professionals who possess in-depth knowledge of the
            shipping logistics industry. The company invests in ongoing training
            and development to ensure its staff remains up-to-date with industry
            trends and best practices.
          </span>
        </div>
      </div>

      <div className="lifeatpeak">
        <div className="lifeatpeaktextcontainer">
          <span className="lifeatpeakfirsttext">Life At Peak</span>
          <span className="lifeatpeaksecondtext">Why Work At Peak?</span>
          <span className="lifeatpeakthirdtext">
            Peak Shipping Agency Limited is one of the biggest private sector
            employers in Nigeria. With the help of a robust, consistent, and
            meritocratic framework for people management, Peak continues to
            maintain a high-performance, inclusive, progressive environment,
            where unprecedented access to opportunities for growth is available
            and purpose-driven talent is developed.
          </span>
          <div className="lifeatpeakbtncontainer">
            {" "}
            <Link to="/management">
              {" "}
              <button>
                {" "}
                <div>
                  {" "}
                  Meet Our Team <FaArrowRight style={{ marginLeft: "10px" }} />
                </div>
              </button>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <button>
                <div>
                  {" "}
                  Let's Talk <FaArrowRight style={{ marginLeft: "10px" }} />
                </div>
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="lifeatpeakimgcontainer">
          <img src={lifeatpeakimg} />
        </div>
      </div>
    </div>
  );
};
