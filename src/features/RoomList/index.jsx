import { EllipsisOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography, Avatar, Tooltip } from "antd";
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
        <div className="listRoom__addRoom-button">
          <Button onClick={handleAddRoom}>
            <PlusSquareOutlined /> Thêm phòng chat
          </Button>
        </div>
      
      </div>
      <div className="listRoom__main">
        <div className="listRoom__main-buttonMobile">
          <Button onClick={handleAddRoom}>
            <PlusSquareOutlined />
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
              <Tooltip title={room.name} placement="top">
                <Avatar size={50} style={{ backgroundColor: "#87d068" }}>
                  {room.name.charAt(0).toUpperCase()}
                </Avatar>
              </Tooltip>
              </div>
              <div className="listRoom__Room__content">
                <div className="listRoom__Room__content-name">{room.name}</div>
                <div className="listRoom__Room__content-description">
                  {room.description}
                </div>
              </div>
              <div className="listRoom__Room-action">
                <EllipsisOutlined />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomList;
