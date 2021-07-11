import React from "react";
import UserInfo from "../UserInfo";
import RoomList from "../RoomList";
import "./style.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <UserInfo></UserInfo>
        <RoomList></RoomList>
      </div>
    </div>
  );
}

export default SideBar;
