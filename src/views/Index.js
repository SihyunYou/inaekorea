import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import { Button, Container, Row, Col } from "reactstrap";

function Index() {
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
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="title">이내코리아</h2>
              <h5 className="description">
                여행의 본질을 제공합니다.<br />
                여행의 본질을 제공합니다.<br />
                여행의 본질을 제공합니다.<br />
                여행의 본질을 제공합니다.<br />
              </h5>
<div className="flex-align">
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                둘러보기
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                체험하기
              </Button>
              </div>
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

        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
