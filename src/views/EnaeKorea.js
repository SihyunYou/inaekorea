import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function EnaeKorea() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
<a href="/">
  <img
    alt="..."
    className="img-raised"
    src={require("assets/img/bg1.jpg")}
  />
</a>
              </Button>
            </div>
            <h2 className="title" style={{ margin: '10px' }}>소개</h2>
            <h3 className="title" style={{ fontWeight: '500', margin: '10px' }}>"우리는 문화로 놀고, 데이터로 일하는 팀입니다."</h3>
            <h4 className="description" style={{ color: "#777" }}>
              이내코리아의 주력 솔루션인 <strong style={{ fontWeight: '800' }}>로컬트립가이드</strong>는 외국인 유학생이 한국에서<br />더 풍부한 경험을 하도록 지역 콘텐츠, 여행, 그리고 사람을 연결하는 일을 합니다.
            </h4>
            <h4 className="description" style={{ margin: '10px', color: "#777" }}>
              늘 즐겁게 일하고, 진심으로 커뮤니티와 사회에<br />기여할 수 있는 솔루션을 고민하는 사람들이 모여 있습니다.  
            </h4>

            <br /><br /><br /><br />
            <div>
            <h2 className="title" style={{ margin: '10px' }}>우리의 미션</h2>
            <h3 className="title" style={{ fontWeight: '800', margin: '10px' }}>
              BE Playful.<br />
              BE Professional.<br />
              BE Proud.
            </h3>
            </div>

            <br /><br /><br /><br />
<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 className="title" style={{ margin: '10px' }}>히스토리</h2>
    <table className="modern-table" style={{ marginTop: '30px' }}>
      <tbody>
        <tr>
          <td>2025</td>
          <td>홍길동</td>
        </tr>
        <tr>
          <td>2024</td>
          <td>hong@example.com</td>
        </tr>
        <tr>
          <td>2023</td>
          <td>대한민국</td>
        </tr>
        <tr>
          <td>2022</td>
          <td>승인됨</td>
        </tr>
      </tbody>
    </table>
</div>

            <br /><br /><br /><br />
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title text-center">팀원</h2>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default EnaeKorea;
