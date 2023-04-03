import { Dialog } from './Dialog';
import { render, screen } from '@testing-library/react';

describe('Dialog', () => {
  it('should render the Dialog component', () => {
    render(<Dialog />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

