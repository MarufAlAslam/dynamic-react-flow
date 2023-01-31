import { Input, Select } from "antd";
import React from "react";
import "./nodesStyle/Nodes.css";

const DelayNode = () => {
  const handleChange = (value) => {
    console.log(`delay ${value.value}`);
  };
  const selectAfter = (
    <Select defaultValue="ms">
      <Option value="ms">ms</Option>
      <Option value="s">s</Option>
      <Option value="m">m</Option>
      <Option value="h">h</Option>
      <Option value="d">d</Option>
    </Select>
  );
  return (
    <div className="segment-node card bg-gray-100 p-5 rounded-md">
      <h3 className="bold text-xl mb-3">Delay Amount</h3>
      <form action="">
        <Input
          onChange={handleChange}
          addonAfter={selectAfter}
          defaultValue="0"
        />
      </form>
    </div>
  );
};

export default DelayNode;
