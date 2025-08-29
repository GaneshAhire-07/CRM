import React, { useState, useRef, useEffect } from "react";
import "./ChatWindow.css";
import { IoClose, IoSend } from "react-icons/io5";
import { staffMembers, initialMessages } from "../data/dummyData"; // Dummy data import kara

const ChatWindow = ({ currentUser, onClose }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  // When a new user is selected, scroll to the latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, selectedUser]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedUser) return;

    const messagePayload = {
      id: Date.now(),
      senderId: currentUser.id,
      receiverId: selectedUser.id,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Add new message to the state
    setMessages([...messages, messagePayload]);
    setNewMessage("");
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const getChatHistory = () => {
    if (!selectedUser) return [];
    return messages.filter(
      (msg) =>
        (msg.senderId === currentUser.id &&
          msg.receiverId === selectedUser.id) ||
        (msg.senderId === selectedUser.id && msg.receiverId === currentUser.id)
    );
  };

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">
        <h3>Chats</h3>
        <button onClick={onClose} className="chat-close-btn">
          <IoClose />
        </button>
      </div>

      <div className="chat-body">
        {/* User List (Left Panel) */}
        <div className="user-list">
          {staffMembers
            .filter((user) => user.id !== currentUser.id) // Current user list madhe nako
            .map((user) => (
              <div
                key={user.id}
                className={`user-item ${
                  selectedUser?.id === user.id ? "active" : ""
                }`}
                onClick={() => handleUserSelect(user)}
              >
                <img src={user.image} alt={user.name} className="user-avatar" />
                <div className="user-details">
                  <span className="user-name">{user.name}</span>
                  <span
                    className={`status-dot ${
                      user.online ? "online" : "offline"
                    }`}
                  ></span>
                </div>
              </div>
            ))}
        </div>

        {/* Chat Area (Right Panel) */}
        <div className="chat-area">
          {selectedUser ? (
            <>
              {/* Chat Messages */}
              <div className="messages-container">
                {getChatHistory().map((msg) => (
                  <div
                    key={msg.id}
                    className={`message-bubble ${
                      msg.senderId === currentUser.id ? "sent" : "received"
                    }`}
                  >
                    <div className="message-text">{msg.text}</div>
                    <div className="message-time">{msg.timestamp}</div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Message Input */}
              <div className="message-input-container">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="message-input"
                />
                <button onClick={handleSendMessage} className="send-btn">
                  <IoSend />
                </button>
              </div>
            </>
          ) : (
            <div className="no-chat-selected">
              <p>Select a staff member to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
