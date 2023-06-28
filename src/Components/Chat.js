import React, { useState, useEffect } from 'react';
import './Chat.css';

const ChatApp = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages between the selected user and the logged-in user
  useEffect(() => {
    fetchMessages();
  }, [selectedUser]);

  // Fetch messages from the server
  const fetchMessages = async () => {
    if (!selectedUser) return;

    try {
      const response = await fetch(`/api/messages/${selectedUser.id}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Handle selecting a user to chat with
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setMessages([]);
  };

  // Handle the submission of a new message
  const handleNewMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMessageObject = {
      id: Date.now().toString(), // Generate a unique ID for the message
      text: newMessage,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage('');
  };

  return (
    <div className="chat-app">
      <div className="user-list">
        <h3>USERS</h3>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={selectedUser === user ? 'selected' : ''}
              onClick={() => handleUserSelect(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-box">
        {selectedUser ? (
          <>
            <h3>MESSAGING {selectedUser.name}</h3>
            <div className="message-list">
              {messages.map((message) => (
                <div key={message.id} className="message">
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleNewMessageSubmit}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <p className="no-user-selected">Select a user to start chatting</p>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
