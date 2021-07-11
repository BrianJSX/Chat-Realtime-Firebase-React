import { Avatar, Button, Input, Tooltip, Form } from "antd";
import { SendOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";
import React from "react";
import Message from "../Message";

const ChatWindow = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header__left">
          <div className="chat__header__left-name">Room 1</div>
          <div className="chat__header__left-description">Đây là Room 1</div>
        </div>
        <div className="chat__header__right">
          <div className="chat__header__right-add">
            <Button style={{ marginRight: "20px" }}>
              <UserAddOutlined /> Mời
            </Button>
          </div>
          <div className="chat__header__right-member">
            <Avatar.Group
              maxCount={2}
              maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            >
              <Tooltip title="A" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
            </Avatar.Group>
          </div>
        </div>
      </div>
      <div className="chat__content">
        <div className="chat__content__message">
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
        </div>
        <div className="chat__content__form">
          <Form>
            <Form.Item>
              <Input></Input>
            </Form.Item>
            <Button>Gửi <SendOutlined /></Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
