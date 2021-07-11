import { UserOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./style.scss";
import {auth} from '../../components/firebase/config';

function UserInfo() {
  return (
    <div className="userInfo">
      <div className="userInfo__avatar">
        <Tooltip title="A" placement="top">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Tooltip>
      </div>
      <div className="userInfo__action">
        <Button onClick={() => auth.signOut()} type="primary">Đăng Xuất</Button>
      </div>
    </div>
  );
}

export default UserInfo;
