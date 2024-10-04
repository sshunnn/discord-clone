import React from "react";
import "./ChatMessage.scss";
import { Timestamp } from "firebase/firestore";

import { Avatar } from "@mui/material";

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photoUrl: string;
    email: string;
    displayName: string;
  };
};
export const ChatMessage = (props: Props) => {
  const { message, timestamp, user } = props;

  return (
    <div className="message">
      <Avatar src={user?.photoUrl} />
      <div className="massageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};
