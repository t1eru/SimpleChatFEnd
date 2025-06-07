import { render, screen } from '@testing-library/react';
import PrivateRoute from '../components/PrivateRoute';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('PrivateRoute', () => {
  it('redirects if no token', () => {
    localStorage.removeItem('token');
    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute><div>Secret</div></PrivateRoute>} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('renders children if token exists', () => {
    localStorage.setItem('token', 'test-token');
    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute><div>Secret</div></PrivateRoute>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Secret')).toBeInTheDocument();
  });
});