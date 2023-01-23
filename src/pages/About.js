import React from "react";
import Me from "../assets/me.jpg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      <h3 className=" m-2 p-4 text-card " id="about">
        About Me
      </h3>
      <Container className="body-card line-box">
        <Row>
          <Col className="cards">
            <div className="about-text">
              <p>
                Born and raised in Venezuela but currently living in the United
                States since 2016. Learning a new culture, new people and a
                completely new language has made me grow as a person. I have
                always been passionate about computers and new technologies. A
                few months ago I decided to do the big jump and study full stack
                web development.
              </p>
              <p>
                I am now a full stack web developer certificate focused in:
                React.js, Node.js, CSS3, Bootstrap, HTML5, APIs and Javascript
              </p>
              <p>
                Few of my hobbies are spending time with my pets, friends and
                family.
              </p>
            </div>
          </Col>
          <Col className="">
            <img
              className=" selfie-card rounded mx-auto d-block m-5"
              src={Me}
              alt="Selfie of Jeni ALvarez"
              width={400}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
