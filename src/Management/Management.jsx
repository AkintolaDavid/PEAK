import React from "react";
import "./Management.css";
import pic from "../Testimonies/download.jpeg";
import pic2 from "../assets/staffs.jpg";
import { Navbar } from "../Navbar/Navbar";
export const Management = () => {
  return (
    <div>
      <Navbar />
      <div className="managementcontainer">
        <div className="managementfirsttext">MEET OUR TEAM</div>
        <div className="ceocontainet">
          <img src={pic} className="ceoimg" />
          <span className="ceonamespan">CEO name</span>
          {/* <span className="ceospan">A LITTLE APPRASSAIL ABOUT CCEO</span> */}
        </div>
        <div className="teammembers">
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>{" "}
          <div className="oneteammember">
            <img src={pic} className="oneteammemberimg" />
            <span className="oneteammemberspan">staffs name</span>
            <span className="oneteammemberdoesspan">what the staff does</span>
          </div>
        </div>
        <div className="groupcontainer">
          <img src={pic2} className="groupimg" />
          <span className="groupnamespan">PEAK FAMILY</span>
          {/* <span className="groupspan">A LITTLE APPRASSAIL ABOUT CCEO</span> */}
        </div>
      </div>
    </div>
  );
};
