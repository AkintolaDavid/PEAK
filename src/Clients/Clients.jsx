/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Clients.css";
import nnpc from "./nnpcc.png";
import nepal from "./nepal.png";
import sahara from "./sahara.jpg";
import hsc from "./hsc.png";
import royal from "./ROG1.jpg";
import karbon from "./karbon.png";
import emadeb from "./emadeb.jfif";
import uniom from "./uniom.jfif";
import aquataine from "./elf.jpg";
import somerset from "./somerset.png";
import linetrale from "./linetrale.png";
import energycul from "./energy.png";
import capital from "./capital.png";
import reliance from "./reli.jpg";
import danco from "./danco.jpg";
import ontario from "./ontario.png";
import octagone from "./octogone.png";
import duport from "./duport.png";
import achetype from "./archetype.png";
import eterna from "./eterna.png";
import swift from "./swift.png";
import rodam from "./rodam.png";
import clientt from "./clients-hero.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";

const clients = [
  { logo: nnpc, name: "NNPC Shipping" },
  { logo: nepal, name: "Nepal Oil and Gas" },
  { logo: sahara, name: "Sahara Energy Resource Limited" },
  { logo: royal, name: "Royal Oil & Gas" },
  { logo: eterna, name: "Eterna Oil & Gas" },
  { logo: achetype, name: "Archetype Oil & Gas" },
  { logo: danco, name: "Danco Group of Company" },
  { logo: reliance, name: "Reliance Petroleum Limited" },
  { logo: capital, name: "Capital Oil & Gas" },
  { logo: linetrale, name: "Linetrale Oil Supply & Trading Company" },
  { logo: aquataine, name: "Aquataine Oil & Gas" },
  { logo: octagone, name: "Octogone International Gas & Oil Limited" },
  { logo: duport, name: "Duport Marine Limited" },
  { logo: karbon, name: "Karbon Power Limited" },
  { logo: hsc, name: "Oxford Hydrocarbon Limited" },
  { logo: energycul, name: "Energy Culture Limited" },
  { logo: uniom, name: "Union Maritime Nig. Ltd" },
  { logo: ontario, name: "Ontario Oil & Gas Limited" },
  { logo: swift, name: "Swift Oil & Gas" },
  { logo: somerset, name: "Somerset Energy Limited" },
  { logo: emadeb, name: "Emadeb Energy Services (Nig) Ltd" },
  { logo: rodam, name: "Rodam Logistics Limited" },
];

export const Clients = () => {
  usePageMeta(
    "Clients",
    "Ship owners, oil & gas majors and logistics companies across Nigeria and beyond rely on PEAK Shipping Agency for dependable agency, marine and logistics support."
  );
  return (
    <>
      <Navbar />
      <section className="clients-hero" style={{ backgroundImage: `url(${clientt})` }}>
        <div className="clients-hero-shade" />
        <div className="clients-hero-content">
          <p className="eyebrow"><span /> Trusted across the industry</p>
          <h1>Our clients</h1>
          <p>
            Ship owners, oil & gas majors and logistics companies across
            Nigeria and beyond rely on PEAK Shipping Agency for dependable
            agency, marine and logistics support.
          </p>
        </div>
      </section>

      <div className="clientcontainer">
        <div className="clients-intro">
          <p className="section-label">Trusted partners</p>
          <h2>Backed by Nigeria's energy and maritime leaders</h2>
        </div>
        <div className="clients-stats">
          <div>
            <strong>20+</strong>
            <span>Active clients</span>
          </div>
          <div>
            <strong>17 yrs</strong>
            <span>Serving the sector</span>
          </div>
          <div>
            <strong>All ports</strong>
            <span>Across Nigeria</span>
          </div>
        </div>
        <div className="clientslogo">
          {clients.map((c) => (
            <div className="client-card" key={c.name}>
              <img src={c.logo} className="client-card-img" />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="clients-cta">
        <div>
          <p>JOIN OUR CLIENT LIST</p>
          <h2>Let's discuss your next port call.</h2>
        </div>
        <Link to="/contact">
          Get in touch <FaArrowRight />
        </Link>
      </section>
    </>
  );
};
