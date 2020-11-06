import React from "react";
import { Button, Space, DatePicker, Form, InputNumber, Select } from "antd";
import styled from "styled-components";
import { nanoid } from "nanoid";

const dateFormat = "DD/MM/YYYY";

const TrainingFormStyles = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const TrainingForm = ({ options, onAdd }) => {
  const [form] = Form.useForm();

  const { Option } = Select;

  const onFinish = (formFields) => {
    onAdd(formFields);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <TrainingFormStyles>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Space>
          <Form.Item
            name="trainingDate"
            rules={[{ required: true, message: "Please enter a valid date" }]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item
            name="hours"
            rules={[{ required: true, message: "Please enter hours" }]}
          >
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item
            name="selectOption"
            rules={[{ required: true, message: "Please assign someone" }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {options &&
                options.map((name) => (
                  <Option key={nanoid()} value={name}>
                    {name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </TrainingFormStyles>
  );
};

export default TrainingForm;
