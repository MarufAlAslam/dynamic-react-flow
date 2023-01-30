import { Select } from "antd";
import React, { useContext } from "react";
import { NodeContext } from "react-flow-builder";

import "./nodesStyle/Nodes.css";

const SegmentNode = () => {
  const handleChange = (value) => {
    console.log(`selected ${value.value}`);
  };
  return (
    <div className="segment-node card bg-gray-100 p-5 rounded-md">
      <h3 className="bold text-xl mb-3">Segment</h3>
      <form action="">
        <Select
          className="input input-bordered"
          labelInValue
          defaultValue={{
            value: "",
            label: "Select A Segment",
          }}
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Newly Registered Users",
              label: "Newly Registered Users - 400",
            },
            {
              value: "New Gym Members",
              label: "New Gym Members - 200",
            },
          ]}
        />
      </form>
    </div>
  );
};

export default SegmentNode;
