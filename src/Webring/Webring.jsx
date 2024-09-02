import React from "react";
import "./Webring.css";
import { Core } from "../Core/Core";
export const Webring = () => {
  return (
    <>
      <div className="webringcontainer">
        <h2 className="webringfirst">ABOUT PEAK</h2>
        <span className="webringssecond">
          PEAK SHIPPING AGENCY LIMITED was incorporated in Nigeria in March 2007
          by the Corporate Affairs Commission. Since then development and
          expansion has been accomplished through vision, dedication and
          professionalism. We provide efficient shipping agency and logistic
          services in all seas of Nigeria and beyond as we are a registered
          Shipping Company/ Agency with Nigerian Port Authority and all relevant
          authorities charged with Shipping and Maritime Services.
        </span>
      </div>
      <Core />
      <div className="webringcontainer2">
        <h2 className="webringfirst">What Makes Us Different?</h2>
        <span className="webringssecond">
          With a goal to excel in the services we provide in the Maritime/
          Shipping sector of our economy, our esteem organization, Peak Shipping
          Agency Limited operates with highly qualified, motivated and dedicated
          personnel with proven track record holding probity as a watchword and
          have manifested in various areas like Husbanding of vessels to safe
          berth and Sailing to all ports in Nigeria and beyond without incurring
          demurrage, Vessel Chartering, Bunkering of Vessels, Supply of fresh
          water, Provision of Cargo Surveyors etc. Within the first three years
          of operation, Peak Shipping Agency Limited prides herself in being the
          leading and the preferred Shipping Agency in Nigeria.
        </span>
      </div>
    </>
  );
};
