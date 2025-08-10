import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function IndexNavbar({ isReady }) {
  if (!isReady) return null;

  return (
    <Navbar style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    boxShadow: 'none',
    padding: '0'
  }}>
      <Container fluid style={{ margin: 'auto calc(7vw - 10px)', padding: '0' }}>
        <Nav
          navbar
          className="ml-auto"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-between',
            marginTop: '3.5vh'
          }}
        >
          <NavItem style={{ cursor: 'pointer' }}>
            <NavLink href="/">
              <img
                alt="..."
                src={require("assets/img/logo-localtripguide.png")}
                style={{
                  width: 'calc(64px + 3.2vw)',
                  display: 'block'
                }}
              />
            </NavLink>
          </NavItem>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'center',
            gap: '0.75vw'
          }}>
            <NavItem style={{ cursor: 'pointer' }}>
              <NavLink href="/program" style={{ textTransform: 'none', borderRadius: '15px' }}>
                <span style={{
                  fontSize: 'calc(0.5rem + 0.25vw)',
                  fontWeight: '600'
                }}>
                  Program
                </span>
              </NavLink>
            </NavItem>

            <NavItem style={{ cursor: 'pointer' }}>
              <NavLink href="/aboutus" style={{ textTransform: 'none', borderRadius: '15px' }}>
                <span style={{
                  fontSize: 'calc(0.5rem + 0.25vw)',
                  fontWeight: '600'
                }}>
                  About Us
                </span>
              </NavLink>
            </NavItem>

            <NavItem style={{ cursor: 'pointer', border: '1px solid white', borderRadius: '15px' }}>
              <NavLink href="/contactus" style={{ textTransform: 'none', padding: '4px 8px', borderRadius: '15px' }}>
                <span style={{
                  fontSize: 'calc(0.5rem + 0.25vw)',
                  fontWeight: '600'
                }}>
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
