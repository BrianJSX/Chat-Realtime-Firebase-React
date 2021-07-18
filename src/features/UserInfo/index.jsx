import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
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
        <Tooltip title={displayName} placement="top">
          <Avatar src={photoURL}>
            {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
          </Avatar>
        </Tooltip>
        <div className="userInfo__displayName">
          <Typography style={{ color: "#000", marginLeft: "1rem" }}>
            {displayName}
          </Typography>
        </div>
      </div>
      <div className="userInfo__actionMobile">
        <Button onClick={() => auth.signOut()} type="danger">
          <LogoutOutlined style={{lineHeight: 0}} />
        </Button>
      </div>
      <div className="userInfo__action">
        <Button onClick={() => auth.signOut()} type="danger">
          Đăng xuất
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
