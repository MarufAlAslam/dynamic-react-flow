import React, { useContext } from "react";
import { NodeContext } from "react-flow-builder";

import "./nodesStyle/Nodes.css";

const TestNode = () => {
  const node = useContext(NodeContext);
  return (
    <div className="test-node">
      <input
        type="text"
        className="input w-full border-none"
        placeholder="Input Anything..."
        name=""
        id=""
      />
    </div>
  );
};

export default TestNode;
