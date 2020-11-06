import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Button, Popconfirm } from "antd";
import EditableRow from "./EditableRow";
import EditableCell from "./EditableCell";

const TrainingTable = ({ data, onDelete, onSave }) => {
  const columns = [
    {
      title: "date",
      dataIndex: "date",
      width: "30%",
      editable: true,
    },
    {
      title: "hours",
      dataIndex: "hours",
      width: "20%",
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
      width: "20%",
      render: (text, record) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => (onDelete = record.key)}
          >
            <a>Delete</a>
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
