import TextArea from "antd/es/input/TextArea";
import React from "react";

const MessageNode = () => {
  const handleChange = (value) => {
    console.log(`message ${value.value}`);
  };
  return (
    <div className="message-node card bg-gray-100 p-5 rounded-md">
      <h3 className="bold text-xl mb-3">Write Message</h3>
      <form action="">
        <TextArea
          onChange={handleChange}
          rows={4}
          placeholder="Write Your Message"
        />
      </form>
    </div>
  );
};

export default MessageNode;
