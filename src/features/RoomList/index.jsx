import React from "react";
import "./style.scss";
import { Button, Collapse, Typography } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function RoomList() {
  return (
    <div className="listRoom">
       <div className="listRoom__addRoom">
        <Button className="listRoom__addRoom-button">
          <PlusSquareOutlined /> Thêm phòng chat
        </Button>
      </div>
      <Collapse defaultActiveKey={["1"]} style={{ width: "100%", color: '#fff' }}>
        <Panel header="Danh sách các phòng" key="1">
          <Typography.Link className="listRoom__item">Room 1</Typography.Link>
          <Typography.Link className="listRoom__item">Room 2</Typography.Link>
          <Typography.Link className="listRoom__item">Room 3</Typography.Link>
        </Panel>
      </Collapse>
     
    </div>
  );
}

export default RoomList;
