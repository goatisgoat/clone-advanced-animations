import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NaviBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onscroll)
//  window.removeEventListener('scroll', onscroll)
    //componentWillUnmount와 같은 효과
    // useEffect에서 return 의 의미는 저 useEffect가 실행되기 전에 return 안에 있는 함수를 실행시켜달라 라는 의미
    return () => console.log('ddddddd')
  }, []);

  const activeValue = (value) => {
    setActiveLink(value)
  }
  return (
    <div>

    
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home" className="">
          <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/logo.svg" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => activeValue('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => activeValue('Skills')} >Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => activeValue('Projects')} >Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/nav-icon1.svg" alt="" />
              </a>
              <a href="#">
                <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/nav-icon2.svg" alt="" />
              </a>
              <a href="#">
                <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/6bf5a12767154a7383288450bb441d04f7c0dce9/personal-portfolio/src/assets/img/nav-icon3.svg" alt="" />
              </a>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NaviBar;
