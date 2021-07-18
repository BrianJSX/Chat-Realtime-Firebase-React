import Avatar from "antd/lib/avatar/avatar";
import { formatRelative } from "date-fns/esm";
import React from "react";
import "./style.scss";

const formatDate = (seconds) => { 
  let formatDate = "";
  if(seconds) {
    formatDate = formatRelative(new Date(seconds * 1000), new Date());
  }
  return formatDate;
}

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
        <div className="message__header__createAt">{formatDate(createAt?.seconds)}</div>
      </div>
      <div className="message__content">{text}</div>
    </div>
  );
};

export default Message;
