import React, { useState } from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Navbar } from "../Navbar/Navbar";
export const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [from, setfrom] = useState("CONTACT US");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        // "https://ritan-server.onrender.com/api/submit_contactus_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            from,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Form submitted successfully");
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="ContactUscontainer">
        <div className="ContactUsimgcontainer">
          <span>GET IN TOUCH</span>
        </div>

        <div className="contactussendmessagecontainer">
          <div className="contactusinformation">
            <div>
              {" "}
              <FaPhoneAlt className="contactusinformationicon" />
              <span>PEAK PHONE INFO</span>
            </div>
            <div>
              <IoMdMail className="contactusinformationicon" />

              <span>PEAK EMAIL INFO</span>
            </div>
            <div>
              <FaMapLocationDot className="contactusinformationicon" />

              <span>1A, Bristol Road, GRA, Apapa, Lagos, Nigeria.</span>
            </div>
            <iframe
              width="85%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1A,%20Bristol%20Road,%20GRA,%20Apapa,%20Lagos,%20Nigeria.+(PEAK%20SHIPPING%20AGENCY)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
          <div>
            <form className="contactussendmessageform">
              <span>
                Comments, questions? Drop us a note, and we’ll get back with you
                shortly!
              </span>
              <input
                type="text"
                className="contactussendmessagenameinput"
                placeholder="Name *"
                name="Name"
                onChange={(e) => setname(e.target.value)}
                // value={formData.firstName}
                // onChange={handleChange}
              />

              <input
                type="email"
                className="contactussendmessageemailinput"
                placeholder="Email *"
                name="Email"
                onChange={(e) => setemail(e.target.value)}
              />

              <textarea
                type="text"
                className="contactussendmessagemessageinput"
                placeholder="Message"
                name="message"
                onChange={(e) => setmessage(e.target.value)}
              />
              <button
                className="contactussendmessagebtn"
                type="submit"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
