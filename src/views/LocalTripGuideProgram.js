import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import BlogSection2 from "./index-sections/BlogSection2.js";
import Spacer from "./utils/Spacer.js";
import DarkFooter from "components/Footers/DarkFooter.js";

export default function LocalTripGuideProgram({ isReady=true }) {
    return (
        <>
            <Helmet>
                <title>로컬트립가이드</title>
                <meta
                    name="description"
                    content="문화체험부터 직무체험까지 대학교 맞춤형 통합 솔루션, 로컬트립가이드가 완성합니다."
                />
                <meta property="og:title" content="로컬트립가이드" />
                <meta
                    property="og:description"
                    content="문화체험부터 직무체험까지 대학교 맞춤형 통합 솔루션, 로컬트립가이드가 완성합니다."
                />
                <meta property="og:image" content="/logo.jpg" />
            </Helmet>

            <div className={`fade-wrapper ${isReady ? "fade-in" : ""}`}>
                <div className="fade-content" style={{ backgroundColor: '#f8f8f8' }}>
                    <IndexNavbar isReady={isReady} fixColor={true} />
<Spacer count={8} />
                    <div className="wrapper">
<h5 style={{ textAlign: 'center' }}>
    로컬트립가이드의 <strong style={{ color: "#00A86A" }}>문화/직무체험</strong>
    <br />
    프로그램들을 소개합니다
</h5>
<Spacer />
<BlogSection2 />
<Spacer count={8} />
                    </div>
                </div>
            </div>
            <DarkFooter />
        </>
    );
}
