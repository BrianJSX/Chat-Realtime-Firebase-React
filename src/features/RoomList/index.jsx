import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { db } from "../../components/firebase/config";
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
      <Collapse
        defaultActiveKey={["1"]}
        style={{ width: "100%", color: "#fff" }}
      >
        <Panel header="Danh sách các phòng" key="1">
          {rooms.map((room, index) => {
            return (
              <Typography.Link
                onClick={() => setSelectedRoomId(room.id)}
                key={index}
                className="listRoom__item"
              >
                {room.name}
              </Typography.Link>
            );
          })}
        </Panel>
      </Collapse>
    </div>
  );
}

export default RoomList;
