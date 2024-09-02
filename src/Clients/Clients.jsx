import React from "react";
import "./Clients.css";
import clientbkg from "./clientt.jpg";
import nnpc from "./nnpcc.png";
import nepal from "./nepal.png";
import sahara from "./sahara.jpg";
import hsc from "./hsc.png";
import royal from "./ROG1.jpg";
import karbon from "./karbon.png";
import emadeb from "./emadeb.jfif";
import uniom from "./uniom.jfif";
import aquataine from "./elf.jpg";
import somerset from "./somerset.png";
import linetrale from "./linetrale.png";
import energycul from "./energy.png";
import capital from "./capital.png";
import reliance from "./reli.jpg";
import danco from "./danco.jpg";
import ontario from "./ontario.png";
import octagone from "./octogone.png";
import duport from "./duport.png";
// import duport from "./duport.jpg";
import achetype from "./archetype.png";
import eterna from "./eterna.png";
import swift from "./swift.png";
import rodam from "./rodam.png";
import { Navbar } from "../Navbar/Navbar";
export const Clients = () => {
  return (
    <>
      <Navbar />
      <div className="clientcontainer">
        <div className="clienttopimgcontainer">
          <span className="clientfirsttext">MEET OUR CLIENTS</span>
        </div>

        <div className="clientslogo">
          <div className="">
            <img src={nnpc} className="clientslogoi" />
            <span>NNPC SHIPPING</span>
          </div>
          <div className="">
            {" "}
            <img src={nepal} className="clientslogoii" />
            <span>NEPAL OIL AND GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={sahara} className="clientslogoiii" />
            <span>SAHARA ENERGY RESOURCE LIMITED </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={royal} className="clientslogoaiii" />
            <span>ROYAL OIL & GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={eterna} className="clientslogoiv" />
            <span>ETERNA OIL & GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={achetype} className="clientslogov" />
            <span>ACHETYPE OIL & GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={danco} className="clientslogovi" />
            <span>DANCO GROUP OF COMPANY</span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={reliance} className="clientslogovii" />
            <span>RELIANCE PETROLEUM LIMITED </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={capital} className="clientslogoviii" />
            <span>CAPITAL OIL & GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={linetrale} className="clientslogoix" />
            <span>LINETRALE OIL SUPPLY & TRADING COMPANY</span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={aquataine} className="clientslogox" />
            <span>AQUATAINE OIL & GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={octagone} className="clientslogoxi" />
            <span>OCTOGONE INTERNATIONAL GAS & OIL LIMITED</span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={duport} className="clientslogoxii" />
            <span>DUPORT MARINE LIMITED</span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={karbon} className="clientslogoxiii" />
            <span>KARBON POWER LIMITED </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={hsc} className="clientslogoxiv" />
            <span>OXFORD HYDROCARBON LIMITED </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={energycul} className="clientslogoxv" />
            <span>ENERGY CULTURE LIMITED</span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={uniom} className="clientslogoxvi" />
            <span>UNION MARITIME NIG. LTD </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={ontario} className="clientslogoxvii" />
            <span>ONTARIO OIL & GAS LIMITED</span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={swift} className="clientslogoxviii" />
            <span>SWIFT OIL & GAS </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={somerset} className="clientslogoxix" />
            <span>SOMERSET ENERGY LIMITED </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={emadeb} className="clientslogoxx" />
            <span>EMADEB ENERGY SERVICES (NIG) LTD </span>{" "}
          </div>
          <div className="">
            {" "}
            <img src={rodam} className="clientslogoxxi" />
            <span>RODAM LOGISTICS LIMITED </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
