import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    birth_date: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await api.post('register/', form);
      navigate('/login');
    } catch (err) {
      setError('Помилка реєстрації. Перевірте поля.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Реєстрація</h2>
      <input
        type="text"
        name="username"
        placeholder="Ім’я користувача"
        className="border p-2 w-full mb-2"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        className="border p-2 w-full mb-2"
        value={form.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Стать (ч/ж/інше)"
        className="border p-2 w-full mb-2"
        value={form.gender}
        onChange={handleChange}
      />
      <input
        type="date"
        name="birth_date"
        placeholder="Дата народження"
        className="border p-2 w-full mb-2"
        value={form.birth_date}
        onChange={handleChange}
      />
      <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded">
        Зареєструватися
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}