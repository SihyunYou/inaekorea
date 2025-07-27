import React from "react";

const SectionHeader = ({ mainText, subText, highlight = "로컬트립가이드" }) => {
    const highlightText = (text) => {
        if (typeof text !== "string") return text;
        // highlight 단어를 강조된 HTML로 치환
        const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 정규식 안전 처리
        const regex = new RegExp(`(${escapedHighlight})`, 'g');
        return text.replace(regex, `<strong style="color: #00A86C;">$1</strong>`);
    };

    return (
        <>
            <h4
                style={{ textAlign: "center", margin: "1vh" }}
                dangerouslySetInnerHTML={{ __html: highlightText(mainText) }}
            />
            <h6
                style={{ textAlign: "center", margin: 0, marginBottom: "1.6vh", color: "#666" }}
                dangerouslySetInnerHTML={{ __html: highlightText(subText) }}
            />
        </>
    );
};

export default SectionHeader;
