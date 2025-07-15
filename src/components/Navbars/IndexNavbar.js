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
        <Nav navbar className="ml-auto" style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', margin: '0', marginTop: '5px' }}>
          <NavItem style={{ cursor: 'pointer' }}>
            <NavLink href="/">
<img
  alt="..."
  src={require("assets/img/logo-localtripguide.png")}
  style={{
    width: 'calc(84px + 2vw)',
    display: 'block'       
  }}
/>
</NavLink>
          </NavItem>
<div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
          <NavItem style={{ cursor: 'pointer' }}>
            <NavLink href="/">
              <span style={{ fontSize: 'calc(0.6rem + 0.3vw)', fontWeight: '600' }}>이내코리아</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              href="mailto:enae.korea@gmail.com"
              id="email-tooltip"
              style={{
                width: "48px",
                height: "48px",
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
              style={{ marginTop: '-3px' }}
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
