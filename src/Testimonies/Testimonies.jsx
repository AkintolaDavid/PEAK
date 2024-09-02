import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonies.css";
import logo from "../Clients/eterna.png";
import logo2 from "../Clients/danco.jpg";
import logo3 from "../Clients/nnpcc.png";
import pic from "./download.jpeg";
import pic2 from "./ibeh.jpg";
import pic3 from "./civil.png";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
export const Testimonies = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    return;
  }, []);
  return (
    <div className="testimonies">
      {" "}
       
      <span className="test_first_text">
        Take The Words Of Our Most Valued Clients
      </span>
      {/* <div> */}
      <Swiper
        pagination={isSmallScreen ? { dynamicBullets: true } : undefined}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="innertest_slide">
            {" "}
            <img src={pic} className="innertest_slide_pic" />
            <div className="test_slide_img_text">
              <img src={logo} />
              <div className="test_slide_first_text">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and all users.” “You made it so simple. My
                new site is so much faster and easier to work with than my old
                site. I just choose the page, make the change.”
              </div>
              <h3>Leslie Alexander, Product Designer at Crowny</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="innertest_slide">
            {" "}
            <img src={pic2} className="innertest_slide_pic" />
            <div className="test_slide_img_text">
              <img src={logo2} />
              <div className="test_slide_first_text">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and all users.” “You made it so simple. My
                new site is so much faster and easier to work with than my old
                site. I just choose the page, make the change.”
              </div>
              <h3>the second testifier</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="innertest_slide">
            {" "}
            <img src={pic3} className="innertest_slide_pic" />
            <div className="test_slide_img_text">
              <img src={logo3} />
              <div className="test_slide_first_text">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and all users.” “You made it so simple. My
                new site is so much faster and easier to work with than my old
                site. I just choose the page, make the change.”
              </div>
              <h3>the third testifier</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {isSmallScreen ? null : (
        <div className="navigation-buttons">
          <button className="swiper-prev">
            <FaArrowLeft className="testleftbtnicon" />
          </button>
          <button className="swiper-next">
            <FaArrowRight className="testrightbtnicon" />
          </button>
        </div>
      )}
    </div>

    // </div>
  );
};
