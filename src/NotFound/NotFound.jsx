import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Navbar } from "../Navbar/Navbar";
import { usePageMeta } from "../usePageMeta";
import "./NotFound.css";

export const NotFound = () => {
  usePageMeta("Page not found", "The page you were looking for could not be found.");
  return (
    <>
      <Navbar />
      <section className="notfound">
        <p className="notfound-code">404</p>
        <h1>We couldn't find that page</h1>
        <p className="notfound-copy">
          The link may be broken or the page may have moved. Let's get you back
          on course.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="button primary">
            Back to home <FaArrowRight />
          </Link>
          <Link to="/contact" className="button ghost">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
};
