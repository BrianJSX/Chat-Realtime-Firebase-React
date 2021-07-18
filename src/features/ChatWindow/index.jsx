import { Avatar, Button, Input, Tooltip, Form } from "antd";
import { SendOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Message from "../Message";
import { AppContext } from "../../Context/AppProvider";
import { useForm } from "antd/lib/form/Form";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../components/firebase/services";
import useFirebase from "../../hooks/useFirebase";

const ChatWindow = () => {
  //context
  const { selectRoom, members } = useContext(AppContext);
  const {
    user: { displayName, uid, photoURL },
  } = useContext(AuthContext);

  //ref
  const messagesEndRef = useRef(null);

  //state
  const [inputValue, setInputValue] = useState();
  const [form] = useForm();

  //function handle
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnSubmit = () => {
    addDocument("messages", {
      text: inputValue,
      uid,
      photoURL,
      roomId: selectRoom.id,
      displayName,
    });
    form.resetFields(["message"]);
  };
  //message condition
  const messageCondition = useMemo(() => {
    return {
      fieldName: "roomId",
      operator: "==",
      compareValue: selectRoom?.id,
    };
  }, [selectRoom?.id]);

  let messages = useFirebase("messages", messageCondition);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
                      {member.photoURL
                        ? ""
                        : member.displayName?.charAt(0)?.toUpperCase()}
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
          {messages.map((message, index) => {
            return (
              <Message
                key={index}
                text={message.text}
                photoURL={message.photoURL}
                displayName={message.displayName}
                createAt="dasddsa"
              ></Message>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat__content__form">
          <Form form={form}>
            <Form.Item name="message">
              <Input
                onChange={handleInputChange}
                onPressEnter={handleOnSubmit}
              ></Input>
            </Form.Item>
            <Button onClick={handleOnSubmit}>
              Gửi <SendOutlined />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
