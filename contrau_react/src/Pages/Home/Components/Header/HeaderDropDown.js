import React, { useState } from "react";
import mobileMenu from "../../../../assets/homepage_img/mobile_menu.png";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";

import "./headerDropDown.css";
import { Link } from "react-router-dom";

export default function HeaderDropDown({ resultRef, partnersRef }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleScroll = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollPartners = () => {
    partnersRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
      <Button
        type="primary"
        onClick={showModal}
        style={{
          border: "none !important",
        }}
      >
        <img src={mobileMenu} alt="menu" />
      </Button>
      <Modal
        width={`50%`}
        title={<img src={mobileMenu} alt="menu" />}
        style={{ top: 0, right: `-50%` }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col items-start space-y-5">
          <Link to="/">
            {" "}
            <p className="text-black popinsFont text-[1rem] font-extrabold">
              Home
            </p>
          </Link>
          <p
            className="text-black popinsFont text-[1rem] "
            onClick={handleScrollPartners}
          >
            About Us
          </p>
          <p
            className="text-black popinsFont text-[1rem] "
            onClick={handleScroll}
          >
            Portfolios
          </p>
          <Link to="/story">
            <p className="text-black popinsFont text-[1rem] ">Story</p>
          </Link>
        </div>
      </Modal>
    </>
  );
}
