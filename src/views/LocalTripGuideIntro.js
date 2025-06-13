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

function LocalTripGuideNavbar() {
  const navigate = useNavigate();
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('/index')}>
            <i className="now-ui-icons objects_spaceship mr-2"></i>
            <span style={{ fontSize: '15px' }}>메인 페이지</span>
          </div>

            <Nav navbar style={{ display: 'flex', flexDirection: 'row', margin: '0' }}>
              <NavItem>
                <NavLink to="/local-trip-guide/intro" tag={Link}>
                  <span style={{ fontSize: '15px' }}>소개</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/local-trip-guide/process" tag={Link}>
                  <span style={{ fontSize: '15px' }}>진행 절차</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/local-trip-guide/consult" tag={Link}>
                  <span style={{ fontSize: '15px' }}>상담 받기</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

function LocalGuideTripIntroHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
<h3 className="title" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', margin: '8px', padding: '0' }}>
  외국인 학생 대상 문화체험연수 프로그램
</h3>
<h1 className="title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '8px', padding: '0' }}>
  대학교 국제교류처를 위한<br />가장 최고의 선택지
</h1>
<h4 className="title" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', margin: '8px', padding: '0' }}>
  대학 맞춤형 기획부터 결과 데이터 가공까지
</h4>
            <div className="text-center">
              <Button
                className="btn-round"
                color="info"
                href="#pablo"
                size="lg"
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: '18px', fontWeight: '800' }}
              >
                상담 받기
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

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
      <LocalTripGuideNavbar />
      <div className="wrapper">
        <LocalGuideTripIntroHeader />
        <div className="main">
      <div className="section section-nucleo-icons">
      <br /><br />
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '700', textAlign: 'center' }}>오직 국제교류처와<br />외국인 학생들을 위한 솔루션</h2>
      <br />
      <Container>
      <Row>
        <Col md="6" lg="3">
          <div className="box">
            <h5>저희 <strong>상황에 맞춰 기획</strong>을 해주셔서 너무 편했습니다.</h5>
            <span>N대학교 대외협력처 담당자</span>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="box">
            <h5><strong>운영팀 덕분</strong>에 저도 여행하는 기분이 들었어요.</h5>
            <span>S대학교 유학생지원팀 담당자</span>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="box">
            <h5>각종 <strong>데이터나 장표를 제공</strong>해주셔서 보고서 작성에 너무 도움이 되었어요!</h5>
            <span>H대학교 유학생지원팀 담당자</span>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="box">
            <h5><strong>정말 여행하는 느낌</strong>을 받을 수 있는 프로그램이라 더 재밌었어요.</h5>
            <span>S대학교 참여 유학생</span>
          </div>
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
        <DarkFooter />
      </div>
    </>
  );
}

export default LocalTripGuideIntro;
