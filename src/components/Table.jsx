import React from "react";
import "antd/dist/antd.css";
import { Table, Popconfirm } from "antd";
import EditableRow from "./EditableRow";
import EditableCell from "./EditableCell";
import moment from "moment";
import { DeleteOutlined } from "@ant-design/icons";

const TrainingTable = ({ data, onDelete, onSave }) => {
  const columns = [
    {
      title: "date",
      dataIndex: "date",
      sorter: ({ date: first }, { date: second }) => {
        return (
          moment(first, "DD-MM-YYYY").unix() -
          moment(second, "DD-MM-YYYY").unix()
        );
      },
      width: "20%",
      editable: true,
    },
    {
      title: "hours",
      dataIndex: "hours",
      sorter: (a, b) => a.hours - b.hours,
      width: "10%",
      editable: true,
    },
    {
      title: "assigned to",
      dataIndex: "assigned",
      width: "30%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: "5%",
      align: "center",
      render: (text, record) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onDelete(record.key)}
          >
            <DeleteOutlined style={{ color: "#d11a2a", fontSize: "1.1rem" }} />
          </Popconfirm>
        ) : null,
    },
  ];

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const tableColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: onSave,
      }),
    };
  });

  return (
    <Table
      pagination={{ hideOnSinglePage: true }}
      components={components}
      rowClassName={() => "editable-row"}
      bordered
      dataSource={data}
      columns={tableColumns}
    />
  );
};

export default TrainingTable;
