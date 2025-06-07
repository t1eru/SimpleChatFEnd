import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar component', () => {
  it('shows guest links when not logged in', () => {
    localStorage.removeItem('token');
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Головна')).toBeInTheDocument();
    expect(screen.getByText('Вхід')).toBeInTheDocument();
    expect(screen.getByText('Реєстрація')).toBeInTheDocument();
  });

  it('shows user links when logged in', () => {
    localStorage.setItem('token', 'test-token');
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Чат')).toBeInTheDocument();
    expect(screen.getByText('Профіль')).toBeInTheDocument();
    expect(screen.getByText('Про додаток')).toBeInTheDocument();
    expect(screen.getByText('Вийти')).toBeInTheDocument();
  });
});