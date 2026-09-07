import "./Header.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaAnchor, FaShip, FaGlobeAfrica } from "react-icons/fa";
import { Navbar } from "../Navbar/Navbar";
import { Webring } from "../Webring/Webring";
import { Testimonies } from "../Testimonies/Testimonies";
import { Visit } from "../Visit/Visit";
import { usePageMeta } from "../usePageMeta";
import heroVideo from "../assets/herosectionvideo.mp4";
import heroPoster from "../assets/hero-poster.jpg";

const Header = () => {
  usePageMeta(
    null,
    "Dependable shipping agency, marine and logistics support across Nigerian ports and the West African coast since 2007."
  );
  return (
  <>
    <div className="headercontainer">
      <Navbar />
      <section className="landingpageimgcontainer">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
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
    <Visit />
  </>
  );
};
export default Header;
