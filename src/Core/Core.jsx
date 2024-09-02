import React from "react";
import "./Core.css";
import mission from "../Header/mission.jpg";
import vision from "../Header/vision.jpg";
import value from "../Header/values.jpg";
export const Core = () => {
  return (
    <div className="maintenance_container">
      <div className="maintenance_text">
        <span className="maintenance_text_header">Company's Pillar </span>
        {/* <span className="maintenance_text_subheader">say somethng</span> */}
      </div>
      <div className="coreareas">
        <div className="coreelectrical">
          <img src={mission} className="corearea_img" />
          <h2>Mission</h2>
          <span>
            We aim to become a one stop solution Maritime Services Provider
            offering sophisticated Shipping Agency Services, Logistic Support,
            Supply Requirements to both foreign and local clients through modern
            practices with the help of the company's highly motivated and
            dedicated personnel with relevant experience.
          </span>
        </div>
        <div className="coremechanical">
          <img src={vision} className="corearea_img" />
          <h2>Vision</h2>
          <span>
            To be the number one Shipping Agency of choice to Ship Owners,
            Managers and Charterers trading on the West African Coast and
            beyond.
          </span>
        </div>
        <div className="coregeneral">
          <img src={value} className="corearea_img" />
          <h2> Values</h2>
          <span>
            We are committed to providing exceptional service to our clients,
            exceeding their expectations, We uphold the highest ethical
            standards in all and We strive for excellence in our work,
            demonstrating expertise and dedication in every task.
          </span>
        </div>
      </div>
    </div>
  );
};
