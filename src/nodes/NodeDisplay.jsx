import React, { useContext } from "react";
import { NodeContext } from "react-flow-builder";

const NodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? "node-configuring" : ""} ${
        node.validateStatusError ? "node-status-error" : ""
      }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

export default NodeDisplay;
