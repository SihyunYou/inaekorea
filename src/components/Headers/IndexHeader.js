/* eslint-disable */
import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import EventsPage from "./EventsPage.js";

function IndexHeader() {
    const pageHeader = useRef();

useEffect(() => {
    if (window.innerWidth > 991) {
        const updateScroll = () => {
            let windowScrollTop = window.pageYOffset / 3;
            if (pageHeader.current) {
                pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }
}, []);

    return (
        <>
          <EventsPage />
        </>
    );
}

export default IndexHeader;
