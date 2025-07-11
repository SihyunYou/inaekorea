import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Button,
  Row,
  Col
} from "reactstrap";

function LocalTripGuideIntro() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <div className="main">
      <div className="section section-nucleo-icons">
      <Container>
<Row>
            <Col lg="6" md="12" style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="title" style={{ fontSize: 'calc(18px + 0.6vw)' }}><strong>로컬트립가이드</strong>로,<br />문화연수 기획의 고민을 해결해드립니다.</h3>
<ul className="description" style={{ fontSize: 'calc(12px + 0.5vw)', listStyle: 'none', paddingLeft: 0, lineHeight: '1.6' }}>
<li>
  <i className="fas fa-check" style={{ color: "#D4D4D4", marginRight: "8px" }}></i>
  <span style={{ textDecoration: 'line-through' }}>
    프로그램 단순 기획 및 운영
  </span>
</li>
  <li><i className="fas fa-check" style={{ color: "#17a2b8", marginRight: "8px" }}></i>대학교의 니즈에 맞는 맞춤형 프로그램 기획</li>
  <li><i className="fas fa-check" style={{ color: "#17a2b8", marginRight: "8px" }}></i>전문 운영팀 배치를 통한 안정된 프로그램 운영</li>
  <li><i className="fas fa-check" style={{ color: "#17a2b8", marginRight: "8px" }}></i>신속하고 세심한 운영 결과 보고서 제공</li>
  <li style={{ color: "#2c2c2c", fontWeight: '500', marginTop: '10px' }}><i className="fas fa-arrow-right" style={{ color: "#2c2c2c", marginRight: "8px" }}></i><strong>로컬트립가이드</strong>로, 대학교의 니즈와<br />&nbsp;&nbsp;&nbsp;&nbsp;유학생의 만족도를 동시에 해결할 수 있습니다.</li>
</ul>
            </Col>
            <Col lg="6" md="12">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png")}
                ></img>
            </Col>
</Row>
    </Container>
      </div>
      <br /><br />
      <br /><br />
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '700', textAlign: 'center' }}>우리가 달성한 성과들</h2>
      <Container>
      <Row>
        <Col xs="12" md="4">
          <div className="box-no-border">
            <img src={require("assets/img/fruit1.png")} style={{ width: '180px' }} />
            <h1 style={{ fontWeight: '900', marginTop: '10px', marginBottom: '0' }}>20+</h1>
            <h4><strong>여행 프로그램 (지역수)</strong></h4>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="box-no-border">
            <img src={require("assets/img/fruit2.png")} style={{ width: '180px' }} />
            <h1 style={{ fontWeight: '900', marginTop: '10px', marginBottom: '0' }}>25+</h1>
            <h4><strong>참여 학생 국적</strong></h4>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="box-no-border">
            <img src={require("assets/img/fruit3.png")} style={{ width: '180px' }} />
            <h1 style={{ fontWeight: '900', marginTop: '10px', marginBottom: '0' }}>1100+</h1>
            <h4><strong>참여 외국인 학생</strong></h4>
          </div>
        </Col>
      </Row>
    </Container>
        </div>
      </div>
    </>
  );
}

export default LocalTripGuideIntro;
