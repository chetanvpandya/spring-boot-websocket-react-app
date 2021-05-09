import React from "react";
import Message from "../Message/Message";
import "./Chats.css";

const Chats = ({ messages, username }) => {
  return (
    <div className="chats">
      {messages.map((message, i) => {
        return (
          <Message
            key={i}
            text={message.text}
            username={message.username}
            self={username === message.username}
          />
        );
      })}
    </div>
  );
};

export default Chats;
