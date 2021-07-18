import { Avatar, Button, Input, Tooltip, Form } from "antd";
import { SendOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";
import React, { useContext, useMemo } from "react";
import Message from "../Message";
import { AppContext } from "../../Context/AppProvider";

const ChatWindow = () => {
  const { selectRoom, members } = useContext(AppContext);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header__left">
          <div className="chat__header__left-name">{selectRoom?.name}</div>
          <div className="chat__header__left-description">
            {selectRoom?.description}
          </div>
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
              {members.map((member) => {
                return (
                  <Tooltip title={member.displayName} placement="top">
                    <Avatar src={member.photoURL}>
                      {member.photoURL ? "" : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                );
              })}
            </Avatar.Group>
          </div>
        </div>
      </div>
      <div className="chat__content">
        <div className="chat__content__message">
          <Message></Message>
          <Message></Message>
        </div>
        <div className="chat__content__form">
          <Form>
            <Form.Item>
              <Input></Input>
            </Form.Item>
            <Button>
              Gửi <SendOutlined />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
