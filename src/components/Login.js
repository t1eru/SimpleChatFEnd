import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('login/', { username, password });
      localStorage.setItem('token', res.data.access);
      navigate('/chat');
    } catch (err) {
      setError('Невірний логін або пароль');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Вхід</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Ім’я користувача"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full mb-2"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Увійти
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
