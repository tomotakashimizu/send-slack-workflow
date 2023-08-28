import * as React from 'react';
import axios from 'axios';

export const Component = () => {
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
  const [channel, setChannel] = React.useState(CHANNEL_ID);
  const [message, setMessage] = React.useState('');

  const postMessage = async () => {
    try {
      await axios.post('http://localhost:8080/postMessage', {
        channel,
        message,
      });
      alert('Message sent!');
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <div>
      <input value={channel} onChange={(e) => setChannel(e.target.value)} placeholder='Channel' />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
      <button onClick={postMessage}>Send</button>
    </div>
  );
};

Component.displayName = 'SlackWorkflowModal';
