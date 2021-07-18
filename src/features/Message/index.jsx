import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./style.scss";

const Message = ({ text, displayName, createAt, photoURL }) => {
  return (
    <div className="message">
      <div className="message__header">
        <div className="message__header__avatar">
          <Avatar src={photoURL}>
            {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        <div className="message__header__name">{displayName}</div>
        <div className="message__header__createAt">{createAt}</div>
      </div>
      <div className="message__content">{text}</div>
    </div>
  );
};

export default Message;
