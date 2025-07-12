/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h3 style={{ fontSize: 'calc(16px + 0.6vw)' }}>대학교 <strong style={{ fontSize: 'calc(17px + 0.7vw)' }}>국제교류처</strong>를 위한<br />외국인 유학생 <strong style={{ fontSize: 'calc(17px + 0.7vw)' }}>문화체험</strong> 통합 솔루션</h3>
            <img
              alt="..."
              style={{ width: '68%', marginTop: '-10px' }}
              src={require("assets/img/logo-localtripguide.png")}
            ></img>
          </div>
          <h6 className="category category-absolute">
             © 2025 이내코리아
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
