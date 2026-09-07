import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import reception from "./reception.jpg";
import "./Visit.css";

export const Visit = () => (
  <section className="visit-section">
    <div className="visit-media">
      <img className="visit-media-main" src={reception} alt="Reception at Peak Shipping Agency's Apapa headquarters" />
    </div>
    <div className="visit-copy">
      <p className="section-label">Visit us</p>
      <h2>Step inside Peak House.</h2>
      <p>
        Our Apapa headquarters is where every port call is planned, tracked and
        closed out. Walk through the door and you meet the same people who answer
        your calls at 2 a.m. — agency, marine and logistics teams under one roof.
      </p>
      <p className="visit-address">
        <FaLocationDot /> Peak House, 11B North Avenue, Apapa GRA, Lagos
      </p>
      <Link to="/contact" className="text-link">Find us &amp; get in touch <FaArrowRight /></Link>
    </div>
  </section>
);
