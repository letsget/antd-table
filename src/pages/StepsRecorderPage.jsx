import React, { useState, useEffect } from "react";
import TrainingForm from "../components/TrainingForm";
import TrainingTable from "../components/Table";
import { nanoid } from "nanoid";
import styled from "styled-components";
import moment from "moment";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TableForm = styled.div`
  max-width: 700px;
  margin: 100px auto;
`;

const StepsRecorderPage = () => {
  const [tableData, setTableData] = useState([
    {
      key: "0",
      date: "20-04-2006",
      hours: "34",
      assigned: "Artem Katz",
    },
    {
      key: "1",
      date: "20-04-2012",
      hours: "27",
      assigned: "Basrov Konstantin",
    },
    {
      key: "2",
      date: "20-04-2008",
      hours: "14",
      assigned: "Frostov Kirill",
    },
  ]);

  const [selectOptions, setSelectOptions] = useState([
    "Bazrov Konstantin",
    "Artem Katz",
    "Kirill Frostov",
    "Sergey Mochalov",
    "David Getz",
  ]);

  const fetchSelectOptions = async () => {
    try {
      const options = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((options) => options.json());
      setSelectOptions([
        ...selectOptions,
        ...options.map((option) => option.name),
      ]);
    } catch (e) {
      console.log("an error occured");
    }
  };

  useEffect(() => {
    fetchSelectOptions();
  }, []);

  const handleDelete = (key) => {
    const updatedData = tableData.filter((item) => item.key !== key);
    setTableData(updatedData);
  };

  const handleSave = (row) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });

    setTableData(newData);
  };

  const handleAdd = ({ hours, trainingDate, selectOption }) => {
    setTableData([
      ...tableData,
      {
        key: nanoid(),
        date: moment(trainingDate).format("DD-MM-YYYY"),
        hours: hours,
        assigned: selectOption,
        delete: (
          <Button type="primary">
            <DeleteOutlined />
          </Button>
        ),
      },
    ]);
  };

  return (
    <TableForm>
      <TrainingForm onAdd={handleAdd} options={selectOptions} />
      <TrainingTable
        data={tableData}
        onDelete={handleDelete}
        onSave={handleSave}
        onAdd={handleAdd}
      />
    </TableForm>
  );
};

export default StepsRecorderPage;
