"use client";

import { useState } from "react";
import "./MessagesPage.css";

const MessagesPage = () => {
  const [selectedContact, setSelectedContact] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Darlene Robertson",
      role: "Head of Development",
      avatar:
        "https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg",
      lastMessage: "10 mins",
      isOnline: true,
      unreadCount: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Albert Flores",
      content:
        "How likely are you to recommend our company to your friends and family?",
      time: "10 mins",
      isOwn: false,
      avatar:
        "https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg",
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="messages-page">
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Header */}
          <div className="col-12 messages-header">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="messages-title">Messages</h2>
                <p className="messages-subtitle">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row messages-content">
          {/* Contacts List */}
          <div className="col-md-4 contacts-panel">
            <div className="search-container2">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="contacts-list">
              {contacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className={`contact-item ${
                    selectedContact === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedContact(index)}
                >
                  <div className="contact-avatar-container">
                    <img
                      src={contact.avatar || "/placeholder.svg"}
                      alt={contact.name}
                      className="contact-avatar"
                    />
                    {contact.isOnline && (
                      <div className="online-indicator"></div>
                    )}
                  </div>
                  <div className="contact-info">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-role">{contact.role}</div>
                  </div>
                  <div className="contact-meta">
                    <div className="contact-time">{contact.lastMessage}</div>
                    {contact.unreadCount > 0 && (
                      <div className="unread-badge">{contact.unreadCount}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-md-8 chat-panel">
            <div className="chat-header">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"
                  alt="Arlene McCoy"
                  className="chat-avatar"
                />
                <div className="ms-3">
                  <div className="chat-contact-name">Arlene McCoy</div>
                  <div className="chat-contact-status">Active</div>
                </div>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.isOwn ? "message-own" : "message-other"
                  }`}
                >
                  {!message.isOwn && (
                    <img
                      src={message.avatar || "/placeholder.svg"}
                      alt={message.sender}
                      className="message-avatar"
                    />
                  )}
                  <div className="message-content">
                    <div className="message-bubble">{message.content}</div>
                    <div className="message-time">
                      {message.time} {message.isOwn && "You"}
                    </div>
                  </div>
                  {message.isOwn && (
                    <img
                      src={message.avatar || "/placeholder.svg"}
                      alt="You"
                      className="message-avatar"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="chat-input-container">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control chat-input"
                  placeholder="Type a Message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <div className="mx-3">
                <button
                  className="btn btn-primary send-button"
                  onClick={handleSendMessage}
                >
                  Send Message
                  <i className="fas fa-arrow-right ms-2"></i>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
