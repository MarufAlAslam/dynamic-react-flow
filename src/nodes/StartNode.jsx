import React, { useContext } from "react";
import { NodeContext } from "react-flow-builder";

const StartNode = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

export default StartNode;
