import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import transfer from "./transfer.jpg";
import towing from "./towing.jpg";
import crew from "./crew.jpg";
import jetty from "./jetty.png";
import offshore from "./offshore-hd.png";
import servicesHero from "../Header/hero.jpg";
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
];

const RevealCard = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={"service-card" + (visible ? " is-visible" : "")}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <img src={item.img} className="area_img" alt={item.title} />
      <h2>{item.title}</h2>
      <span className="area_img_span">{item.text}</span>
    </div>
  );
};

export const Services = () => {
  usePageMeta(
    "Services",
    "Shipping agency, marine and offshore support, and logistics services — jetty operations, ship-to-ship transfer, crew change and towage."
  );

  const [activeGroup, setActiveGroup] = useState(groups[0].name);
  const groupRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveGroup(entry.target.dataset.group);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    groupRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToGroup = (name) => {
    const el = groupRefs.current.find((g) => g && g.dataset.group === name);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <section className="services-hero" style={{ backgroundImage: `url(${servicesHero})` }}>
        <div className="services-hero-shade" />
        <div className="services-hero-content">
          <p className="eyebrow"><span /> What we do</p>
          <h1>Our services</h1>
          <p>
            PEAK Shipping Agency Limited offers a full range of marine and
            logistics services built around every vessel call.
          </p>
        </div>
      </section>

      <nav className="services-jumpnav">
        <div className="services-jumpnav-track">
          {groups.map((group) => (
            <button
              type="button"
              key={group.name}
              className={"services-jumpnav-pill" + (activeGroup === group.name ? " is-active" : "")}
              onClick={() => scrollToGroup(group.name)}
            >
              {group.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="servicecontainer">
        {groups.map((group, gi) => (
          <div
            className="servicefirstcontent"
            key={group.name}
            ref={(el) => (groupRefs.current[gi] = el)}
            data-group={group.name}
          >
            <div className="servicefirst">{group.name}</div>
            <div className="serviceareas">
              {group.items.map((item, i) => (
                <RevealCard item={item} index={i} key={item.title} />
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
