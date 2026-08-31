import React from "react";
import { Link } from "react-router-dom";
import transfer from "./transfer.jpg";
import towing from "./towing.jpg";
import crew from "./crew.jpg";
import canal from "./canal.jpg";
import jetty from "./jetty.png";
import logistics from "./logistics.jpg";
import offshore from "./offshore-hd.png";
import servicesHero from "../Header/hero.jpg";
import shiplogo from "../Header/ship.jpg";
import sailors from "../Contact/sailors.jpg";
import { FaArrowRight } from "react-icons/fa6";
import "./Services.css";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";

const groups = [
  {
    name: "Marine",
    items: [
      {
        img: offshore,
        title: "Offshore support services",
        text: "A one-stop maritime services provider offering sophisticated shipping agency services, logistics support and supply requirements to foreign and local clients through modern practices and a dedicated, experienced team.",
      },
      {
        img: jetty,
        title: "Jetty / terminal operations",
        text: "The shipping agency of choice for ship owners, managers and charterers trading on the West African coast and beyond.",
      },
      {
        img: transfer,
        title: "Ship-to-ship transfer",
        text: "Exceptional service that exceeds client expectations, upholding the highest ethical standards and demonstrating expertise and dedication in every task.",
      },
    ],
  },
  {
    name: "Logistics",
    items: [
      {
        img: logistics,
        title: "Custom clearing",
        text: "End-to-end clearing support that keeps cargo moving through Nigerian ports without unnecessary delay or cost.",
      },
      {
        img: crew,
        title: "Crew change",
        text: "Fast, well-coordinated crew changes with attention to documentation, immigration and vessel schedules.",
      },
      {
        img: towing,
        title: "Towage & barge operations",
        text: "Reliable towage and barge operations, planned and executed with strict attention to safety and timing.",
      },
    ],
  },
  {
    name: "Shipping",
    items: [
      {
        img: shiplogo,
        title: "Shipping agency",
        text: "Full shipping agency representation for vessels calling at Nigerian ports, from pre-arrival planning to final sailing.",
      },
      {
        img: sailors,
        title: "Bunkering / fresh water supplies",
        text: "Dependable bunkering and fresh water supply, coordinated to fit tight port turnaround windows.",
      },
      {
        img: canal,
        title: "Canal transit services",
        text: "Transit planning and coordination that keeps vessels compliant and on schedule.",
      },
    ],
  },
];

export const Services = () => {
  usePageMeta(
    "Services",
    "Shipping agency, marine and offshore support, and logistics services — from pre-arrival planning and jetty operations to customs clearing, crew change and canal transit."
  );
  return (
    <>
      <Navbar />
      <section className="services-hero" style={{ backgroundImage: `url(${servicesHero})` }}>
        <div className="services-hero-shade" />
        <div className="services-hero-content">
          <p className="eyebrow"><span /> What we do</p>
          <h1>Our services</h1>
          <p>
            PEAK Shipping Agency Limited offers a full range of services grouped
            into three areas: Shipping, Marine and Logistics.
          </p>
        </div>
      </section>

      <div className="servicecontainer">
        {groups.map((group) => (
          <div className="servicefirstcontent" key={group.name}>
            <div className="servicefirst">{group.name}</div>
            <div className="serviceareas">
              {group.items.map((item) => (
                <div className="service-card" key={item.title}>
                  <img src={item.img} className="area_img" alt={item.title} />
                  <h2>{item.title}</h2>
                  <span className="area_img_span">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="services-cta">
        <div>
          <p>NEED A HAND WITH YOUR NEXT CALL?</p>
          <h2>Let's talk about your operation.</h2>
        </div>
        <Link to="/contact">
          Get in touch <FaArrowRight />
        </Link>
      </section>
    </>
  );
};
