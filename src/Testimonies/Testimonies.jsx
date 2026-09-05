import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaClock, FaRoute, FaHeadset, FaShip, FaAnchor, FaBoxesPacking } from "react-icons/fa6";
import "./Testimonies.css";

const services = [
  { icon: <FaShip/>, title: "Shipping agency", text: "Full agency representation from pre-arrival to final sailing." },
  { icon: <FaAnchor/>, title: "Marine & offshore support", text: "Offshore, jetty and ship-to-ship transfer operations." },
  { icon: <FaBoxesPacking/>, title: "Logistics & customs clearing", text: "End-to-end clearing that keeps cargo moving." },
];

export const Testimonies = () => (
  <>
    <section className="what-we-do">
      <p className="section-label">What we do</p>
      <h2>Three ways we keep your operation moving</h2>
      <div className="what-we-do-grid">
        {services.map((s) => (
          <div key={s.title}>
            <div className="what-we-do-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="text-link">See all services <FaArrowRight/></Link>
    </section>
    <section className="difference-section">
      <div className="difference-copy">
        <p className="section-label">The Peak difference</p>
        <h2>Your operation never stops.<br/>Neither do we.</h2>
        <ul>
          <li><FaCheck/> One accountable point of contact</li><li><FaCheck/> Fast, transparent communication</li>
          <li><FaCheck/> Proven local regulatory knowledge</li><li><FaCheck/> Round-the-clock operational support</li>
        </ul>
        <Link to="/services" className="text-link">See how we can help <FaArrowRight/></Link>
      </div>
      <div className="difference-image">
        <div className="operation-card">
          <p><FaClock/><span><b>24 / 7</b> Vessel assistance</span></p>
          <p><FaRoute/><span><b>End-to-end</b> Port coordination</span></p>
          <p><FaHeadset/><span><b>One team</b> Always within reach</span></p>
        </div>
      </div>
    </section>
  </>
);
