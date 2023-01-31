import { DatePicker } from "antd";
import React from "react";

const CalendarNode = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="calendar-node card bg-gray-100 p-5 rounded-md">
      <div className="card-body p-4">
        <h3 className="bold text-xl mb-3">Pick a Date</h3>
        <DatePicker className="w-full" onChange={onChange} />
      </div>
    </div>
  );
};

export default CalendarNode;
