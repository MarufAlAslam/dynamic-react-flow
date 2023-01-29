import React, { useState, useContext } from "react";
import FlowBuilder, { NodeContext } from "react-flow-builder";
import ConfigForm from "./ConfigForm";
import "../styles/style.css";
const StartNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};
const EndNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};
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
const ConditionNodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${
        node.configuring ? "node-configuring" : ""
      } ${node.validateStatusError ? "node-status-error" : ""}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};
const registerNodes = [
  {
    type: "start",
    name: "Start",
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: "end",
    name: "End",
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: "node",
    name: "Common Node",
    displayComponent: NodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: "condition",
    name: "Condition Node",
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: "branch",
    name: "Branch",
    conditionNodeType: "condition",
  },
  {
    type: "loop",
    name: "Loop",
    displayComponent: NodeDisplay,
    isLoop: true,
  },
];
const defaultNodes = [];
const Main = () => {
  const [nodes, setNodes] = useState(defaultNodes);
  const handleChange = (nodes) => {
    console.log("nodes change", nodes);
    setNodes(nodes);
  };
  return (
    <>
      <FlowBuilder
        nodes={nodes}
        onChange={handleChange}
        registerNodes={registerNodes}
        historyTool
        zoomTool
      />
    </>
  );
};

export default Main;
