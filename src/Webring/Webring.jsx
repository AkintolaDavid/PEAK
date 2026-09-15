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
        <p>Since 2007, Peak Shipping Agency has helped vessels call Nigerian ports safely, efficiently and without costly delays — backed by on-ground knowledge and transparent service at every stage.</p>
        <Link to="/aboutus" className="text-link">Discover our story <FaArrowRight /></Link>
      </div>
    </section>
    <Core />
  </>
);
