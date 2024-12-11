import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true); // State to toggle chatbot visibility

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");

      // Simulating a chatbot reply
      setTimeout(() => {
        const botReply = "I'm a bot, not a genie, but I’ll try my best! 😜";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, sender: "bot" },
        ]);
      }, 1000); // Simulate a bot response after 1 second
    }
  };

  const handleClose = () => {
    setIsOpen(false); // Close the chatbot
  };

  if (!isOpen) return null; // If isOpen is false, don't render the chatbot

  return (
    <div className="chatbot-container bg-gray-100 p-4 rounded-lg shadow-lg fixed bottom-4 right-4 w-80 z-50">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
      >
        🗣️
      </button>
      
      <div className="chatbox max-h-60 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "text-right" : "text-left"}`}
          >
            <div
              className={`message-content p-2 rounded-lg inline-block ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="input-container flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input w-full p-2 rounded-lg border border-gray-300"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="send-button bg-blue-500 text-white p-2 rounded-lg ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
