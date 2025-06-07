import { render, screen, waitFor } from '@testing-library/react';
import Profile from '../components/Profile';
import { api } from '../api';

jest.mock('../api');

describe('Profile component', () => {
  it('renders profile data from API', async () => {
    api.get.mockResolvedValueOnce({
      data: {
        username: 'testuser',
        email: 'test@example.com',
        gender: 'ч',
        birth_date: '2000-01-01',
      }
    });

    render(<Profile />);

    expect(await screen.findByText((_, node) =>
      node.textContent === 'Ім’я: testuser')).toBeInTheDocument();

    expect(screen.getByText((_, node) =>
      node.textContent === 'Email: test@example.com')).toBeInTheDocument();

    expect(screen.getByText((_, node) =>
      node.textContent === 'Стать: ч')).toBeInTheDocument();

    expect(screen.getByText((_, node) =>
      node.textContent === 'Дата народження: 2000-01-01')).toBeInTheDocument();
  });

  it('shows loading message when profile is not yet loaded', async () => {
    
    api.get.mockReturnValue(new Promise(() => {}));

    render(<Profile />);
    expect(screen.getByText('Завантаження профілю...')).toBeInTheDocument();
  });
});
