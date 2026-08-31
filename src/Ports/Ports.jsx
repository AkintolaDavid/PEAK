import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown, FaLocationDot } from "react-icons/fa6";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";
import "./Ports.css";

import heroBg from "../Services/services-hero.jpg";
import apapa from "./apapa.jpg";
import tincan from "./tincan.jpg";
import lekki from "./lekki.jpg";
import onne from "./onne.jpg";
import rivers from "./rivers.jpg";
import calabar from "./calabar.jpg";

import transferImg from "../Services/transfer.jpg";
import towingImg from "../Services/towing.jpg";
import crewImg from "../Services/crew.jpg";
import jettyImg from "../Services/jetty.png";
import logisticsImg from "../Services/logistics.jpg";
import canalImg from "../Services/canal.jpg";

const ACTIVITIES = {
  transfer: { img: transferImg, label: "Ship-to-ship transfer" },
  towage: { img: towingImg, label: "Towage & barge support" },
  crew: { img: crewImg, label: "Crew change" },
  berth: { img: jettyImg, label: "Berthing & jetty operations" },
  cargo: { img: logisticsImg, label: "Cargo & container handling" },
  channel: { img: canalImg, label: "Channel transit & pilotage" },
};

const ports = [
  {
    name: "Lagos Port Complex, Apapa",
    state: "Lagos State",
    img: apapa,
    blurb:
      "Nigeria's busiest general-cargo and container gateway. Peak handles full vessel agency here, from pre-arrival planning to final sailing.",
    activities: ["berth", "cargo", "channel"],
  },
  {
    name: "Tin Can Island Port",
    state: "Lagos State",
    img: tincan,
    blurb:
      "A high-volume container and RoRo terminal complex adjoining Apapa, supported for customs clearing, haulage and crew logistics.",
    activities: ["cargo", "crew", "towage"],
  },
  {
    name: "Lekki Deep Sea Port",
    state: "Lagos State",
    img: lekki,
    blurb:
      "Nigeria's deepest port, able to receive the largest container vessels calling West Africa. Peak coordinates agency and transhipment support.",
    activities: ["cargo", "channel", "berth"],
  },
  {
    name: "Onne Port",
    state: "Rivers State",
    img: onne,
    blurb:
      "The oil & gas free-zone port serving upstream operators. Peak supports offshore vessels, supply runs and project cargo.",
    activities: ["transfer", "towage", "crew"],
  },
  {
    name: "Rivers Port, Port Harcourt",
    state: "Rivers State",
    img: rivers,
    blurb:
      "The principal eastern port for general and bulk cargo, with Peak providing agency, clearing and onward inland movement.",
    activities: ["berth", "cargo", "crew"],
  },
  {
    name: "Calabar Port",
    state: "Cross River State",
    img: calabar,
    blurb:
      "A river port reached by a long dredged channel, handling bulk, containers and project cargo with Peak's pilotage coordination.",
    activities: ["channel", "berth", "cargo"],
  },
];

export const Ports = () => {
  usePageMeta(
    "Ports",
    "The Nigerian ports Peak Shipping Agency covers — Apapa, Tin Can Island, Lekki, Onne, Port Harcourt and Calabar — and the activities we run at each."
  );
  const [openPort, setOpenPort] = useState(null);

  return (
    <>
      <Navbar />

      <section
        className="ports-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="ports-hero-shade" />
        <div className="ports-hero-content">
          <p className="eyebrow">
            <span /> Where we operate
          </p>
          <h1>Nigerian ports we cover</h1>
          <p>
            Peak Shipping Agency represents vessels and coordinates cargo at
            every major port along the Nigerian coast. Select a port to see the
            activities we handle there.
          </p>
        </div>
      </section>

      <div className="ports-container">
        <div className="ports-grid">
          {ports.map((port, i) => {
            const isOpen = openPort === i;
            return (
              <article
                key={port.name}
                className={isOpen ? "port-card is-open" : "port-card"}
              >
                <div className="port-card-media">
                  <img src={port.img} alt={port.name} />
                </div>
                <div className="port-card-body">
                  <p className="port-card-state">
                    <FaLocationDot /> {port.state}
                  </p>
                  <h2>{port.name}</h2>
                  <p className="port-card-blurb">{port.blurb}</p>
                  <button
                    type="button"
                    className="port-card-toggle"
                    aria-expanded={isOpen}
                    onClick={() => setOpenPort(isOpen ? null : i)}
                  >
                    {isOpen ? "Hide activities" : "View activities"}
                    <FaChevronDown />
                  </button>
                </div>

                {isOpen && (
                  <div className="port-activities">
                    <p className="port-activities-label">
                      What we handle at {port.name.split(",")[0]}
                    </p>
                    {port.activities.map((key) => (
                      <figure key={key}>
                        <img src={ACTIVITIES[key].img} alt={ACTIVITIES[key].label} />
                        <figcaption>{ACTIVITIES[key].label}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <section className="ports-cta">
        <div>
          <p>PLANNING A CALL?</p>
          <h2>Tell us which port and we'll take it from there.</h2>
        </div>
        <Link to="/contact">
          Get in touch <FaArrowRight />
        </Link>
      </section>
    </>
  );
};
