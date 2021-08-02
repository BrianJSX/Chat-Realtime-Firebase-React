import { Form, Select, Spin } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useForm } from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";
import React, { useContext, useState } from "react";
import { db } from "../../components/firebase/config";
import { AppContext } from "../../Context/AppProvider";

const fetchUser = (keyword) => {
  const userref = db
    .collection("users")
    .where("displayName", "==", keyword)
    .get();
  return userref;
};

function ModalInvite({ isAddRoomVisible, setIsModalVisible }) {
  const [dataOption, setDataOption] = useState();
  const [loading, setLoading] = useState(false);
  const [form] = useForm();
  const { selectRoom } = useContext(AppContext);


  let variableTimeOut = "";

  const { Option } = Select;

  const handleOk = () => {
    const roomRef = db.collection("rooms").doc(selectRoom?.id);
    roomRef.update({
      members: [...selectRoom.members, ...form.getFieldsValue().memberInvite]
    });
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    clearTimeout(variableTimeOut);
    setLoading(true);
    variableTimeOut = setTimeout(() => {
      fetchUser(e.target.value).then((snapshot) => {
        const document = snapshot.docs.map((doc) => {
          return {
            label: `${doc.data().displayName}`,
            value: doc.data().uid,
            photoURL: doc.data().photoURL,
          };
        });
        setDataOption(document);
        setLoading(false);
      });
    }, 1000);
  };

  return (
    <div>
      <Form form={form} layout="vertical" onChange={handleChange}>
        <Modal
          title="Thêm thành viên chat"
          visible={isAddRoomVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form.Item
            name="memberInvite"
            label="Thành viên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên thành viên",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              filterOption={false}
              notFoundContent={loading ? <Spin size="small" /> : null}
              placeholder="Vui lòng nhập tên bạn muốn thêm"
            >
              {dataOption?.map((data, index) => {
                return (
                  <Option key={index} value={data.value}>
                    <Avatar size="small" src={data.photoURL}>
                      {data.photoURL
                        ? data.photoURL
                        : data.label?.charAt(0).toUpperCase()}
                    </Avatar>{" "}
                    {data.label}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Modal>
      </Form>
    </div>
  );
}

export default ModalInvite;
