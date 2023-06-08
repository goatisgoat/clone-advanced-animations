import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>skills</h2>
              <p>here's data</p>
              <Carousel responsive={responsive} infinite={true} className="skills-slider">
                <div className="item">
                  <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/meter1.svg" alt="skills"></img>
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/meter2.svg" alt="skills"></img>
                  <h5>Web Designer</h5>
                </div>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/meter3.svg" alt="skills"></img>
                  <h5>UI/UX Designer</h5>
                </div>
              </Carousel>
              
            </div>
          </Col>
        </Row>
      </Container>
      <img src="https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/color-sharp.png?raw=true" alt="skills-background" className="skills-background"/>
    </section>
  );
};

export default Skills;
