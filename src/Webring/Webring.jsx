import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ship from "../Services/offshore-hd.png";
import { Core } from "../Core/Core";
import "./Webring.css";

export const Webring = () => (
  <>
    <section className="about-home section-shell">
      <div className="about-visual"><img src={ship} alt="Offshore vessel supported by Peak Shipping" /><div className="experience-badge"><b>17+</b><span>years navigating excellence</span></div></div>
      <div className="about-copy">
        <p className="section-label">Who we are</p>
        <h2>Local expertise.<br/>Global standards.</h2>
        <p>Peak Shipping Agency Limited has provided dependable shipping agency and logistics services since 2007. Registered with the Nigerian Ports Authority and relevant maritime authorities, we help vessels call safely, efficiently and without costly delays.</p>
        <p>Our experienced team combines on-ground knowledge with responsive, transparent service at every stage of your operation.</p>
        <Link to="/aboutus" className="text-link">Discover our story <FaArrowRight /></Link>
      </div>
    </section>
    <Core />
  </>
);
