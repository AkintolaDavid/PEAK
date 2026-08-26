import React from "react";
import { FaCompass, FaEye, FaHandshake } from "react-icons/fa6";
import "./Core.css";

const pillars = [
  { icon:<FaCompass/>, number:"01", title:"Our mission", text:"To be the one-stop maritime partner for sophisticated agency, logistics and vessel supply requirements." },
  { icon:<FaEye/>, number:"02", title:"Our vision", text:"To be the shipping agency of choice for ship owners, managers and charterers across West Africa and beyond." },
  { icon:<FaHandshake/>, number:"03", title:"Our values", text:"Integrity, responsiveness and operational excellence guide every decision we make and every vessel we serve." },
];
export const Core = () => (
  <section className="maintenance_container">
    <div className="pillar-intro"><div><p className="section-label">What guides us</p><h2>Built on strong foundations</h2></div><p>We bring discipline, accountability and care to complex maritime operations.</p></div>
    <div className="coreareas">
      {pillars.map(p=><article key={p.title}><span className="pillar-number">{p.number}</span><div className="pillar-icon">{p.icon}</div><h3>{p.title}</h3><p>{p.text}</p></article>)}
    </div>
  </section>
);
