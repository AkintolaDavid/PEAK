import "./Header.css";
import { useState } from "react";
import { Webring } from "../Webring/Webring";
import { Navbar } from "../Navbar/Navbar";
import { Testimonies } from "../Testimonies/Testimonies";
import Sidemenu from "../Sidemenu/Sidemenu";
const Header = (props) => {
  const [sideMenuShow, setSideMenuShow] = useState(false);
  const sidemenuHandler = () => {
    setSideMenuShow(!sideMenuShow);
  };
  return (
    <>
      <div className="headercontainer">
        <Navbar />

        <div className="landingpageimgcontainer">
          <span>We offer the best shipping agency services</span>
        </div>
      </div>
      <Webring />
      <Testimonies />
    </>
  );
};
export default Header;
