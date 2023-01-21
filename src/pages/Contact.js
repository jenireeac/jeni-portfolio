import React from "react";
import Linkedln from '../assets/linkedln.png'

const Contact = () => {
    return (
        <>
        <h3
        className=" m-2 p-4 text-card animate__animated  animate__slideInLeft"
        id="contact"
        >
       Contact Me
      </h3>
    <img className="d-block mx-auto" src={Linkedln} alt="" width={50}/>

          </>
    )
}

export default Contact