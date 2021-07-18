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
          <div key={index} className="listRoom__Room" onClick={() => setSelectedRoomId(room.id)}>
            <div className="listRoom__Room-avatar">
              <Avatar size={50}>A</Avatar>
            </div>
            <div className="listRoom__Room-name">
                {room.name}
            </div>
            <div className="listRoom__Room-action">
              <EllipsisOutlined />
            </div>
          </div>
        );
      })}

      {/* {rooms.map((room, index) => {
        return (
          <Typography.Link
            onClick={() => setSelectedRoomId(room.id)}
            key={index}
            className="listRoom__item"
          >
            {room.name}
          </Typography.Link>
        );
      })} */}
    </div>
  );
}

export default RoomList;
