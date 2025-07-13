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
  const [pills, setPills] = React.useState("1");
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
          <td>&nbsp;&nbsp;&nbsp;2025</td>
          <td>
            <li>청년창업사관학교 15기 선정</li>
            <li>25년 상반기 작년도 대비 500% 성장</li>
            <li>카이스트, 백석대, 충남대 등 문화체험 수주</li>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;2024</td>
          <td>
            <li>로컬트립가이드 출시 (24.04)</li>
            <li>36개국 약 2,000여명 외국인 유학생 대상 문화체험 진행</li>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;2023</td>
          <td>
            <li>이내코리아 설립</li>
            <li>외국인-현지인 밋업 APP 프로젝트 (약 1천여명 방한여행자 대상)</li>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;2022</td>
          <td>
            <li>외국인 전용 한국문화 커뮤니티 'KFC' 운영 (3.5만명 규모)</li>
            <li>대전세종관광지원센터 우수상 3위</li>
          </td>
        </tr>
      </tbody>
    </table>
</div>

            <br /><br /><br /><br />
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title text-center">이내코리아의 팀원들</h2>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons d-flex justify-content-center flex-nowrap"
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
                        <i className="now-ui-icons location_world"></i>
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
                        <i className="now-ui-icons design_palette"></i>
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
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <i className="now-ui-icons objects_spaceship"></i>
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
                      <Col md="6" style={{ paddingRight: '25px', paddingLeft: '0' }}>
                        <img
                          alt="..."
                          className="img-raised"
                          style={{ borderRadius: '16px' }}
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                      <Col md="6" style={{ paddingLeft: '25px', paddingRight: '0' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '12px', marginBottom: '12px' }}>
                          <h2 style={{ fontWeight: '600', margin: '0' }}>유경희</h2>
                          <h4 style={{ margin: '0' }}>브랜드 디자이너</h4>
                        </div>
                        <h5>전사 데이터를 통합 및 관리하며, 운영팀의 전산화를 지원합니다.</h5>
                        <h5><strong>키워드: 효율화, 계산과학</strong></h5> 
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills4">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6" style={{ paddingRight: '25px', paddingLeft: '0' }}>
                        <img
                          alt="..."
                          className="img-raised"
                          style={{ borderRadius: '16px' }}
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                      <Col md="6" style={{ paddingLeft: '25px', paddingRight: '0' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '12px', marginBottom: '12px' }}>
                          <h2 style={{ fontWeight: '600', margin: '0' }}>유시현</h2>
                          <h4 style={{ margin: '0' }}>데이터 엔지니어</h4>
                        </div>
                        <h5>전사 데이터를 통합 및 관리하며, 운영팀의 전산화를 지원합니다.</h5>
                        <h5><strong>키워드: 효율화, 계산과학</strong></h5> 
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>

            <br /><br /><br /><br />
<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 className="title" style={{ margin: '10px' }}>이내코리아는 이렇게 일해요</h2>
    <table style={{ marginTop: '30px', width: '100%', maxWidth: '800px', marginLeft: '70px' }}>
      <tbody>
        <tr>
          <td style={{ color: '#D4D4D4', lineHeight: '3' }}>
             ●<br />
          </td>
          <td style={{ color: '#D4D4D4', lineHeight: '3' }}>
             ●<br />
          </td>
          <td style={{ color: '#D4D4D4', lineHeight: '3' }}>
             ●<br />
          </td>
        </tr>
        <tr>
          <td>
             <h3 style={{ fontWeight: '700' }}>작지만 많은 도전과<br />빠른 성장을 하는 팀</h3>
          </td>
          <td>
             <h3 style={{ fontWeight: '700' }}>자유로운<br />커뮤니케이션</h3>
          </td>
          <td>
             <h3 style={{ fontWeight: '700' }}>수평적인<br />기업 문화 추구</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h4 style={{ marginTop: '10px', color: '#444', fontWeight: '500' }}>
             - 24년 대비 500% 이상 성장<br />(25년 상반기 기준)<br />
             - 피드백 기반의 프로젝트
            </h4>
          </td>
          <td>
            <h4 style={{ marginTop: '10px', color: '#444', fontWeight: '500' }}>
             - 역할 조직을 통한<br />많은 경험 가능<br />
             - 즐거운 업무 분위기
            </h4>
          </td>
          <td>
            <h4 style={{ marginTop: '10px', color: '#444', fontWeight: '500' }}>
             - OO님 호칭 사용<br />
             - 자유로운 출근 복장<br />
             - 자유로운 연차 사용
            </h4>
          </td>
        </tr>
      </tbody>
    </table>
    <br /><br />
      <Row className="mb-3" style={{ maxWidth: '800px' }}>
        <Col md="6">
          <img
            src={require("assets/img/bg6.jpg")}
            alt="이미지 1"
            style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
          />
        </Col>
        <Col md="6">
          <img
            src={require("assets/img/bg6.jpg")}
            alt="이미지 2"
            style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Row style={{ maxWidth: '800px' }}>
        <Col>
          <img
            src={require("assets/img/bg6.jpg")}
            alt="이미지 3"
            style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
          />
        </Col>
      </Row>
</div>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default EnaeKorea;
