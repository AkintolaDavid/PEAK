import "./Header.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaAnchor, FaShip, FaGlobeAfrica } from "react-icons/fa";
import { Navbar } from "../Navbar/Navbar";
import { Webring } from "../Webring/Webring";
import { Testimonies } from "../Testimonies/Testimonies";

const Header = () => (
  <>
    <div className="headercontainer">
      <Navbar />
      <section className="landingpageimgcontainer">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Trusted maritime partners since 2007</p>
          <h1>Your cargo. Our commitment. <em>Every port.</em></h1>
          <p className="hero-copy">Reliable shipping agency, marine and logistics support across Nigeria and the West African coast.</p>
          <div className="hero-actions">
            <Link to="/services" className="button primary">Explore our services <FaArrowRight /></Link>
            <Link to="/contact" className="button ghost">Speak to our team</Link>
          </div>
        </div>
        <div className="hero-facts">
          <div><FaShip /><strong>17+</strong><span>Years of experience</span></div>
          <div><FaAnchor /><strong>24/7</strong><span>Operational support</span></div>
          <div><FaGlobeAfrica /><strong>All ports</strong><span>Across Nigeria</span></div>
        </div>
      </section>
    </div>
    <Webring />
    <Testimonies />
  </>
);
export default Header;
