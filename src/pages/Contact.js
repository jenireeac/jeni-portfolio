import React from "react";
import Linkedln from "../assets/linkedln.png";
import Github from '../assets/github.png';
import Gmail from '../assets/gmail.png'

const Contact = () => {
  return (
    <div className="line-box">
      <h3
        className=" m-2 p-4 text-card animate__animated  animate__slideInLeft"
        id="contact"
      >
        Contact Me
      </h3>
      <div className="text-center">
      <img className="m-2" src={Linkedln} alt="" width={50} />
      <img className="m-2" src={Github} alt="" width={50} />
      <img className="m-2" src={Gmail} alt="" width={50} />
      </div>
    </div>
  );
};

export default Contact;
