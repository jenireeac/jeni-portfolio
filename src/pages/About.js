import React from "react";
import Me from "../assets/me.jpg.jpg";

const About = () => {
  return (
    <div className="m-2 p-4" id="about">
      <h3 className="text-card animate__animated  animate__slideInLeft">
        About Me
      </h3>
      <img
        className="img-fluid rounded mx-auto d-block m-5"
        src={Me}
        alt="Selfie of Jeni ALvarez"
        width={400}
      />
      <div className="about-text">
        <p>
          Hi! I am Jeniree, born and raised in Venezuela but currently living in
          the United States for about 7 years now. Learning a new culture, new
          people and a completely new language has made me grow as a person. I
          have always been passionate about computers and new technologies. A
          few months ago I decided to do the big jump and study full stack web
          development.
        </p>
        <p>
          I am now a full stack web developer certificate focused in: React.js,
          Node.js, CSS3, Bootstrap, HTML5, APIs and Javascript
        </p>
        <p>
          Few of my hobbies are spending time with my pets, friends and family.
        </p>
        <p>
          <em>
            “All our dreams can come true, if we have the courage to pursue
            them.” -Walt Disney
          </em>
        </p>
      </div>
    </div>
  );
};

export default About;
