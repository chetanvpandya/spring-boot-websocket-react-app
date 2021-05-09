import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ client, username }) => {
  const [message, setMessage] = useState({});

  const sendMessage = () => {
    client.sendMessage("/topic/message", JSON.stringify(message));
    setMessage({});
  };

  const handleChange = (event) => {
    setMessage({ text: event.target.value, username });
  };

  return (
    <div className="textbar">
      <input
        className="textbar-input"
        type="text"
        value={message.text || ""}
        onChange={handleChange}
      />
      <button className="textbar-send" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
