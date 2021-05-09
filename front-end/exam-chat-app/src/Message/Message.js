import "./Message.css";

const Message = ({ text, username, self }) => {
  return (
    <div className={"message" + (self ? " message-self" : "")}>
      <div className="message-username">{username}</div>
      <div className="message-text">{text}</div>
    </div>
  );
};

export default Message;
