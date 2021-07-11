import React from 'react'
import {Row, Col} from 'antd';
import SideBar from '../../features/SideBar';
import ChatWindow from '../../features/ChatWindow';

function ChatRoom() {
    return (
        <div>
            <Row>
                <Col span={6}>
                    <SideBar></SideBar>
                </Col>
                <Col span={18}>
                    <ChatWindow></ChatWindow>
                </Col>
            </Row>
        </div>
    )
}

export default ChatRoom

