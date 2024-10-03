import React from "react";
import "./ChatMessage.scss";

import { Avatar } from "@mui/material";

export const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="massageInfo">
        <h4>PiaSsy
          <span className="messageTimestamp">2024/11/11</span>
        </h4>

        <p>テストメッセージ</p>
      </div>
    </div>
  );
};
