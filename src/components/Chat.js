import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    api.get('messages/').then(res => setMessages(res.data));
  }, []);

  const handleSend = () => {
    if (!text.trim()) return;
    api.post('messages/', { text }).then(res => {
      setMessages([res.data, ...messages]);
      setText('');
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-50">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-4">Чат</h2>
        <div className="border rounded-lg p-4 bg-white shadow mb-4 max-h-96 overflow-y-auto">
          <ul>
            {messages.map(msg => (
              <li key={msg.id} className="mb-2">
                <strong>{msg.user}</strong>: {msg.text}
              </li>
            ))}
          </ul>
        </div>
        <textarea
          className="w-full border border-blue-400 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows="3"
          placeholder="Введіть повідомлення..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="text-center">
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Надіслати
          </button>
        </div>
      </div>
    </div>
  );
}