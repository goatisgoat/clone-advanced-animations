import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: 'https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img1.png?raw=true',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: 'https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img2.png?raw=true',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: 'https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img3.png?raw=true',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: 'https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img1.png?raw=true',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: 'https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img2.png?raw=true',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: 'https://github.com/judygab/web-dev-projects/blob/main/personal-portfolio/src/assets/img/project-img3.png?raw=true',
  },
];

const Projects = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>data ~~~~~ dummy text ~~~~</p>
              <Tab.Container id='projects=tabs' defaultActiveKey='first'>
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey='first'>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
