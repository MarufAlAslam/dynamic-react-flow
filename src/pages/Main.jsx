import React, { useState } from "react";
import FlowBuilder from "react-flow-builder";
import ConfigForm from "./ConfigForm";
import "../styles/style.css";

// importing nodes
import StartNodeDisplay from "../nodes/StartNode";
import TestNodeDisplay from "../nodes/TestNode";
import NodeDisplay from "../nodes/NodeDisplay";
import EndNodeDisplay from "../nodes/EndNode";
import ConditionNodeDisplay from "../nodes/ConditionNode";

const registerNodes = [
  {
    type: "start",
    name: "Start",
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: "test",
    name: "Testing",
    displayComponent: TestNodeDisplay,
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
