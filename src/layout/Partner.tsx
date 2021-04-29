import React, { FC } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar, Badge, Button, Menu, Dropdown } from "antd";

import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

import KHLogo from "../images/KindParnter-Portal-Logo.svg";
import LoremLogo from "../images/loremLogo.png";
import Manage from "./Manage";
import CustomizeMarketPlace from "../pages/CustomizeMarketPlace";
import Settings from "./Settings";

const settingsMenu = (
  <Menu style={{ textAlign: "right" }}>
    <Menu.Item key="0">
      <Link to="/customize-marketplace">Customize Marketplace</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/settings/welcome-message">Edit Welcome Message</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/settings/manage-accounts">Manage Accounts</Link>
    </Menu.Item>
  </Menu>
);

const profileMenu = (
  <Menu style={{ textAlign: "right" }}>
    <Menu.Item key="0">
      <Link to="/customize-marketplace">View My Marketplace</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/settings/my-account">My Account</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <span>Sign Out</span>
    </Menu.Item>
  </Menu>
);

const Partner: FC = () => (
  <PartnerLayout>
    <PartnerLayoutTopBar>
      <PartnerLayoutTopBarLeft>
        <Link to="/">
          <img src={KHLogo} alt="LoremLogo" height="60px" />
        </Link>
      </PartnerLayoutTopBarLeft>
      <PartnerLayoutTopBarCenter>
        <img src={LoremLogo} alt="LoremLogo" height="50px" />
      </PartnerLayoutTopBarCenter>
      <PartnerLayoutTopBarRight>
        <Button
          style={{ margin: "0 .45rem" }}
          type="link"
          icon={
            <Badge dot>
              <BellOutlined style={{ fontSize: "24px" }} />
            </Badge>
          }
          shape="circle"
        />
        <Button
          style={{ margin: "0 .45rem" }}
          type="link"
          icon={
            <Dropdown overlay={settingsMenu} trigger={["click"]}>
              <SettingOutlined style={{ fontSize: "24px" }} />
            </Dropdown>
          }
          shape="circle"
        />
        <Button
          style={{ margin: "0 .45rem" }}
          type="link"
          icon={
            <Dropdown overlay={profileMenu} trigger={["click"]}>
              <Avatar
                style={{ color: "#f56a00", backgroundColor: "#ffffff" }}
                icon={<UserOutlined />}
                size="small"
              />
            </Dropdown>
          }
          shape="circle"
        />
      </PartnerLayoutTopBarRight>
    </PartnerLayoutTopBar>
    <PartnerLayoutBody>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/manage/leads" />;
          }}
        ></Route>
        <Route path="/manage/:tab?">
          <Manage />
        </Route>
        <Route path="/customize-marketplace">
          <CustomizeMarketPlace />
        </Route>
        <Route path="/settings/:tab?">
          <Settings />
        </Route>
      </Switch>
    </PartnerLayoutBody>
  </PartnerLayout>
);

export default Partner;

const PartnerLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const PartnerLayoutTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 75px;
  border-bottom: 1px solid #bebebe;
`;

const PartnerLayoutTopBarLeft = styled.div``;

const PartnerLayoutTopBarCenter = styled.div``;

const PartnerLayoutTopBarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PartnerLayoutBody = styled.div`
  min-height: calc(100vh - 95px);
  overflow: auto;
  .ant-tabs-content-holder {
    padding: 0 1.5rem 1rem;
  }

  .tabbed-content {
    padding: 0rem 1rem;
    min-height: calc(100vh - 200px);
    box-shadow: 0 1px 28px rgba(0, 0, 0, 0.25), 0 1px 28px rgba(0, 0, 0, 0.14);
  }

  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    overflow: unset;
  }
  .ant-tabs-nav {
    margin: 0;
    padding: 1rem 1.5rem 0;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    background: #ff198b;
    &:before {
      position: absolute;
      bottom: -20%;
      left: 40%;
      content: "";
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #ff198b;
    }
  }

  .ant-tabs-tab {
    font-weight: 600;
  }
`;
