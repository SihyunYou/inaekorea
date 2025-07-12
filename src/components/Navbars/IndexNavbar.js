import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return () => window.removeEventListener("scroll", updateNavbarColor);
  }, []);

  return (
    <Navbar className={"fixed-top " + navbarColor} color="info">
      <Container>
        <Nav navbar className="ml-auto" style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', margin: '0', marginRight: '-20px' }}>
<p>로컬트립가이드</p>
<div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
          <NavItem>
            <NavLink
              id="phone-tooltip"
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fas fa-phone" style={{ fontSize: "13px" }}></i>
            </NavLink>
            <UncontrolledTooltip target="#phone-tooltip">
              대표 전화번호
              <br />
              010-2315-3979
            </UncontrolledTooltip>
          </NavItem>

          <NavItem>
            <NavLink
              href="mailto:enae.korea@gmail.com"
              id="email-tooltip"
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="far fa-envelope" style={{ fontSize: "15px" }}></i>
            </NavLink>
            <UncontrolledTooltip target="#email-tooltip">
              이메일
              <br />
              enae.korea@gmail.com
            </UncontrolledTooltip>
          </NavItem>

          <NavItem>
            <NavLink
              href="https://www.instagram.com/localtripguide.official"
              target="_blank"
              id="instagram-tooltip"
            >
              <i className="fab fa-instagram" style={{ fontSize: "16px" }}></i>
            </NavLink>
            <UncontrolledTooltip target="#instagram-tooltip">
              인스타그램
              <br />
              localtripguide.official
            </UncontrolledTooltip>
          </NavItem>
</div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
