import React from "react";
import { FaCompass, FaEye, FaHandshake } from "react-icons/fa6";
import bg from "../Ports/jetty-wide.jpg";
import "./Core.css";

const pillars = [
  { icon:<FaCompass/>, number:"01", title:"Our mission", text:"The one-stop maritime partner for agency, logistics and vessel supply." },
  { icon:<FaEye/>, number:"02", title:"Our vision", text:"Shipping agency of choice across West Africa and beyond." },
  { icon:<FaHandshake/>, number:"03", title:"Our values", text:"Integrity, responsiveness and operational excellence, every call." },
];
export const Core = () => (
  <section className="maintenance_container" style={{ backgroundImage: `url(${bg})` }}>
    <div className="maintenance_shade" />
    <div className="pillar-intro"><div><p className="section-label">What guides us</p><h2>Built on strong foundations</h2></div><p>We bring discipline, accountability and care to complex maritime operations.</p></div>
    <div className="coreareas">
      {pillars.map(p=><article key={p.title}><span className="pillar-number">{p.number}</span><div className="pillar-icon">{p.icon}</div><h3>{p.title}</h3><p>{p.text}</p></article>)}
    </div>
  </section>
);
