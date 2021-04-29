import { MoreOutlined } from "@ant-design/icons";
import { Button, Pagination, Table } from "antd";
import React, { FC } from "react";
import dataSource from "../leads_data.json";

// const dataSource = [
//   {
//     key: "1",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street",
//   },
//   {
//     key: "2",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street",
//   },
// ];

const columns = [
  {
    title: "First Name",
    dataIndex: "first_name",
    // key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    // key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    // key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    // key: "phone",
  },
  {
    title: "Date Added",
    dataIndex: "date_created",
    // key: "date_created",
  },
  {
    title: "Status",
    dataIndex: "status",
    // key: "status",
  },
  {
    title: "",
    dataIndex: "more_options",
    // key: "more options",
    width: 70,
    render: () => (
      <Button
        style={{ margin: "0 .45rem" }}
        type="link"
        icon={<MoreOutlined />}
        shape="circle"
      />
    ),
  },
];

const ManageLeads: FC = () => (
  <>
    <div className="tabbed-content">
      <h1>All Leads</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 500 }}
        pagination={false}
      />
    </div>
    <Pagination onChange={() => console.log("cliky")} total={50} />
  </>
);

export default ManageLeads;
