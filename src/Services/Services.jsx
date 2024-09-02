import React from "react";
import transfer from "./transfer.jpg";
import towing from "./towing.jpg";
import crew from "./crew.jpg";
import canal from "./canal.jpg";
import freshwater from "./freahwater.jpg";
import hotel from "./hotell.jpg";
import jetty from "./jetty.png";
import logistics from "./logistics.jpg";
import offshore from "./offshore.jpg";
import shiplogo from "./shiplogo.jpg";
import "./Services.css";
import { Navbar } from "../Navbar/Navbar";

export const Services = () => {
  return (
    <>
      <Navbar />
      <div className="servicecontainer">
        <div className="service_text">
          <span className="service_text_header"> OUR SERVICES </span>
          <span className="service_text_subheader">
            At PEAK Shipping Agency Limited we offer various services that are
            mainly grouped into these 3 : Shipping, Marine and Logistics
          </span>
        </div>

        <div className="servicefirstcontent">
          {" "}
          <div className="servicefirst">Marine</div>
          <div className="serviceareas">
            {" "}
            <div className="electrical">
              <img src={offshore} className="area_img" />
              <h2>Offshore support services</h2>
              <span className="area_img_span">
                We aim to become a one stop solution Maritime Services Provider
                offering sophisticated Shipping Agency Services, Logistic
                Support, and Supply Requirements to both foreign and local
                clients through modern practices using a team of motivated and
                highly dedicated professionals with relevant experience.
              </span>
            </div>
            <div className="mechanical">
              <img src={jetty} className="area_img" />
              <h2>Jetty / Terminal Operations</h2>
              <span className="area_img_span">
                To be the number one Shipping Agency of choice to Ship Owners,
                Managers and Charterers trading on the West African Coast and
                beyond.
              </span>
            </div>
            <div className="general">
              <img src={transfer} className="area_img" />
              <h2>Ship to ship transfer</h2>
              <span className="area_img_span">
                We are committed to providing exceptional service to our
                clients, exceeding their expectations, We uphold the highest
                ethical standards in all and We strive for excellence in our
                work, demonstrating expertise and dedication in every task.
              </span>
            </div>
          </div>
        </div>

        <div className="servicefirstcontent">
          {" "}
          <div className="servicefirst">Logistics</div>
          <div className="serviceareas">
            {" "}
            <div className="electrical">
              <img src={logistics} className="area_img" />
              <h2>Custom Clearing</h2>
              <span className="area_img_span">
                We aim to become a one stop solution Maritime Services Provider
                offering sophisticated Shipping Agency Services, Logistic
                Support, and Supply Requirements to both foreign and local
                clients through modern practices using a team of motivated and
                highly dedicated professionals with relevant experience.
              </span>
            </div>
            <div className="mechanical">
              <img src={crew} className="area_img" />
              <h2>Crew Change</h2>
              <span className="area_img_span">
                To be the number one Shipping Agency of choice to Ship Owners,
                Managers and Charterers trading on the West African Coast and
                beyond.
              </span>
            </div>
            <div className="general">
              <img src={towing} className="area_img" />
              <h2>Towage & barge operations</h2>
              <span className="area_img_span">
                We are committed to providing exceptional service to our
                clients, exceeding their expectations, We uphold the highest
                ethical standards in all and We strive for excellence in our
                work, demonstrating expertise and dedication in every task.
              </span>
            </div>
          </div>
        </div>

        <div className="servicefirstcontent">
          {" "}
          <div className="servicefirst">Shipping</div>
          <div className="serviceareas">
            {" "}
            <div className="electrical">
              <img src={shiplogo} className="area_img" />
              <h2>Shipping Agency</h2>
              <span className="area_img_span">
                We aim to become a one stop solution Maritime Services Provider
                offering sophisticated Shipping Agency Services, Logistic
                Support, and Supply Requirements to both foreign and local
                clients through modern practices using a team of motivated and
                highly dedicated professionals with relevant experience.
              </span>
            </div>
            <div className="mechanical">
              <img src={freshwater} className="area_img" />
              <h2>Bunkering / fresh water Supplies</h2>
              <span className="area_img_span">
                To be the number one Shipping Agency of choice to Ship Owners,
                Managers and Charterers trading on the West African Coast and
                beyond.
              </span>
            </div>
            <div className="general">
              <img src={canal} className="area_img" />
              <h2>Canal Transit Services </h2>
              <span className="area_img_span">
                We are committed to providing exceptional service to our
                clients, exceeding their expectations, We uphold the highest
                ethical standards in all and We strive for excellence in our
                work, demonstrating expertise and dedication in every task.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
