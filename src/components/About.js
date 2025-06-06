import React from 'react';
import chatIcon from '../chat.png';

export default function About() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Про додаток</h2>
      <p>Це простий чат, створений для лабораторної роботи.</p>
            <img
        src={chatIcon}
        alt="Chat App Icon"
        className="mx-auto w-32 h-32 opacity-80"
      />
    </div>
  );
}