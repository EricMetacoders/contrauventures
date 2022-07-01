import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";

import "./headerDropDown.css";
import { Link } from "react-router-dom";

export default function HeaderDropDown() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <BiMenu color="black" size={40} />
      </Button>
      <Modal
        title={<BiMenu />}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col items-start space-y-5">
          <Link to="/">
            {" "}
            <p className="popinsFont text-[1rem] font-extrabold">Home</p>
          </Link>
          <p className="popinsFont text-[1rem] ">About Us</p>
          <p className="popinsFont text-[1rem] ">Portfolio</p>
          <Link to="/story">
            {" "}
            <p className="popinsFont text-[1rem] ">Story</p>
          </Link>
        </div>
      </Modal>
    </>
  );
}
