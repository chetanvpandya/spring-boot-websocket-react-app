import React from "react";
import MessageList from "../Chats/Chats";
import TextBar from "../MessageInput/MessageInput";

const Homepage = ({ messages, client, username }) => {
  return (
    <>
      <MessageList messages={messages} username={username} />
      <TextBar client={client} username={username} />
    </>
  );
};

export default Homepage;
