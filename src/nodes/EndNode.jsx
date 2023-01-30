import React, { useContext } from "react";
import { NodeContext } from "react-flow-builder";

const EndNode = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

export default EndNode;
