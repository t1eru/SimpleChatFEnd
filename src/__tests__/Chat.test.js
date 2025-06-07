import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from '../components/Chat';
import { api } from '../api';

jest.mock('../api');

describe('Chat component', () => {
  beforeEach(() => {
    api.get.mockResolvedValue({
      data: [
        { id: 1, user: 'User1', text: 'Привіт' },
        { id: 2, user: 'User2', text: 'Як справи?' },
      ]
    });
  });

  it('renders chat messages from API', async () => {
    render(<Chat />);

    expect(await screen.findByText((_, node) =>
      node.textContent === 'User1: Привіт'
    )).toBeInTheDocument();

    expect(screen.getByText((_, node) =>
      node.textContent === 'User2: Як справи?'
    )).toBeInTheDocument();
  });

  it('sends a message and clears input', async () => {
    render(<Chat />);
    await screen.findByText((_, node) => node.textContent === 'User1: Привіт');

    const textarea = screen.getByPlaceholderText('Введіть повідомлення...');
    fireEvent.change(textarea, { target: { value: 'Нове повідомлення' } });

    api.post.mockResolvedValueOnce({
      data: { id: 3, user: 'Me', text: 'Нове повідомлення' }
    });

    fireEvent.click(screen.getByText('Надіслати'));

    await waitFor(() => {
      expect(screen.getByText((_, node) =>
        node.textContent === 'Me: Нове повідомлення'
      )).toBeInTheDocument();
    });

    expect(textarea.value).toBe('');
  });

  it('does not send empty message', () => {
    render(<Chat />);
    fireEvent.click(screen.getByText('Надіслати'));
    expect(api.post).not.toHaveBeenCalled();
  });
});
