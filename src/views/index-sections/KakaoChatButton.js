import React from "react";
import kakaotalkIcon from "assets/img/kakaotalk.png";
import "./KakaoChatButton.css"; // 아래 CSS 참고

export default function KakaoChatButton() {
  const kakaoUrl = "https://pf.kakao.com/_yourchatlink";

  const onClickHandler = () => {
    window.open(kakaoUrl, "_blank");
  };

  return (
    <div className="kakao-chat-container">
      <div className="kakao-label">카카오톡 상담하기</div>
      <button
        className="kakao-button"
        onClick={onClickHandler}
        aria-label="카카오톡 상담"
      >
        <img src={kakaotalkIcon} alt="카카오톡" className="kakao-icon" />
      </button>
    </div>
  );
}
