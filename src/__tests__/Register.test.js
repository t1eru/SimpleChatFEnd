import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';
import { BrowserRouter } from 'react-router-dom';
import { api } from '../api';

jest.mock('../api');

describe('Register component', () => {
  it('renders registration form', () => {
    render(<BrowserRouter><Register /></BrowserRouter>);
    expect(screen.getByPlaceholderText("Ім’я користувача")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Стать (ч/ж/інше)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Дата народження')).toBeInTheDocument();
    expect(screen.getByText('Зареєструватися')).toBeInTheDocument();
  });

  it('shows error on registration failure', async () => {
    api.post.mockRejectedValueOnce(new Error('400'));
    render(<BrowserRouter><Register /></BrowserRouter>);
    fireEvent.change(screen.getByPlaceholderText("Ім’я користувача"), { target: { value: 'user' } });
    fireEvent.click(screen.getByText('Зареєструватися'));
    expect(await screen.findByText('Помилка реєстрації. Перевірте поля.')).toBeInTheDocument();
  });
});