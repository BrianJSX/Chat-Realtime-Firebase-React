import { EllipsisOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography, Avatar } from "antd";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppProvider";
import "./style.scss";
const { Panel } = Collapse;

function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <div className="listRoom">
      <div className="listRoom__addRoom">
        <Button onClick={handleAddRoom} className="listRoom__addRoom-button">
          <PlusSquareOutlined /> Thêm phòng chat
        </Button>
      </div>
      {rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="listRoom__Room"
            onClick={() => setSelectedRoomId(room.id)}
          >
            <div className="listRoom__Room-avatar">
              <Avatar size={50} style={{ backgroundColor: "#87d068" }}>
                {room.name.charAt(0).toUpperCase()}
              </Avatar>
            </div>
            <div className="listRoom__Room-name">{room.name}</div>
            <div className="listRoom__Room-action">
              <EllipsisOutlined />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomList;
