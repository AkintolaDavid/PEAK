import React from "react";
import { Link } from "react-router-dom";
import storyImg from "./staff2.png";
import teamImg from "./team.jpg";
import bckimg from "./about-hero.jpg";
import { FaArrowRight, FaHandshake, FaEarthAfrica, FaUserGraduate } from "react-icons/fa6";
import "./Aboutus.css";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";

const pillars = [
  {
    icon: <FaHandshake />,
    title: "Client-centric",
    text: "We tailor every engagement to the client's needs, with open, transparent communication from first contact to final sign-off.",
  },
  {
    icon: <FaEarthAfrica />,
    title: "Global reach, local expertise",
    text: "A strong network and deep knowledge of Nigerian regulations let us deliver reliably across international and local markets alike.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Experienced team",
    text: "Our people bring years of hands-on shipping and logistics experience, kept current through ongoing training.",
  },
];

export const Aboutus = () => {
  usePageMeta(
    "About",
    "PEAK Shipping Agency Limited has coordinated shipping agency, marine and logistics operations for ship owners, managers and charterers along the West African coast since 2007."
  );
  return (
    <div>
      <Navbar />

      <section className="about-hero" style={{ backgroundImage: `url(${bckimg})` }}>
        <div className="about-hero-shade" />
        <div className="about-hero-content">
          <p className="eyebrow"><span /> About Peak Shipping Agency</p>
          <h1>Built on trust. <em>Proven since 2007.</em></h1>
          <p>
            PEAK Shipping Agency Limited is a Nigerian shipping agency, marine
            and logistics partner, registered with the Nigerian Ports
            Authority and relevant maritime authorities.
          </p>
        </div>
      </section>

      <section className="about-story">
        <img src={storyImg} className="about-story-img" alt="Peak Shipping Agency staff reviewing vessel documentation" />
        <div className="about-story-copy">
          <p className="section-label">Who we are</p>
          <h2>One point of contact, from arrival to sailing.</h2>
          <p>
            PEAK Shipping Agency Limited has supported ship owners, managers
            and charterers along the West African coast since 2007. Based in
            Apapa, Lagos, we coordinate shipping agency, marine and logistics
            operations end to end — so our clients spend less time waiting
            and more time moving.
          </p>
        </div>
      </section>

      <section className="about-pillars">
        <div className="about-pillars-intro">
          <p className="section-label">What sets us apart</p>
          <h2>Why clients work with Peak</h2>
        </div>
        <div className="about-pillars-grid">
          {pillars.map((p) => (
            <article key={p.title}>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-leadership">
        <div className="about-leadership-head">
          <p className="section-label">Leadership</p>
          <h2>The team steering Peak</h2>
          <p>
            Experienced maritime professionals accountable for every stage of
            your operation — from first enquiry to final sailing.
          </p>
        </div>
        <figure className="about-team-photo">
          <img src={teamImg} alt="The Peak Shipping Agency team" />
          <figcaption>The people behind every Peak port call.</figcaption>
        </figure>
      </section>

      <section className="about-cta">
        <div>
          <p>READY WHEN YOU ARE</p>
          <h2>Let's talk about your operation.</h2>
        </div>
        <div className="about-cta-actions">
          <Link to="/contact" className="button primary">
            Get in touch <FaArrowRight />
          </Link>
          <Link to="/services" className="button ghost">
            Explore our services
          </Link>
        </div>
      </section>
    </div>
  );
};
