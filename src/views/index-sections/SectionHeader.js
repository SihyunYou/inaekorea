import React from "react";

const SectionHeader = ({ mainText, subText, highlight = "로컬트립가이드" }) => {
    return (
        <>
            <h5
                style={{ textAlign: "center", margin: "1vh" }}
                dangerouslySetInnerHTML={{ __html: mainText }}
            />
            <h6
                style={{ textAlign: "center", margin: 0, marginBottom: "1.6vh", color: "#666" }}
                dangerouslySetInnerHTML={{ __html: subText }}
            />
        </>
    );
};

export default SectionHeader;
