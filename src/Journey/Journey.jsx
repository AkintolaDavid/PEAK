import React from "react";
import "./Journey.css";

import supplyVesselImg from "../Ports/supply-vessel.jpg";
import jettyWideImg from "../Ports/jetty-wide.jpg";
import opToolboxImg from "../Ports/operations/op-3-toolbox.jpg";
import opBoardingImg from "../Ports/operations/op-1-boarding.jpg";
import opHoseCompletedImg from "../Ports/operations/op-6-hose-completed.jpg";

const STEPS = [
  { title: "Cargo & customs cleared", img: supplyVesselImg },
  { title: "Vessel sails, call closed out", img: jettyWideImg },
  { title: "Toolbox safety briefing", img: opToolboxImg },
  { title: "Team boards the vessel", img: opBoardingImg },
  { title: "Cargo hose connection completed", img: opHoseCompletedImg },
];

export const Journey = () => (
  <section className="journey-section">
    <div className="journey-container">
      <p className="journey-eyebrow">
        <span /> How we work
      </p>
      <h2>One port call, start to finish</h2>

      <div className="journey-stack">
        {STEPS.map((step, i) => (
          <div
            className="journey-panel"
            key={step.title}
            style={{ top: `${96 + i * 18}px`, zIndex: i + 1 }}
          >
            <img src={step.img} alt={step.title} loading={i === 0 ? "eager" : "lazy"} />
            <span className="journey-panel-number">{String(i + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
