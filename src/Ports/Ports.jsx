import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaXmark, FaLocationDot } from "react-icons/fa6";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";
import "./Ports.css";

import heroBg from "../Header/hero.jpg";
import jettyWide from "./jetty-wide.jpg";
import tankerBow from "./tanker-bow.jpg";
import supplyVessel from "./supply-vessel.jpg";
import portOnne from "./port-onne.jpg";
import portRivers from "./port-rivers.jpg";
import portCalabar from "./port-calabar.jpg";

import transferImg from "../Services/transfer.jpg";
import towingImg from "../Services/towing.jpg";
import crewImg from "../Services/crew.jpg";
import jettyImg from "../Services/jetty.png";
import logisticsImg from "../Services/logistics.jpg";
import canalImg from "../Services/canal.jpg";

import opBoarding from "./operations/op-1-boarding.jpg";
import opUnderway from "./operations/op-2-underway.jpg";
import opToolbox from "./operations/op-3-toolbox.jpg";
import opTugFast from "./operations/op-4-tug-made-fast.jpg";
import opHoseCommenced from "./operations/op-5-hose-commenced.jpg";
import opHoseCompleted from "./operations/op-6-hose-completed.jpg";

const OPERATION_STEPS = [
  {
    time: "12:36",
    title: "Team boards the vessel",
    blurb:
      "Peak's agent, mooring master, loading master and the Intertek surveyor board NUE COUGAR as she proceeds to MT Bora for the SPM operation.",
    img: opBoarding,
  },
  {
    time: "14:12",
    title: "Underway to MT Bora",
    blurb:
      "With the full team onboard, the vessel makes way toward MT Bora to begin the single point mooring transfer.",
    img: opUnderway,
  },
  {
    time: "16:18",
    title: "Toolbox safety briefing",
    blurb:
      "A toolbox meeting is held onboard before operations begin, walking the crew through the plan and safety checks.",
    img: opToolbox,
  },
  {
    time: "16:54",
    title: "Tug boat made fast",
    blurb:
      "The support tug is made fast alongside, holding position for the mooring and cargo transfer to follow.",
    img: opTugFast,
  },
  {
    time: "17:36",
    title: "Cargo hose connection commences",
    blurb:
      "The cargo hose is lowered and connection to the manifold begins under the surveyor's watch.",
    img: opHoseCommenced,
  },
  {
    time: "18:30",
    title: "Cargo hose connection completed",
    blurb:
      "Connection is completed and secured, clearing the vessel to begin cargo transfer.",
    img: opHoseCompleted,
  },
];

// Activities modal is parked for now — flip to true to bring back the
// "View activities" button and its modal.
const SHOW_ACTIVITIES = false;

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
    img: jettyWide,
    blurb:
      "Nigeria's busiest general-cargo and container gateway. Peak handles full vessel agency here, from pre-arrival planning to final sailing.",
    activities: ["berth", "cargo", "channel"],
  },
  {
    name: "Tin Can Island Port",
    state: "Lagos State",
    img: tankerBow,
    blurb:
      "A high-volume container and RoRo terminal complex adjoining Apapa, supported for customs clearing, haulage and crew logistics.",
    activities: ["cargo", "crew", "towage"],
  },
  {
    name: "Lekki Deep Sea Port",
    state: "Lagos State",
    img: supplyVessel,
    blurb:
      "Nigeria's deepest port, able to receive the largest container vessels calling West Africa. Peak coordinates agency and transhipment support.",
    activities: ["cargo", "channel", "berth"],
  },
  {
    name: "Onne Port",
    state: "Rivers State",
    img: portOnne,
    blurb:
      "The oil & gas free-zone port serving upstream operators. Peak supports offshore vessels, supply runs and project cargo.",
    activities: ["transfer", "towage", "crew"],
  },
  {
    name: "Rivers Port, Port Harcourt",
    state: "Rivers State",
    img: portRivers,
    blurb:
      "The principal eastern port for general and bulk cargo, with Peak providing agency, clearing and onward inland movement.",
    activities: ["berth", "cargo", "crew"],
  },
  {
    name: "Calabar Port",
    state: "Cross River State",
    img: portCalabar,
    blurb:
      "A river port reached by a long dredged channel, handling bulk, containers and project cargo with Peak's pilotage coordination.",
    activities: ["channel", "berth", "cargo"],
  },
];

export const Ports = () => {
  usePageMeta(
    "Operations & Ports",
    "See how Peak Shipping Agency runs a real vessel operation, plus the Nigerian ports we cover — Apapa, Tin Can Island, Lekki, Onne, Port Harcourt and Calabar."
  );
  const [activePort, setActivePort] = useState(null);
  const close = useCallback(() => setActivePort(null), []);

  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activePort === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activePort, close]);

  const port = activePort !== null ? ports[activePort] : null;

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
            <span /> Operations &amp; ports
          </p>
          <h1>How we operate, and where</h1>
        </div>
      </section>

      <section className="operations-section">
        <div className="operations-container">
          <p className="eyebrow eyebrow-dark">
            <span /> What we run
          </p>
          <h2>Inside a real Peak operation</h2>
          <p className="operations-intro">
            A single point mooring (SPM) cargo transfer Peak coordinated
            end to end for NUE COUGAR at MT Bora — from the team boarding
            to the cargo hose being connected.
          </p>

          <div className="operations-scroller">
            <div className="operations-sticky">
              <div className="operations-sticky-media">
                {OPERATION_STEPS.map((step, i) => (
                  <img
                    key={step.title}
                    src={step.img}
                    alt={step.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={i === activeStep ? "is-active" : ""}
                  />
                ))}
              </div>
            </div>

            <div className="operations-steps">
              {OPERATION_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  ref={(el) => (stepRefs.current[i] = el)}
                  data-index={i}
                  className={
                    "operations-step-text" +
                    (i === activeStep ? " is-active" : "")
                  }
                >
                  <span className="operations-step-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="ports-container">
        <p className="eyebrow eyebrow-dark ports-section-eyebrow">
          <span /> Where we operate
        </p>
        <h2 className="ports-section-heading">Ports we cover</h2>
        <div className="ports-grid">
          {ports.map((p, i) => (
            <article key={p.name} className="port-card">
              <div className="port-card-media">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="port-card-body">
                <p className="port-card-state">
                  <FaLocationDot /> {p.state}
                </p>
                <h2>{p.name}</h2>
                <p className="port-card-blurb">{p.blurb}</p>
                {SHOW_ACTIVITIES && (
                  <button
                    type="button"
                    className="port-card-toggle"
                    onClick={() => setActivePort(i)}
                  >
                    View activities <FaArrowRight />
                  </button>
                )}
              </div>
            </article>
          ))}
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

      {SHOW_ACTIVITIES && port && (
        <div
          className="port-modal-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${port.name} — activities we handle`}
        >
          <div className="port-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="port-modal-close"
              onClick={close}
              aria-label="Close"
            >
              <FaXmark />
            </button>

            <div className="port-modal-head">
              <p className="port-card-state">
                <FaLocationDot /> {port.state}
              </p>
              <h2>{port.name}</h2>
              <p>{port.blurb}</p>
            </div>

            <p className="port-modal-label">
              What we handle at {port.name.split(",")[0]}
            </p>

            <div className="port-modal-activities">
              {port.activities.map((key) => (
                <figure key={key}>
                  <img src={ACTIVITIES[key].img} alt={ACTIVITIES[key].label} />
                  <figcaption>{ACTIVITIES[key].label}</figcaption>
                </figure>
              ))}
            </div>

            <div className="port-modal-foot">
              <Link to="/contact" onClick={close}>
                Start a port call <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
