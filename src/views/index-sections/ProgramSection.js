import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { generateGreenGradient } from "../utils/Color.js";

const greenColors = generateGreenGradient(3);

export default function ProgramSection() {
  return (
    <Container>
      <Row className="justify-content-center" style={{ padding: '0' }}>
        {/* 문화 체험 프로그램 */}
        <Col md="7" className="mb-4" style={{ padding: '5px' }}>
          <Card className="h-100 shadow-sm" style={{ backgroundColor: greenColors[0], borderRadius: "50px" }}>
            <CardBody className="text-center">
              <div className="mt-3">
                <span style={{ fontSize: "1.5rem", color: "green" }}>✔</span>
              </div>
              <h5>문화 체험 프로그램</h5>
              <p style={{ letterSpacing: '-0.5px' }}>
                로컬 컨텐츠를 활용한 다양하고 자유도 높은 프로그램 라인
              </p>
              <Row className="mt-4">
                <Col md="4" xs="12" className="mb-3">
                  <img
                    src="logo.jpg"
                    alt="전통문화"
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">전통문화 문화체험</p>
                </Col>
                <Col md="4" xs="12" className="mb-3">
                  <img
                    src="logo.jpg"
                    alt="액티비티"
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">액티비티 문화체험</p>
                </Col>
                <Col md="4" xs="12" className="mb-3">
                  <img
                    src="logo.jpg"
                    alt="템플스테이"
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">템플스테이 문화체험</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        {/* 직무 체험 프로그램 */}
        <Col md="5" className="mb-4" style={{ padding: '5px' }}>
          <Card className="h-100 shadow-sm" style={{ backgroundColor: greenColors[1], borderRadius: "50px" }}>
            <CardBody className="text-center">
              <div className="mt-3">
                <span style={{ fontSize: "1.5rem", color: "green" }}>✔</span>
              </div>
              <h5>직무 체험 프로그램</h5>
              <p style={{ letterSpacing: '-0.5px' }}>
                한국 취업에 도움이 되는 다양한 컨셉의 직무체험
              </p>
              <Row className="mt-4">
                <Col md="6" xs="12" className="mb-3">
                  <img
                    src="logo.jpg"
                    alt="네트워킹"
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">취창업 네트워킹 캠프</p>
                </Col>
                <Col md="6" xs="12" className="mb-3">
                  <img
                    src="logo.jpg"
                    alt="교육 프로그램"
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">취창업 교육 프로그램</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
<a
  href="/program"
  style={{
    position: "absolute",
    bottom: "-50px",
    right: "10px",
    color: "#444",
    textDecoration: "none",
    border: '2px solid #444',
    padding: '6px 10px',
    borderRadius: '15px',
    animation: "scaleFloat 2s ease-in-out infinite",
  }}
>
  <p><strong>더 보기 &gt;</strong></p>
</a>

<style>
{`
  @keyframes scaleFloat {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
`}
</style>
        </Col>
      </Row>
    </Container>
  );
}
