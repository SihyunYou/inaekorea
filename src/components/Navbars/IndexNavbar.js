import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function IndexNavbar({ isReady, fixColor = false }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(scrollTop > 399);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isReady) return null;

  const navbarBg = scrolled || fixColor ? "#f8f8f8" : "transparent";
  const logoSrc = scrolled || fixColor ? "./long-logo2.png" : "./long-logo1.png";
  const textColor = scrolled || fixColor ? "#000" : "#fff";
  const contactBg = scrolled || fixColor ? "#00A86C" : "transparent";
  const contactBorder = scrolled || fixColor ? "none" : "1px solid white";

  return (
    <Navbar
      className="fixed-top"
      style={{
        padding: scrolled || fixColor ? "1vh 0" : "2.5vh 0",
        backgroundColor: navbarBg,
        boxShadow: scrolled || fixColor ? undefined : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container fluid style={{ margin: "auto calc(5vw - 15px)" }}>
        <Nav
          navbar
          className="ml-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0.5vh 0",
          }}
        >
          {/* 로고 */}
          <NavItem style={{ cursor: "pointer" }}>
            <NavLink href="/">
              <img
                alt="logo"
                src={logoSrc}
                style={{
                  width: "calc(60px + 4.5vw)",
                  display: "block",
                  transition: "all 0.3s ease",
                }}
              />
            </NavLink>
          </NavItem>

          {/* 메뉴 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75vw",
            }}
          >
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink
                href="/program"
                style={{ textTransform: "none", borderRadius: "15px" }}
              >
                <span
                  style={{
                    fontSize: "calc(0.36rem + 0.54vw)",
                    fontWeight: "600",
                    color: textColor,
                  }}
                >
                  Program
                </span>
              </NavLink>
            </NavItem>

            <NavItem
              style={{
                cursor: "pointer",
                border: contactBorder,
                borderRadius: "15px",
                backgroundColor: contactBg,
              }}
            >
              <NavLink
                href="http://pf.kakao.com/_yUxden"
                style={{
                  textTransform: "none",
                  padding: "4px 8px",
                  borderRadius: "15px",
                }}
              >
                <span
                  style={{
                    fontSize: "calc(0.36rem + 0.54vw)",
                    fontWeight: "600",
                    color: "white",
                padding: "2px 4px",
                  }}
                >
                  Contact Us
                </span>
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
