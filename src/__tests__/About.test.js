import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About component', () => {
  it('renders static content', () => {
    render(<About />);
    expect(screen.getByText('Про додаток')).toBeInTheDocument();
    expect(screen.getByText('Це простий чат, створений для лабораторної роботи.')).toBeInTheDocument();
    expect(screen.getByAltText('Chat App Icon')).toBeInTheDocument();
  });
});