import React, { useContext } from "react";
import { Input, Modal, Form } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { useForm } from "antd/lib/form/Form";
import { addDocument } from "../../components/firebase/services";
import { AuthContext } from "../../Context/AuthProvider";

function ModalAddRoom() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const { uid } = user;

  const [form] = useForm();

  const handleOk = () => {
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });
    setIsAddRoomVisible(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsAddRoomVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Modal
        title="Tạo phòng"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên Phòng" name="name">
            <Input placeholder="Tên Phòng"></Input>
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea placeholder="Nhập mô tả"></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalAddRoom;
