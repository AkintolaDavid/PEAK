import React, { useState } from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot, FaHeadset } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";

const OFFICE_EMAIL = "Info@peakshippingnigeria.com";
const OFFICE_ADDRESS =
  "Peak House, 11B North Avenue, off Tamandu Barracks, Apapa GRA, Lagos, Nigeria";
const MAP_SRC = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  usePageMeta(
    "Contact",
    "Get in touch with PEAK Shipping Agency Limited in Apapa, Lagos — reachable 24/7 for urgent vessel and port support."
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website enquiry from ${name || "a visitor"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <Navbar />
      <section className="contact-hero">
        <div className="contact-hero-shade" />
        <div className="contact-hero-content">
          <p className="eyebrow"><span /> We'd love to hear from you</p>
          <h1>Get in touch</h1>
          <p>
            Comments, questions or a new job? Drop us a note and we'll get
            back to you shortly.
          </p>
        </div>
      </section>

      <div className="ContactUscontainer">
        <div className="contactussendmessagecontainer">
          <div className="contactusinformation">
            <p className="contactusinfo-title">Reach us directly</p>
            <div>
              <FaPhoneAlt className="contactusinformationicon" />
              <span>08023206975</span>
            </div>
            <div>
              <IoMdMail className="contactusinformationicon" />
              <span>{OFFICE_EMAIL}</span>
            </div>
            <div>
              <FaMapLocationDot className="contactusinformationicon" />
              <span>{OFFICE_ADDRESS}.</span>
            </div>
            <iframe
              title="Peak Shipping Agency office location"
              className="contactusmap"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="eager"
              src={MAP_SRC}
            />
            <div className="contactus-support-note">
              <FaHeadset />
              <span>Active operation? We're reachable 24/7 for urgent support.</span>
            </div>
          </div>
          <form className="contactussendmessageform" onSubmit={handleSubmit}>
            <span>
              Send us a message and our team will respond within one business
              day.
            </span>
            <label className="contactus-field-label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              className="contactussendmessagenameinput"
              placeholder="Name *"
              name="Name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="contactus-field-label" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className="contactussendmessageemailinput"
              placeholder="Email *"
              name="Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="contactus-field-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className="contactussendmessagemessageinput"
              placeholder="Message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="contactussendmessagebtn" type="submit">
              Send Message
            </button>
            <p className="contactusform-foot">
              Prefer email? Write to{" "}
              <a href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
