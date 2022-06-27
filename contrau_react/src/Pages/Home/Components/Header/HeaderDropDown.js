import React from "react";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderDropDown() {
  const menu = (
    <Menu
      items={[
        {
          label: <p className="popinsFont font-bold">HOME</p>,
          key: "0",
        },
        {
          label: <p className="popinsFont">About us</p>,
          key: "1",
        },
        {
          label: <p className="popinsFont">Porfolio</p>,
          key: "3",
        },
        {
          label: <p className="popinsFont">Story</p>,
          key: "4",
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <GiHamburgerMenu size={40} color="black" />
        </Space>
      </a>
    </Dropdown>
  );
}
