import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import "./Sidemenu.css"; // Create the corresponding CSS file for styling
// import cancel from "./cancel.png";
const Sidemenu = (props) => {
  const navigate = useNavigate();

  const homehandler = () => {
    navigate("/");
  };
  const abouthandler = () => {
    navigate("/aboutus");
  };
  const servicehandler = () => {
    navigate("/services");
  };
  const managementHandler = () => {
    navigate("/management");
  };
  const clientshandler = () => {
    navigate("/clients");
  };
  const contactHandler = () => {
    navigate("/contact");
  };

  return (
    <div className="sideMenu">
      <div onClick={props.onClose}>
        <MdCancel className="sidemenuCancelBtn" />
      </div>
      <ul className="sideMenuUL">
        <li onClick={homehandler}>Home</li>
        <li onClick={abouthandler}>About Us</li>
        <li onClick={servicehandler}>Services</li>
        <li onClick={managementHandler}>Management</li>
        <li onClick={clientshandler}>Clients</li>
        <li onClick={contactHandler}>Contact</li>
      </ul>
    </div>
  );
};

export default Sidemenu;
