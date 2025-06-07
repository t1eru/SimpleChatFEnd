import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import { BrowserRouter } from 'react-router-dom';
import { api } from '../api';

jest.mock('../api');

describe('Login component', () => {
  it('renders input fields and login button', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    expect(screen.getByPlaceholderText("Ім’я користувача")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument();
    expect(screen.getByText('Увійти')).toBeInTheDocument();
  });

  it('shows error message on failed login', async () => {
    api.post.mockRejectedValueOnce(new Error('401'));
    render(<BrowserRouter><Login /></BrowserRouter>);
    fireEvent.change(screen.getByPlaceholderText("Ім’я користувача"), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Пароль'), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByText('Увійти'));
    expect(await screen.findByText('Невірний логін або пароль')).toBeInTheDocument();
  });
});