import React, { useState } from "react";
import FlowBuilder from "react-flow-builder";
import ConfigForm from "./ConfigForm";
import "../styles/style.css";

// importing nodes
import StartNodeDisplay from "../nodes/StartNode";
import NodeDisplay from "../nodes/NodeDisplay";
import EndNodeDisplay from "../nodes/EndNode";
import ConditionNodeDisplay from "../nodes/ConditionNode";
import SegmentNodeDisplay from "../nodes/SegmentNode";
import DelayNodeDisplay from "../nodes/DelayNode";
import MessageNodeDisplay from "../nodes/MessageNode";

// importing icons
import { FaUsers } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

const registerNodes = [
  {
    type: "start",
    name: "Start",
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: "segment",
    name: "Segment",
    displayComponent: SegmentNodeDisplay,
    addIcon: <FaUsers />,
  },
  {
    type: "delay",
    name: "Delay",
    displayComponent: DelayNodeDisplay,
    addIcon: <BsClockHistory />,
  },
  {
    type: "message",
    name: "Message",
    displayComponent: MessageNodeDisplay,
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
  {
    type: "end",
    name: "End",
    displayComponent: EndNodeDisplay,
    isEnd: true,
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
