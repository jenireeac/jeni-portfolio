import React from "react";
import Avatar from "../assets/Avatar.png";
import "animate.css";
const Home = () => {
  return (
    <div className="container cards line-box">
      <div className="row">
        <div className="col-lg-6">
          <img src={Avatar} alt="Portfolio Avatar" className="img-fluid rounded-circle image-card" />
        </div>
        <div className="col-lg-6 p-4 mt-lg-5 text-lg-start">
          <h1 className="home-text">Hello there, I'm Jeni Alvarez.</h1>
          <p>I am a full stack web developer based in the United States</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
