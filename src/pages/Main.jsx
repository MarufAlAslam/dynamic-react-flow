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
import CalendarNodeDisplay from "../nodes/CalendarNode";

// importing icons
import { FaUsers, FaComment, FaCalendar } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { TfiLoop } from "react-icons/tfi";

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
    addIcon: <FaComment />,
  },
  {
    type: "calendar",
    name: "Calendar",
    displayComponent: CalendarNodeDisplay,
    addIcon: <FaCalendar />,
  },
  {
    type: "condition",
    name: "Condition",
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: "branch",
    name: "Condition",
    conditionNodeType: "condition",
  },
  {
    type: "loop",
    name: "Loop",
    displayComponent: NodeDisplay,
    isLoop: true,
    configComponent: ConfigForm,
    addIcon: <TfiLoop />,
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
