import React, { useState } from "react";
import SockJsClient from "react-stomp";
import Homepage from "./Homepage/Homepage";

const SOCKET_URL = "http://localhost:8080/ws-message";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");

  let onConnected = () => {
    console.log("Connected!!");
  };

  const onMessageReceived = (receivedMessage) => {
    setMessages([...messages, receivedMessage]);
  };

  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const onLogin = () => {
    setUsername(usernameInput);
  };

  const chatProps = {
    messages,
    client,
    username,
  };

  return (
    <>
      <div>
        <SockJsClient
          url={SOCKET_URL}
          topics={["/topic/message"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => onMessageReceived(msg)}
          ref={(client) => setClient(client)}
          debug={false}
        />
      </div>

      {username === "" ? (
        <>
          <input type="text" onChange={handleUsernameChange} />
          <button onClick={onLogin}>Login</button>
        </>
      ) : (
        <Homepage {...chatProps} />
      )}
    </>
  );
};

export default App;
