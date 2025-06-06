import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('profile/', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(res => setProfile(res.data));
  }, []);

  return profile ? (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Профіль</h2>
      <p><strong>Ім’я:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Стать:</strong> {profile.gender}</p>
      <p><strong>Дата народження:</strong> {profile.birth_date}</p>
    </div>
  ) : (
    <p className="p-4">Завантаження профілю...</p>
  );
}