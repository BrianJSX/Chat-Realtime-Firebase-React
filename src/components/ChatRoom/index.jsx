import React from "react";
import { Row, Col } from "antd";
import SideBar from "../../features/SideBar";
import ChatWindow from "../../features/ChatWindow";
import "./style.scss";

function ChatRoom() {
  return (
    <div className="chatRoom">
      <Row>
        <Col className="chatRoom__sideBar" span={6}>
          <SideBar></SideBar>
        </Col>
        <Col className="chatRoom__chatWindow" span={18}>
          <ChatWindow></ChatWindow>
        </Col>
      </Row>
    </div>
  );
}

export default ChatRoom;
