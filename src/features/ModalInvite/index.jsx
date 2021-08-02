import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { Form, Select, Button, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { debounce } from "lodash";
import { db } from "../../components/firebase/config";
import { useEffect } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { Height } from "@material-ui/icons";

const fetchUser = (keyword) => {
  const userref = db
    .collection("users")
    .where("displayName", "==", keyword)
    .get();
  return userref;
};

function ModalInvite({ isAddRoomVisible, setIsModalVisible }) {
  const [form] = useForm();
  const [dataOption, setDataOption] = useState();
  const [loading, setLoading] = useState(false);
  let variableTimeOut = "";

  const { Option } = Select;

  const handleOk = () => {
    console.log(...form.getFieldsValue());
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
              labelInValue
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
