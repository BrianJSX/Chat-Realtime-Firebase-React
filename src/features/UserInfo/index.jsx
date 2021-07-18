import { UserOutlined } from "@ant-design/icons";
import { Button, Tooltip, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./style.scss";
import { auth } from "../../components/firebase/config";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function UserInfo() {
  const data = useContext(AuthContext);
  const { displayName, photoURL } = data.user;

  return (
    <div className="userInfo">
      <div className="userInfo__avatar">
        <Tooltip title="A" placement="top">
          <Avatar src={photoURL}>
            {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
          </Avatar>
        </Tooltip>
        <Typography style={{ color: "#000", marginLeft: '1rem' }}>{displayName}</Typography>
      </div>
      <div className="userInfo__action">
        <Button onClick={() => auth.signOut()} type="primary">
          Đăng Xuất
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
