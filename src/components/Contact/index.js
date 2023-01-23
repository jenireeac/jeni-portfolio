import React from "react";
import Linkedln from "../../assets/linkedln.png";
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';
import Cv from '../../assets/cv.png';
const Contact = () => {
  return (
    <div>
      <h3
        className=" m-2 p-4 text-card animate__animated  animate__slideInLeft"
        id="contact"
      >
        Contact Me
      </h3>
      <div className="text-center">
        <a href="https://www.linkedin.com/in/jeniree-alvarez-4ba997206/details/interests/?detailScreenTabIndex=0" target='blank'>
      <img className="m-2" src={Linkedln} alt="Linkedln icon" width={50} />
        </a>
        <a href="https://github.com/jenireeac" target='blank'>
      <img className="m-2" src={Github} alt="Github icon" width={50} />
        </a>
        <a href="mailto:dev.jenireealvarez@gmail.com">
      <img className="m-2" src={Gmail} alt="Gmail icon" width={50} />
        </a>
        <img className="m-2" src={Cv} alt="Resume icon" width={50} />
      </div>
    </div>
  );
};

export default Contact;
