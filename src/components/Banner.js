import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = toRotate[loopNum];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(300 - Math.random() * 100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setText("");
      setIsDeleting(false);
      if (loopNum === 2) {
        setLoopNum(0);
      } else {
        setLoopNum(loopNum + 1);
      }
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Protfolio</span>
            <h1>
              {`Hi i'm webcoded  `}
              <span className="wrap">{text}|</span>
            </h1>
            <p>i have learned codeing, so i want to ~~~~~~~</p>
            <button onClick={() => console.log("hi")}>
              Let's connect
              <FontAwesomeIcon className="faArrow" icon={faArrowRight} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/header-img.svg"
              alt="hadder"
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
