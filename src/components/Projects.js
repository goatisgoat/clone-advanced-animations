import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl:
      "https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img1.png?raw=true",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl:
      "https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img2.png?raw=true",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl:
      "https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img3.png?raw=true",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl:
      "https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img1.png?raw=true",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl:
      "https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img2.png?raw=true",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl:
      "https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img3.png?raw=true",
  },
];

const Projects = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>data ~~~~~ dummy text ~~~~</p>
            <Tab.Container id="projects=tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">yu jin</Tab.Pane>
              <Tab.Pane eventKey="third">yu jin</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src="https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/color-sharp2.png?raw=true"
      ></img>
    </section>
  );
};

export default Projects;
