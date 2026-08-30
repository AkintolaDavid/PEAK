import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import top from "../Header/TOP.png";
import "./Navbar.css";

const links = [
  ["/", "Home"], ["/aboutus", "About"], ["/services", "Services"],
  ["/clients", "Clients"],
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Peak Shipping Agency home">
          <img src={top} alt="Peak Shipping Agency" />
        </Link>
        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>
          ))}
          <Link className="nav-cta" to="/contact">Get in touch <span>↗</span></Link>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <IoClose /> : <CgMenuRight />}
        </button>
      </div>
    </header>
  );
};
