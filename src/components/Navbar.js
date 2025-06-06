import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        {token && (
          <>
            <Link to="/chat" className="mr-4 hover:underline">Чат</Link>
            <Link to="/profile" className="mr-4 hover:underline">Профіль</Link>
            <Link to="/about" className="hover:underline">Про додаток</Link>
          </>
        )}
        {!token && (
          <>
            <Link to="/" className="mr-4 hover:underline">Головна</Link>
            <Link to="/login" className="mr-4 hover:underline">Вхід</Link>
            <Link to="/register" className="hover:underline">Реєстрація</Link>
          </>
        )}
      </div>
      {token && (
        <button onClick={handleLogout} className="text-sm underline">Вийти</button>
      )}
    </nav>
  );
}