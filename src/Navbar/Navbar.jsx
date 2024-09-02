import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import top from "../Header/TOP.jpg";
import Sidemenu from "../Sidemenu/Sidemenu";
import { CgMenu } from "react-icons/cg";
import "./Navbar.css";
export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle state on button click
  };
  useEffect(() => {
    // setIsOpen(false);
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [sideMenuShow, setSideMenuShow] = useState(false);
  const navigate = useNavigate();
  const contactHandler = () => {
    navigate("/contact");
  };
  const homeHandler = () => {
    navigate("/");
  };
  const aboutusHandler = () => {
    navigate("/aboutus");
  };
  const serviceHandler = () => {
    navigate("/services");
  };
  const clientsHandler = () => {
    navigate("/clients");
  };
  const managementHandler = () => {
    navigate("/management");
  };

  const sidemenuHandler = () => {
    setSideMenuShow(!sideMenuShow);
  };

  const closeSideMenuHandler = () => {
    setSideMenuShow(false);
  };

  return (
    <>
      {isMobile ? (
        <div>
          <div className="header">
            <Link to="/">
              {" "}
              <img src={top} className="headerLogo" />
            </Link>
            {/* <ul className="headerUL">
              <li onClick={homeHandler}>HOME</li>
              <li onClick={aboutusHandler}>ABOUT US</li>
              <li onClick={serviceHandler}>SERVICES</li>
              <li onClick={managementHandler}>MANAGEMENT</li>
              <li onClick={clientsHandler}>CLIENTS</li>
              <li onClick={contactHandler}> CONTACT </li>
            </ul> */}
            <div>
              <CgMenu className="peaknavcg" onClick={sidemenuHandler} />
            </div>
            <img
              src={top}
              onClick={sidemenuHandler}
              className="headerSidemenu"
            />
          </div>

          {sideMenuShow && (
            <div className={`sideMenu ${sideMenuShow ? "open" : ""}`}>
              <Sidemenu onClose={sidemenuHandler} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="header">
            <Link to="/">
              {" "}
              <img src={top} className="headerLogo" />
            </Link>
            <ul className="headerUL">
              <li onClick={homeHandler}>HOME</li>
              <li onClick={aboutusHandler}>ABOUT US</li>
              <li onClick={serviceHandler}>SERVICES</li>
              <li onClick={managementHandler}>MANAGEMENT</li>
              <li onClick={clientsHandler}>CLIENTS</li>
              <li onClick={contactHandler}> CONTACT </li>
            </ul>

            <img
              src={top}
              onClick={sidemenuHandler}
              className="headerSidemenu"
            />
          </div>

          {sideMenuShow && (
            <div className={`sideMenu ${sideMenuShow ? "open" : ""}`}>
              <Sidemenu onClose={sidemenuHandler} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
