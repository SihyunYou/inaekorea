import React from "react";
import channeltalkIcon from "assets/img/channeltalk.png"; // 채널톡 아이콘 경로
import "./ChannelTalkButton.css";

export default function ChannelTalkButton() {
  const onClickHandler = () => {
    window.open("https://e9j7p.channel.io", "_blank");
  };

  return (
    <div className="channel-chat-container">
      <div className="channel-label">채널톡 상담하기</div>
      <button
        className="channel-button"
        onClick={onClickHandler}
        aria-label="채널톡 상담"
      >
        <img src={channeltalkIcon} alt="채널톡" className="channel-icon" />
      </button>
    </div>
  );
}
