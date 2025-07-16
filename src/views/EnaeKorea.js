import React, { useState, useEffect } from "react";

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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

const col1Data = [
  '●',
  <h5>작지만 많은 도전과<br />빠른 성장을 하는 팀</h5>,
  <p>- 24년 대비 500% 이상 성장 (25년 상반기 기준)<br />- 피드백 기반의 프로젝트</p>
];

const col2Data = [
  '●',
  <h5>자유로운<br />커뮤니케이션</h5>,
  <p>- 역할 조직을 통한<br />많은 경험 가능<br />- 즐거운 업무 분위기</p>
];

const col3Data = [
  '●',
  <h5>수평적인<br />기업 문화 추구</h5>,
  <p>- OO님 호칭 사용<br />- 자유로운 출근 복장<br />- 자유로운 연차 사용</p>
];

function ResponsiveTable({ breakpoint = 768 }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  if (isMobile) {
    return (
      <div style={{ width: '100%', maxWidth: 800, marginTop: 30, whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
        {/* 1열 전체 내용: 한 행 (세로로 붙임) */}
        <div style={{ backgroundColor: 'black', color: 'white', padding: 10, marginBottom: 10, textAlign: 'left' }}>
          {col1Data.map((item, idx) => (
            <div key={idx} style={{ lineHeight: 1.8, paddingBottom: '0.8em' }}>
              {item}
            </div>
          ))}
        </div>

        {/* 2열, 3열 내용 한 행에 반반 */}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, backgroundColor: 'black', color: 'white', padding: 10, textAlign: 'left' }}>
            {col2Data.map((item, idx) => (
              <div key={idx} style={{ lineHeight: 1.8, paddingBottom: '0.8em' }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, backgroundColor: 'black', color: 'white', padding: 10, textAlign: 'left' }}>
            {col3Data.map((item, idx) => (
              <div key={idx} style={{ lineHeight: 1.8, paddingBottom: '0.8em' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // PC/table 버전
  return (
    <table style={{ marginTop: 30, width: '100%', maxWidth: 800 }}>
      <tbody>
        <tr>
          <td style={{ width: '40%', textAlign: 'left', color: '#D4D4D4', lineHeight: '3' }}>●<br /></td>
          <td style={{ textAlign: 'left', color: '#D4D4D4', lineHeight: '3' }}>●<br /></td>
          <td style={{ textAlign: 'left', color: '#D4D4D4', lineHeight: '3' }}>●<br /></td>
        </tr>
        <tr>
          <td style={{ width: '40%' }}>
            <h5 style={{ textAlign: 'left', color: 'white' }}>작지만 많은 도전과<br />빠른 성장을 하는 팀</h5>
          </td>
          <td>
            <h5 style={{ textAlign: 'left', color: 'white' }}>자유로운<br />커뮤니케이션</h5>
          </td>
          <td>
            <h5 style={{ textAlign: 'left', color: 'white' }}>수평적인<br />기업 문화 추구</h5>
          </td>
        </tr>
        <tr>
          <td style={{ width: '40%' }}>
            <p style={{ marginTop: 10, color: 'white', textAlign: 'left', paddingRight: '2vw' }}>
              - 24년 대비 500% 이상 성장 (25년 상반기 기준)<br />
              - 피드백 기반의 프로젝트
            </p>
          </td>
          <td>
            <p style={{ marginTop: 10, color: 'white', textAlign: 'left', paddingRight: '2vw' }}>
              - 역할 조직을 통한<br />많은 경험 가능<br />
              - 즐거운 업무 분위기
            </p>
          </td>
          <td>
            <p style={{ marginTop: 10, color: 'white', textAlign: 'left' }}>
              - OO님 호칭 사용<br />
              - 자유로운 출근 복장<br />
              - 자유로운 연차 사용
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function MemberSection({ member, isEven }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 초기값 보장
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const TextCol = (
        <Col
            md="6"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    gap: '12px',
                    marginBottom: '12px',
                    justifyContent: isMobile ? 'flex-start' : (isEven ? 'flex-end' : 'flex-start')
                }}
            >
                <h5 style={{ margin: '0' }}>{member.name}</h5>
                <h6 style={{ margin: '0' }}>{member.position}</h6>
            </div>
            <p style={{ textAlign: isMobile ? 'left' : (isEven ? 'right' : 'left') }}>
                {member.description}
            </p>
            <h6 style={{ textAlign: isMobile ? 'left' : (isEven ? 'right' : 'left') }}>
                키워드: {member.keywords}
            </h6>
        </Col>
    );

    const ImageCol = (
        <Col
            md="6"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <img
                alt={member.name}
                className="img-raised"
                style={{ borderRadius: '16px' }}
                src={member.image}
            />
        </Col>
    );

    return (
        <Col className="ml-auto mr-auto" md="11">
            <Row className="collections">
                {isMobile ? (
                    <>
                        {ImageCol}
                        {TextCol}
                    </>
                ) : isEven ? (
                    <>
                        {TextCol}
                        {ImageCol}
                    </>
                ) : (
                    <>
                        {ImageCol}
                        {TextCol}
                    </>
                )}
            </Row>
        </Col>
    );
}

function EnaeKorea() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 초기값 보장
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  const members = [
    {
      name: "임성준",
      position: "대표",
      description: "전사 데이터를 통합 및 관리하며, 운영팀의 전산화를 지원합니다.",
      keywords: "효율화, 계산과학",
      image: require("assets/img/bg6.jpg")
    },
    {
      name: "이샛별",
      position: "서비스 MD",
      description: "전사 데이터를 통합 및 관리하며, 운영팀의 전산화를 지원합니다.",
      keywords: "효율화, 계산과학",
      image: require("assets/img/bg6.jpg")
    },
    {
      name: "유경희",
      position: "브랜드 디자이너",
      description: "전사 데이터를 통합 및 관리하며, 운영팀의 전산화를 지원합니다.",
      keywords: "효율화, 계산과학",
      image: require("assets/img/bg6.jpg")
    },
    {
      name: "김상현",
      position: "프로덕트 매니저",
      description: "더 나은 이내코리아의 서비스를 만들기 위해 노력합니다.",
      keywords: "소통, 협력",
      image: require("assets/img/bg6.jpg")
    },
    {
      name: "유시현",
      position: "프로덕트 개발자",
      description: "From Local to International, 이내코리아의 미래를 IT 솔루션화로 이끌어 나갑니다.",
      keywords: "효율화, 계산과학",
      image: require("assets/img/bg6.jpg")
    }
  ];

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
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section" style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', textAlign: 'center', backgroundColor: "#01225b" }}>
          <Container>
            <div style={{ marginTop: '5vw' }} />
            <div style={{ backgroundColor: 'white', padding: '80px 5vw' }}>
              <h2 className="custom-underline" style={{ textAlign: 'left', marginBottom: '2.5vh' }}>소개</h2>
              <h3 style={{ textAlign: 'center', margin: '0', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>( <strong style={{ color: "#17623c", fontWeight: '800' }}>즐겁게 일하는</strong> ) 팀 스피릿</h3>
              <h4 style={{ textAlign: 'center', marginTop: '50px', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>"우리는 문화로 놀고, 데이터로 일하는 팀입니다."</h4>
              <h6 style={{ color: "#777", textAlign: 'center', marginTop: '30px', lineHeight: '1.5', width: '90%', margin: '0 5%', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                이내코리아의 주력 솔루션인 <strong style={{ color: "#17623c", fontWeight: '800' }}>로컬트립가이드</strong>는 외국인 유학생이 한국에서 더 풍부한 경험을 하도록 지역 콘텐츠, 여행, 그리고 사람을 연결하는 일을 합니다.
              </h6>
              <h6 style={{ margin: '30px', color: "#777", textAlign: 'center', lineHeight: '1.5', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                늘 즐겁게 일하고, 진심으로 커뮤니티와 사회에 기여할 수 있는 솔루션을 고민하는 사람들이 모여 있습니다.
              </h6>
            <br /><br /><br /><br />
            <h2 className="custom-underline" style={{ textAlign: 'left', marginBottom: '2.5vh' }}>우리의 미션</h2>
            <h5 style={{ marginTop: '30px', lineHeight: '1.6' }}>
              BE Playful.<br />
              BE Professional.<br />
              BE Proud.
            </h5>
            </div>
            <div style={{ backgroundColor: 'black', padding: '80px 5vw' }}>
            <h2 className="custom-underline" style={{ textAlign: 'left', margin: '10px', color: 'white' }}>이내가 걸어온 길</h2>
<table className="modern-table" style={{ marginTop: '30px', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
  <tbody>
    <tr>
      <td>&nbsp;&nbsp;&nbsp;2025</td>
      <td style={{ textAlign: 'left' }}>
        <p style={{ marginTop: '15px' }}>• 청년창업사관학교 15기 선정</p>
        <p>• 25년 상반기 작년도 대비 500% 성장</p>
        <p>• 카이스트, 백석대, 충남대 등 문화체험 수주</p>
      </td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;&nbsp;2024</td>
      <td style={{ textAlign: 'left' }}>
        <p style={{ marginTop: '15px' }}>• 로컬트립가이드 출시 (24.04)</p>
        <p>• 36개국 약 2,000여명 외국인 유학생 대상 문화체험 진행</p>
      </td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;&nbsp;2023</td>
      <td style={{ textAlign: 'left' }}>
        <p style={{ marginTop: '15px' }}>• 이내코리아 설립</p>
        <p>• 외국인-현지인 밋업 APP 프로젝트 (1천여명 방한 여행자)</p>
      </td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;&nbsp;2022</td>
      <td style={{ textAlign: 'left' }}>
        <p style={{ marginTop: '15px' }}>• 외국인 전용 한국문화 커뮤니티 'KFC' 운영 (3.5만명 규모)</p>
        <p>• 대전세종관광지원센터 우수상 3위</p>
      </td>
    </tr>
  </tbody>
</table>

</div>
            <div style={{ backgroundColor: 'white', padding: '80px 5vw' }}>
             <h2 className="custom-underline" style={{ textAlign: 'left', marginBottom: '2.5vh' }}>이내의 팀원들</h2>
            <Row style={{ whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                {members.map((member, index) => (
                  <React.Fragment key={member.name}>
                    <MemberSection member={member} isEven={index % 2 === 1} />
                    {index < members.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </TabContent>
            </Row>
           </div>
            <div style={{ backgroundColor: 'black', padding: '80px 5vw' }}>
<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 className="custom-underline" style={{ width: '100%', textAlign: 'left', color: 'white' }}>이내코리아는 이렇게 일해요</h2>
<ResponsiveTable />
</div>
 <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5vh' }}>
      <Row className="mb-3" style={{ maxWidth: '800px' }}>
        <Col md="6" xs ="6">
          <img
            src={require("assets/img/enae1.jpg")}
            style={{ width: "100%", height: '100%', borderRadius: "12px", objectFit: "cover" }}
          />
        </Col>
        <Col md="6" xs ="6">
          <img
            src={require("assets/img/enae2.jpg")}
            style={{ width: "100%", height: '100%', borderRadius: "12px", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Row style={{ maxWidth: '800px' }}>
        <Col md="12" xs ="12">
          <img
            src={require("assets/img/enae3.jpg")}
            style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
          />
        </Col>
      </Row>
</div>
        <br /><br />        <br /><br />
          <h6 style={{ color: 'white', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>무한히 뻗어나갈 이내코리아에 많은 관심 부탁드립니다!</h6>
</div>
          </Container>
            <div style={{ marginTop: '5vw' }} />
</div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default EnaeKorea;