import React from "react";
import kakaotalkIcon from "assets/img/kakaotalk.png";
import "./KakaoChatButton.css"; // 아래 CSS 참고

export default function KakaoChatButton() {
  const kakaoUrl = "http://pf.kakao.com/_yUxden";

  const onClickHandler = () => {
    window.open(kakaoUrl, "_blank");
  };

  return (
    <div className="kakao-chat-container">
      <div className="kakao-label">카카오톡<br />채널상담</div>
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
