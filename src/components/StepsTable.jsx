import React, { useState } from "react";
import { Table } from "antd";
import moment from "moment";

const StepsTable = ({ data }) => {
  const [sortedInfo, setSortedInfo] = useState(null);

  const handleChange = (sorter) => {
    setSortedInfo(sorter);
  };

  /*
    If you know the format of an input string, you can use that to parse a moment.
    moment("12-25-1995", "MM-DD-YYYY");
   */
  const columns = [
    {
      title: "date",
      dataIndex: "date",
      key: "date",
      sorter: ({ date: first }, { date: second }) => {
        return (
          moment(first, "DD-MM-YYYY").unix() -
          moment(second, "DD-MM-YYYY").unix()
        );
      },
      ellipsis: true,
    },
    {
      title: "steps",
      dataIndex: "steps",
      key: "steps",
      sorter: (a, b) => a.steps - b.steps,
      ellipsis: true,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      ellipsis: true,
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      ellipsis: true,
    },
  ];
  return (
    <>
      <Table
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default StepsTable;
